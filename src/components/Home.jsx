import React from 'react'
import {millify} from 'millify'
import { Typography,Row,Col,Statistic,Space} from 'antd'

import { useGetNewsQuery } from '../services/csnewsApi'

const {Title} = Typography;

var numerodejogos; 


const Home = () => {

  const {data, isFetching} = useGetNewsQuery();
  const vitoria = [data?.data?.[0]?.score_won,data?.data?.[1]?.score_won,data?.data?.[2]?.score_won,data?.data?.[3]?.score_won,data?.data?.[4]?.score_won]
  const perdedor = [data?.data?.[0]?.score_lose,data?.data?.[1]?.score_lose,data?.data?.[2]?.score_lose,data?.data?.[3]?.score_lose,data?.data?.[4]?.score_lose,]
  const imagem = [data?.data?.[0].team_won?.image_url,data?.data?.[1].team_won?.image_url,data?.data?.[2].team_won?.image_url,data?.data?.[3].team_won?.image_url,data?.data?.[4].team_won?.image_url]
  const imagem2 = [data?.data?.[0]?.team_lose?.image_url,data?.data?.[1]?.team_lose?.image_url,data?.data?.[2]?.team_lose?.image_url,data?.data?.[3]?.team_lose?.image_url,data?.data?.[4]?.team_lose?.image_url]
  const vencedor = [data?.data?.[0]?.team_won?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_won?.title]
  const datajogo = [data?.data?.[0]?.played_at,data?.data?.[1]?.played_at,data?.data?.[2]?.played_at,data?.data?.[3]?.played_at,data?.data?.[4]?.played_at]
  



  console.log(datajogo);

  if( isFetching){
    return "loading..."
  }
  

  return (
  <>
  
    <Title level = {3} className = 'heading'>Counter Strike Global Ofensive NEWS</Title>

    <Row className = 'news'>
      
        <Col span = {6} >< Statistic title= ' Data do jogo ' value= {datajogo[0]}/> </Col>
        <Col span = {6} >< Statistic title= ' Time vencedor ' value= {vencedor[0]}/> </Col>
        
    </Row>

    <div className = 'newsformat'>
    
        <img  className ="imageteam"  src={imagem[0]} alt="" />

        <div span = {3} ><h1 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h1> </div>
        <img className ="imageteam" src={imagem2[0]} alt="" />   
      </div>
      
      <Row className = 'news'>
      
        <Col span = {6} >< Statistic title= ' Data do jogo  ' value= {datajogo[1]}/> </Col>
        <Col span = {6} >< Statistic title= ' Time vencedor ' value= {vencedor[1]}/> </Col>
        
    </Row>

    <div className = 'newsformat'>
    
        <img  className ="imageteam"  src={imagem[1]} alt="" />

        <div span = {3} ><h1 className = 'versus' > {vitoria[1] + ' x ' + perdedor[1]} </h1> </div>
        <img  className ="imageteam"  src={imagem2[1]} alt="" />
      </div>

      <Row className = 'news'>
      
        <Col span = {6} >< Statistic title= ' Data do jogo  ' value= {datajogo[2]}/> </Col>
        <Col span = {6} >< Statistic title= ' Time vencedor ' value= {vencedor[2]}/> </Col>
        
    </Row>

    <div className = 'newsformat'>
    
        <img  className ="imageteam"  src={imagem[2]} alt="" />

        <div span = {3} ><h1 className = 'versus' > {vitoria[1] + ' x ' + perdedor[2]} </h1> </div>
        <img className ="imageteam" src={imagem2[2]} alt="" />   
      </div>

      <Row className = 'news'>
      
        <Col span = {6} >< Statistic title= ' Data do jogo  ' value= {datajogo[3]}/> </Col>
        <Col span = {6} >< Statistic title= ' Time vencedor ' value= {vencedor[3]}/> </Col>
        
    </Row>

    <div className = 'newsformat'>
    
        <img  className ="imageteam"  src={imagem[3]} alt="" />

        <div span = {3} ><h1 className = 'versus' > {vitoria[3] + ' x ' + perdedor[3]} </h1> </div>
        <img className ="imageteam" src={imagem2[3]} alt="" />   
      </div>
      
      
      
   
    </>
  )
}

export default Home