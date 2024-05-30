import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',

  initialState: {
    currentDataId: [],
    columnStyleData: {
      title: '',
      dev: {
        front: 0,
        back: 0,
        db: 0,
      },
      test: {
        front: 0,
        back: 0,
        db: 0,
      },
      prod: {
        front: 0,
        back: 0,
        db: 0,
      },
      norm: 0,
    },
    instancesHeight: {
      devHeight: 0,
      testHeight: 0,
      prodHeight: 0,
      normHeight: 0,
    },
    devTestDifference:0,
    testProdDifference:0
  },
  reducers: {
    setCurrentDataId(state, action) {
      state.currentDataId = action.payload;
      localStorage.getItem('currentDataId') === null
        ? localStorage.setItem('currentDataId', JSON.stringify(action.payload))
        : '';
    },
    setColumnStyleData(state, action) {
      state.columnStyleData = action.payload;

      const devValue = state.columnStyleData.dev.back + state.columnStyleData.dev.front + state.columnStyleData.dev.db;
      const testValue =
        state.columnStyleData.test.back + state.columnStyleData.test.front + state.columnStyleData.test.db;
      const prodValue =
        state.columnStyleData.prod.back + state.columnStyleData.prod.front + state.columnStyleData.prod.db;
      const normValue = state.columnStyleData.norm;
      const maxValue = Math.max(devValue, testValue, prodValue)!==0?Math.max(devValue, testValue, prodValue):1;
      
         localStorage.setItem('columnStyleData', JSON.stringify(action.payload))
       
      state.instancesHeight.devHeight = Math.ceil((290 * Math.ceil((devValue * 100) / maxValue)) / 100);
      state.instancesHeight.testHeight = Math.ceil((290 * Math.ceil((testValue * 100) / maxValue)) / 100);
      state.instancesHeight.prodHeight = Math.ceil((290 * Math.ceil((prodValue * 100) / maxValue)) / 100);
      state.instancesHeight.normHeight =
        state.columnStyleData.norm !== 0 ? Math.ceil((290 * Math.ceil((normValue * 100) / maxValue)) / 100) : 80;
    state.devTestDifference=testValue-devValue
    state.testProdDifference=prodValue-testValue
    
      },
  },
});
export const { setColumnStyleData, setCurrentDataId } = dataSlice.actions;
export default dataSlice.reducer;
