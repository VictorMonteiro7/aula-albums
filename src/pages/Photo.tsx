import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Api } from "../api";
import { Buttons } from "../components/Botoes";
import { TypePhotosAlbum } from "../Types";

export const Photo = ()=>{
  const [data, setData] = useState<TypePhotosAlbum>();
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  
  async function getPhoto(){
    setLoading(true)
    const res = await Api.getApi(`/photos/${id}`);
    setLoading(false);
    setData(res.data);
  }

  useEffect(()=>{
    getPhoto()
  },[])
  
  return (
    <>
    <Buttons choosen="prev"/>
    <hr/><br/>
    {!data && loading && <h1>Carregando...</h1>}
    {data && <>
      <p>{data.title}</p>
      <img src={data.url} alt={data.title}/>
    </>
    }
    </>
  )
}