import { useNavigate } from 'react-router-dom';
import * as S from '../styles/Style';


type PropsButton = {
  choosen: 'prev' | 'next';
}

export const Buttons = (props: PropsButton) => {
  const navigate = useNavigate();
  function handleClickPrev() {
    navigate(-1);
  }
  function handleClickNext() {
    navigate(+1);
  }
  return (
    <S.Button onClick={props.choosen === "prev" ? handleClickPrev : handleClickNext}> {props.choosen === 'prev' ? 'Voltar' : 'Avançar'} </S.Button>
  );
}