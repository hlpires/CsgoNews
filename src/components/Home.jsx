import React from 'react'
import {millify} from 'millify'


import { useGetNewsQuery } from '../services/csnewsApi'



var numerodejogos; 


const Home = () => {

  const {data, isFetching} = useGetNewsQuery();
  const vitoria = [data?.data?.[0]?.score_won,data?.data?.[1]?.score_won,data?.data?.[2]?.score_won,data?.data?.[3]?.score_won,data?.data?.[4]?.score_won]
  const perdedor = [data?.data?.[0]?.score_lose,data?.data?.[1]?.score_lose,data?.data?.[2]?.score_lose,data?.data?.[3]?.score_lose,data?.data?.[4]?.score_lose,]
  const imagem = [data?.data?.[0].team_won?.image_url,data?.data?.[1].team_won?.image_url,data?.data?.[2].team_won?.image_url,data?.data?.[3].team_won?.image_url,data?.data?.[4].team_won?.image_url]
  const imagem2 = [data?.data?.[0]?.team_lose?.image_url,data?.data?.[1]?.team_lose?.image_url,data?.data?.[2]?.team_lose?.image_url,data?.data?.[3]?.team_lose?.image_url,data?.data?.[4]?.team_lose?.image_url]
  const vencedor = [data?.data?.[0]?.team_won?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_won?.title]
  const datajogo = [data?.data?.[0]?.played_at,data?.data?.[1]?.played_at,data?.data?.[2]?.played_at,data?.data?.[3]?.played_at,data?.data?.[4]?.played_at]
  const nacionalidadeV =[data?.data?.[0]?.team_won_country?.image_url];
  const nacionalidadeL =[];



  console.log(data);

  if( isFetching){
    return "loading..."
  }
  

  return (
  <>
  


    <div className = 'newsformat'>
      <div className = 'position'>
        <div className = 'resultadoBox'>
          <div className ='timeVencedor'>
            <div className ='bandeira'>
              <img className='bandeiraImg' src={nacionalidadeV} alt=""/>
            </div>
          
          <div className = 'timeVname'>{vencedor}</div>
          <img  className ="imageteam"  src={imagem[0]} alt="" />
          </div>
          <div className = 'timePerdedor'></div>
            <div className =''></div>
          <img className ="imageteam" src={imagem2[0]} alt="" />

          <div span = {3} ><h1 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h1> </div>
          
        </div>
      </div>
    </div>
      
      
    
    </>
  )
}

export default Home