import { useEffect, useState } from 'react';
import {useParams, useSearchParams, useNavigate} from 'react-router-dom';
import { Api } from '../api';
import { TypePhotosAlbum } from '../Types';
import * as S from '../styles/Style';
import { Buttons } from '../components/Botoes';

export const Album = ()=>{
  const [data, setData] = useState<TypePhotosAlbum[]>([])
  const {id} = useParams();
  const [params, useSearchParms] = useSearchParams();
  const title = params.get('title');
  const navigate = useNavigate();
  async function getAlbum(){
    const res = await Api.getApi(`/albums/${id}/photos`);    
    setData(res.data)    
  }

  useEffect(()=>{
    getAlbum();
  },[])

  function handleOpenPhoto(id:number){
    navigate(`/photo/${id}`);
  }

  return(
    <>
    <Buttons choosen="prev"/>
    <h1>{title}</h1>
    <S.albumPhotos>           
      {data.map(item=>(
        <div key={item.id} onClick={()=>handleOpenPhoto(item.id)}>
          <img src={item.thumbnailUrl} alt={item.title}/>
        </div>
      ))}
    </S.albumPhotos>
    </>
  )
}