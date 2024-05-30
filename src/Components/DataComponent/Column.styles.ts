import styled from 'styled-components';

interface IProps {
    height: number;
    data?:string
  }

export const InstanceColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;    
width: 80px;
`;

export const Instances = styled.div<IProps>`
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: flex-end;
border: solid 4px white;
height:${(props) => `${props.height > 80 ? props.height : 80}px` }
`;
export const Front = styled.div<IProps>`
width: 80px;
height: 50%;
background-color: rgba(74, 182, 232, 1);
border-top-left-radius: 10px;
border-top-right-radius:10px ;
display: flex;
justify-content: center;
align-items: center;
color: wite;
height:${(props) => `${props.height > 5 ? props.height : 33}%` }
`;

export const Back = styled.div<IProps>`
width: 80px;
min-height: 30%;
background-color: rgba(170, 111, 172, 1);
display: flex;
justify-content: center;
align-items: center;
height:${(props) => `${props.height > 5 ? props.height : 33}%` }
`;
export const Db = styled.div<IProps>`
width: 80px;
min-height: 20%;
background-color: rgba(232, 84, 152, 1);
border-bottom-left-radius: 10px;
border-bottom-right-radius:10px ;
display: flex;
justify-content: center;
align-items: center;
height:${(props) => `${props.height > 5 ? props.height : 33}%` }
`;

export const Normative= styled.div`
width: 80px;
display: flex;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;

export const Norm = styled.div<IProps>`
width: 80px;
position: relative;
border-radius: 10px; 
height:${(props) => `${props.height}px` }
`;

export const NormLabel = styled.span`
max-width: 48px;
max-height: 24px;
border-radius: 5px;
padding: 7px;
position: absolute;
color: rgba(137, 130, 144, 1);
background-color: white;
top: 50%;
left: 30%; 
`;
export const NormBackgroundImg = styled.img`
object-fit: cover;
width: 80px;
border-radius: 10px;
height:${(props) => `${props.height }px` }
`;
