import * as localForage from 'localforage';
import { reducer as notifications } from 'react-notification-system-redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form';
import { createTransform, PersistConfig, persistReducer } from 'redux-persist';

import { IState, ROLE } from 'src/@types';
import { DownloadList } from './@common/entities';
import { dialog } from './dialog';
import { identity } from './identity';
import { Project } from './projects';
import { TaskType } from './task-types';
import { uiReducer } from './ui';
import { UserTask } from './user-tasks';
import { User } from './users';

localForage.config({
  description: 'Altiore contribution version 1.0',
  name: 'altiore',
  storeName: 'contribution',
  version: 1.0,
});

const persistConfig: PersistConfig = {
  blacklist: ['dialog', 'form'],
  key: 'altiore',
  storage: localForage,
  transforms: [
    createTransform(
      // transform state on its way to being serialized and persisted.
      (inboundState, key) => {
        // convert mySet to an Array.
        return inboundState;
      },
      // transform state being rehydrated
      (outboundState, key) => {
        const entity = {
          projects: Project,
          taskTypes: TaskType,
          userTasks: UserTask,
          users: User,
        }[key];
        if (!entity) {
          throw new Error(`Could not find entity class name for reducer: '${key}'!`);
        }
        return new DownloadList(entity, outboundState);
      },
      // define which reducers this transform gets called for.
      { whitelist: ['projects', 'taskTypes', 'userTasks', 'users'] }
    ),
  ],
};

export async function createRootReducer(role: ROLE = ROLE.GUEST) {
  let asyncReducers: Partial<Reducer<IState>> = {};
  switch (role) {
    case ROLE.ADMIN:
      asyncReducers = (await import(/* webpackChunkName: "admin" */ 'src/store/adminReducers')).adminReducers;
      break;
    case ROLE.SUPER_ADMIN:
      asyncReducers = (await import(/* webpackChunkName: "super-admin" */ 'src/store/adminReducers')).adminReducers;
      break;
    case ROLE.USER:
      asyncReducers = (await import(/* webpackChunkName: "user" */ 'src/store/userReducers')).userReducers;
      break;
    case ROLE.GUEST:
    default:
      asyncReducers = {};
      break;
  }
  return persistReducer(
    persistConfig,
    combineReducers<IState>({
      dialog,
      form,
      identity,
      notifications,
      router: routerReducer,
      ui: uiReducer,
      ...(asyncReducers as any),
    })
  );
}
