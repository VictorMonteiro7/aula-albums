import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { TypeAlbum } from "../Types"
import { Api } from "../api"
import * as S from '../styles/Style'
export const Albums = ()=>{
  const [data, setData] = useState<TypeAlbum[]>([])
  const navigate = useNavigate();
  async function getApi (){
    const res = await Api.getApi('/albums'); 
    setData(res.data)
  }
  function handleClickAlbum(id:number, title: string){
    navigate(`/album/${id}?title=${title}`)
  }

  useEffect(()=>{
    getApi();
  },[])
  return (
    <ul>
      {data.map((item)=>(
        <S.Li onClick={()=>handleClickAlbum(item.id, item.title)} key={item.id}>{item.title}</S.Li>
      ))}
    </ul>
  )  
}