import React from 'react'
import {millify} from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import {Link} from 'react-router-dom'

const {Title} = Typography;


const Home = () => {
  return (
  <>
    <Title level = {2} className = 'heading'>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Counter Strike Global Ofensive NEWS</Title>
    <Row className = 'news'>
      <Col span = {12} >< Statistic title= ' Numero de jogos ' value= '5'/> </Col>
      <Col span = {12} >< Statistic title= ' Time vencedor ' value= '5'/> </Col>
      <Col span = {12} >< Statistic title= ' Resultado da partida' value= '5'/> </Col> 
      <Col span = {12} >< Statistic title= ' Imagem da pártida ' value= '5'/> </Col>

    </Row>
    </>
  )
}

export default Home