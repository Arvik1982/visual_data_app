import store from '../store';

export type IRootStoreType = ReturnType<typeof store.getState>;
export type ColumPropsType = {
  column: string;
};
export type DataChoosePropsType = {
  title: string;
};
