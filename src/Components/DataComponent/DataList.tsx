import { useDispatch, useSelector } from 'react-redux';
import upArrow from '../../../public/Vector (1).svg';
import downArrow from '../../../public/Vector (2).svg';
import ColumnInstance from './Column';
import { IRootStoreType } from '../../Types/types';
import { useEffect } from 'react';
import { setColumnStyleData } from '../../store/slices/allDataSlice';
import * as S from './DataList.styles';
export default function DataList() {
  const dispatch = useDispatch();
  const data = useSelector((state: IRootStoreType) => state.allDataReducer.columnStyleData.title);

  useEffect(() => {
    data ? '' : dispatch(setColumnStyleData(JSON.parse(localStorage.getItem('columnStyleData') || '')));
  }, []);

  const dataTitleId = useSelector((state: IRootStoreType) => state.allDataReducer.currentDataId);
  const differenceDev = useSelector((state: IRootStoreType) => state.allDataReducer.devTestDifference);
  const differenceProd = useSelector((state: IRootStoreType) => state.allDataReducer.testProdDifference);

  return (
    <S.DataBlock>
      <S.DataBlockTitle>
        <span>Количество пройденных тестов {dataTitleId}</span>
        <div>...</div>
      </S.DataBlockTitle>

      <S.DataBlockColumns>
        <S.RoundLeftDifference round={differenceDev}>
          <div>{differenceDev !== 0 && <img src={differenceDev < 0 ? upArrow : downArrow} alt="arrow" />}</div>
          <div>{differenceDev}</div>
        </S.RoundLeftDifference>
        <S.RoundRightDifference round={differenceProd}>
          <div> {differenceProd !== 0 && <img src={differenceProd < 0 ? upArrow : downArrow} alt="up" />}</div>
          <div>{differenceProd}</div>
        </S.RoundRightDifference>
        <S.DifferenceLineRight></S.DifferenceLineRight>
        <S.DifferenceLineLeft></S.DifferenceLineLeft>

        <S.ColumnsInstances>
          <ColumnInstance column="dev" />
          <ColumnInstance column="test" />
          <ColumnInstance column="prod" />
          <ColumnInstance column="norm" />
        </S.ColumnsInstances>

        <S.BottomColors>
          <S.BottomColors>
            {' '}
            <S.BottomColorsElement data={' rgba(74, 182, 232, 1)'} />
            <div>Клиентская часть</div>
          </S.BottomColors>
          <S.BottomColors>
            <S.BottomColorsElement data={' rgba(170, 111, 172, 1)'} />
            <div>Серверная часть</div>
          </S.BottomColors>
          <S.BottomColors>
            {' '}
            <S.BottomColorsElement data={' rgba(232, 84, 152, 1)'} />
            <div>База данных</div>
          </S.BottomColors>
        </S.BottomColors>
      </S.DataBlockColumns>
    </S.DataBlock>
  );
}
