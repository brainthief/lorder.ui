import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IEvent } from 'src/components/DailyRoutine';
import { PageCenter } from 'src/components/PageCenter';
import { Project } from 'src/store/projects';
import { Task } from 'src/store/tasks';
import { CurrentTask } from './CurrentTask';
import { DailyRoutine } from './DailyRoutine';
import { Filter } from './Filter';
import { LastEvents } from './LastEvents';
import { StartForm } from './StartForm';
import { TaskComponent } from './TaskComponent';

export interface IState {
  open: any;
  page: number;
}

export interface IDashboardProps extends RouteComponentProps<{}> {
  filteredTasks: Task[];
  classes?: any;
  currentUserWorkId?: number | string;
  getAllTasks: any;
  getProjectById: (id: number | string) => Project;
}

export class DashboardJsx extends React.PureComponent<IDashboardProps, IState> {
  state = {
    open: {},
    page: 0,
  };

  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    const { filteredTasks } = this.props;
    const { page } = this.state;
    return (
      <PageCenter>
        <DailyRoutine onChange={this.handleOnChange} />
        <Grid item lg={9} md={8} sm={12}>
          <StartForm />
          <List>
            <CurrentTask />
            <Filter />
            {filteredTasks.slice(page * 4, (page + 1) * 4).map(this.renderListItem)}
          </List>
        </Grid>
        <Grid item lg={3} md={4} sm={12}>
          <LastEvents />
        </Grid>
      </PageCenter>
    );
  }

  private handleOnChange(events: IEvent[]): any {
    console.log('values', events);
  }

  private renderListItem = (task: Task) => {
    const { getProjectById } = this.props;
    return <TaskComponent key={task.id} isCurrent={false} project={getProjectById(task.projectId)} task={task} />;
  };
}