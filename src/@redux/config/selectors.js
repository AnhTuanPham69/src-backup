import { createSelector } from 'reselect';
import moment from 'moment';

const getRawConfigName = (state, name) => state.config[name];

const getStartUp = state => state.config.startUp;
const getProgram = state => state.config.program;
const getUserReport = state => state.config.userReport;
const getStartUpReport = state => state.config.startUpReport;

export const getUserReportSelector = createSelector(
  [getUserReport],
  (userReport = {}) => {
    return {
      ...userReport,
      data: userReport?.data?.map(report => ({
        date: moment(report.key).format('MMM Do'),
        startUp: report.count_startup,
        coach: report.count_coach,
        service: report.count_provider,
      })),
    }
  },
)

export const getStartUpReportSelector = createSelector(
  [getStartUpReport],
  (startUpReport = {}) => {
    return {
      ...startUpReport,
      data: startUpReport?.data?.map(report => ({
        date: moment(report.key).format('MMM Do'),
        startUp: report.count_startup,
      })),
    }
  },
)

export const getConfigByName = createSelector(
  [getRawConfigName],
  config => config || [],
);

export const getStartUpSummarySelector = createSelector(
  [getStartUp],
  startUpSummary => {
    return [
      {
        icon: 'ic-user-2',
        backgroundColor: '#4C6FFF',
        title: 'summary.startUp',
        value: startUpSummary?.countTotal || 0,
      },
      {
        icon: 'ic-case',
        backgroundColor: '#FF92AE',
        title: 'summary.inProgress',
        value: startUpSummary?.countProgress || 0,
      },
      {
        icon: 'ic-check',
        backgroundColor: '#66CB9F',
        title: 'summary.done',
        value: startUpSummary?.countDone || 0,
      },
      {
        icon: 'ic-skip',
        backgroundColor: '#F16063',
        title: 'summary.cancelled',
        value: startUpSummary?.countCancelled || 0,
      },
    ]
  },
)
export const getProgramSummarySelector = createSelector(
  [getProgram],
  programSummary => {
    return [
      {
        icon: 'ic-user-2',
        backgroundColor: '#4C6FFF',
        title: 'summary.startUp',
        value: programSummary?.countStartup || 0,
        key: 'startUps',
        path: '/startUps',
      },
      {
        icon: 'ic-case',
        backgroundColor: '#FF92AE',
        title: 'summary.coach',
        value: programSummary?.countCoach || 0,
        key: 'coaches',
        path: '/',
      },
      {
        icon: 'ic-tool',
        backgroundColor: '#FB8429',
        title: 'summary.program',
        value: programSummary?.countProgram || 0,
        key: 'programs',
        path: '/programs',
      },
      {
        icon: 'ic-skip',
        backgroundColor: '#F16063',
        title: 'summary.service',
        value: programSummary?.countService || 0,
        key: 'services',
        path: '/',
      },
    ]
  },
)