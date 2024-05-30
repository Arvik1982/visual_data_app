import { useNavigate } from 'react-router-dom';
import * as S from './Choose.styles';
import { useDispatch } from 'react-redux';
import { setColumnStyleData } from '../../store/slices/allDataSlice';
import { columnStyleDataArray } from '../../helpers/data/base';
import { DataChoosePropsType } from '../../Types/types';

export default function DataChoose({ title }: DataChoosePropsType) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const chooseClickHandler = (id: string) => {
    dispatch(
      setColumnStyleData(
        columnStyleDataArray.filter((el) => {
          return el.title === id;
        })[0],
      ),
    );
    navigate(`/${id}`);
  };

  return (
    <S.ContentBlock
      onClick={() => {
        chooseClickHandler(title);
      }}
    >
      <div>{title}</div>
    </S.ContentBlock>
  );
}
