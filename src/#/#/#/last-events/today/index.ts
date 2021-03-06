import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import Range from '@components/range';

import { todayUserWorksWithoutDefault, totalTimeSpentToday } from '#/@store/user-works';

import { IState, IUserWork } from '@types';

interface IMappedProps {
  rangeUserWorks: IUserWork[];
  title: string;
  total: string;
}

const curTitle = () => 'Сегодня';

const mapStateToProps = createStructuredSelector<IState, IMappedProps>({
  rangeUserWorks: todayUserWorksWithoutDefault,
  title: curTitle,
  total: totalTimeSpentToday,
});

export default connect(mapStateToProps)(Range);
