import React from 'react'
import {millify} from 'millify'
import { Typography,Row,Col,Statistic,Space} from 'antd'

import { useGetNewsQuery } from '../services/csnewsApi'

const {Title} = Typography;

var numerodejogos; 

const Home = () => {

  const {data, isFetching} = useGetNewsQuery();
  const vitoria = data?.data?.[0]?.score_won;
  const perdedor = data?.data?.[0]?.score_lose;
  const imagem = data?.data?.[0]?.team_won?.image_url;
  const imagem2 = data?.data?.[0]?.team_lose?.image_url;
  const vencedor = data?.data?.[0]?.team_won?.title;
  const nimagem = data?.data?.[0]?.team_won?.image_url;

  console.log(data);

  if( isFetching){
    return "loading..."
  }
  if(perdedor == 1 ){
    numerodejogos  = 3;
  }else{
    numerodejogos  = 2;
  }

  return (
  <>
  
    <Title level = {3} className = 'heading'>Counter Strike Global Ofensive NEWS</Title>

    <Row className = 'news'>
      
        <Col span = {2} >< Statistic title= ' Numero de jogos ' value= {numerodejogos}/> </Col>
        <Col span = {2} >< Statistic title= ' Time vencedor ' value= {vencedor}/> </Col>
        
    </Row>

    <div className = 'newsformat'>
    
        <img  className ="imageteam"  src={imagem} alt="" />

        <div span = {3} ><h1 className = 'versus' >= ' Resultado da partida' {vitoria + ' x ' + perdedor} </h1> </div>
        <img className ="imageteam" src={imagem2} alt="" />   
      </div>
      
   
    </>
  )
}

export default Home