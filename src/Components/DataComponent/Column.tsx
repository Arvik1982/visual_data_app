import { useSelector } from 'react-redux';
import * as S from './Column.styles';
import { useEffect, useState } from 'react';
import normImg from '../../../public/Subtract.svg';
import { ColumPropsType, IRootStoreType } from '../../Types/types';

export default function ColumnInstance({ column }: ColumPropsType) {
  const [isDev, setIsDev] = useState(false);
  const [isTest, setIsTest] = useState(false);
  const [isProd, setIsProd] = useState(false);
  const [isNorm, setIsNorm] = useState(false);

  const columnStyleData = JSON.parse(localStorage.getItem('columnStyleData') || '');

  useEffect(() => {
    if (column === 'dev') {
      setIsDev(true);
    }
    if (column === 'test') {
      setIsTest(true);
    }
    if (column === 'prod') {
      setIsProd(true);
    }
    if (column === 'norm') {
      setIsNorm(true);
    }
  }, []);

  const devHeight = useSelector((state: IRootStoreType) => state.allDataReducer.instancesHeight.devHeight);
  const testHeight = useSelector((state: IRootStoreType) => state.allDataReducer.instancesHeight.testHeight);
  const prodHeight = useSelector((state: IRootStoreType) => state.allDataReducer.instancesHeight.prodHeight);
  const normHeight = useSelector((state: IRootStoreType) => state.allDataReducer.instancesHeight.normHeight);

  const frontHeightDev = Math.ceil(
    (columnStyleData.dev.front * 100) / (columnStyleData.dev.back + columnStyleData.dev.front + columnStyleData.dev.db),
  );
  const backHeightDev = Math.ceil(
    (columnStyleData.dev.back * 100) / (columnStyleData.dev.back + columnStyleData.dev.front + columnStyleData.dev.db),
  );
  const dbHeightDev = Math.ceil(
    (columnStyleData.dev.db * 100) / (columnStyleData.dev.back + columnStyleData.dev.front + columnStyleData.dev.db),
  );

  const frontHeightTest = Math.ceil(
    (columnStyleData.test.front * 100) /
      (columnStyleData.test.back + columnStyleData.test.front + columnStyleData.test.db),
  );
  const backHeightTest = Math.ceil(
    (columnStyleData.test.back * 100) /
      (columnStyleData.test.back + columnStyleData.test.front + columnStyleData.test.db),
  );
  const dbHeightTest = Math.ceil(
    (columnStyleData.test.db * 100) /
      (columnStyleData.test.back + columnStyleData.test.front + columnStyleData.test.db),
  );

  const frontHeightProd = Math.ceil(
    (columnStyleData.prod.front * 100) /
      (columnStyleData.prod.back + columnStyleData.prod.front + columnStyleData.prod.db),
  );
  const backHeightProd = Math.ceil(
    (columnStyleData.prod.back * 100) /
      (columnStyleData.prod.back + columnStyleData.prod.front + columnStyleData.prod.db),
  );
  const dbHeightProd = Math.ceil(
    (columnStyleData.prod.db * 100) /
      (columnStyleData.prod.back + columnStyleData.prod.front + columnStyleData.prod.db),
  );

  return (
    <>
      {isDev && (
        <S.InstanceColumn>
          <S.Instances height={devHeight}>
            <S.Front height={frontHeightDev}>{columnStyleData.dev.front}</S.Front>
            <S.Back height={backHeightDev}>{columnStyleData.dev.back}</S.Back>
            <S.Db height={dbHeightDev}>{columnStyleData.dev.db}</S.Db>
          </S.Instances>
          <span>dev</span>
        </S.InstanceColumn>
      )}

      {isTest && (
        <S.InstanceColumn>
          <div style={{ marginRight: '27px', marginBottom: '-5px' }}>V</div>
          <S.Instances height={testHeight}>
            <S.Front height={frontHeightTest}>{columnStyleData.test.front}</S.Front>
            <S.Back height={backHeightTest}>{columnStyleData.test.back}</S.Back>
            <S.Db height={dbHeightTest}>{columnStyleData.test.db}</S.Db>
          </S.Instances>
          <span>test</span>
        </S.InstanceColumn>
      )}

      {isProd && (
        <S.InstanceColumn>
          <div style={{ marginRight: '-1px', marginBottom: '-6px' }}>V</div>
          <S.Instances height={prodHeight}>
            <S.Front height={frontHeightProd}>{columnStyleData.prod.front}</S.Front>
            <S.Back height={backHeightProd}>{columnStyleData.prod.back}</S.Back>
            <S.Db height={dbHeightProd}>{columnStyleData.prod.db}</S.Db>
          </S.Instances>
          <span>prod</span>
        </S.InstanceColumn>
      )}
      {isNorm && (
        <S.Normative>
          <S.Norm height={normHeight}>
            <S.NormLabel>{columnStyleData.norm}</S.NormLabel>
            <S.NormBackgroundImg height={normHeight} src={normImg} alt="normal" />
          </S.Norm>
          <span>норматив</span>
        </S.Normative>
      )}
    </>
  );
}
