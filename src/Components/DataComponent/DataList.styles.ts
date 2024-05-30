import styled from 'styled-components';

interface IProps {
    round?: number;
    data?:string
  }

export const DataBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 591px;
  height: 534px;
  border-radius: 7px;
  box-shadow:
    0 7px 21px rgba(83, 92, 105, 0.12),
    0 -1px 6px 0 rgba(83, 92, 105, 0.06);
`;

export const DataBlockTitle = styled.div`
  padding: 5px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const DataBlockColumns = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 591px;
  height: 431px;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;
`;

export const RoundLeftDifference = styled.div<IProps>`
  position: absolute;
  left: 118px;
  top: 13px;
  border: solid 2px white;
  border-radius: 50px;
  min-width: 48px;
  height: 24px;
  color: white;
  display: flex;
  gap: 2px;
  justify-content: center;
  background-color: ${(props) =>props.round? (props.round > 0 ? 'green' : props.round===0 ? 'grey' : 'red'):'grey'};
`;

export const RoundRightDifference = styled.div<IProps>`
  position: absolute;
  right: 255px;
  top: 13px;
  border: solid 2px white;
  border-radius: 50px;
  min-width: 48px;
  height: 24px;
  color: white;
  display: flex;
  gap: 2px;
  justify-content: center;
  background-color: ${(props) =>props.round ? (props.round > 0 ? 'green' : props.round === 0 ? 'grey' : 'red'):'grey'};
`;
export const DifferenceLineLeft = styled.div`
  height: 290px;
  left: 80px;
  position: absolute;
  width: 130px;
  border: solid 1px rgba(137, 130, 144, 1);
  top: 25px;
  z-index: -1;
  border-bottom: 0;
`;
export const DifferenceLineRight = styled.div`
  height: 290px;
  right: 225px;
  position: absolute;
  width: 130px;
  border: solid 1px rgba(137, 130, 144, 1);
  top: 25px;
  z-index: -1;
  border-bottom: 0;
`;

export const ColumnsInstances = styled.div`
display: flex; 
gap: 60px;
box-sizing: border-box;
padding: 16px;
align-items: flex-end;
margin-bottom: 30px;
`;

export const BottomColors = styled.div`
  display: flex;
  gap: 30px;
`;
export const BottomColorsElement = styled.div<IProps>`
  height: 20px;
  width: 20px;
 background-color:${(props)=>props.data}
`;
