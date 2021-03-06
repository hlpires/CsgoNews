import React from 'react'
import {millify} from 'millify'
import navi from '../images/navi.png'
import cloud9 from '../images/cloud9.png'
import vitality from '../images/vitality.png'
import ence from '../images/ence.png'
import faze from '../images/faze.png'

import { useGetNewsQuery } from '../services/csnewsApi'




const Home = () => {





  const {data, isFetching} = useGetNewsQuery();
  const vitoria = [data?.data?.[0]?.score_won,data?.data?.[1]?.score_won,data?.data?.[2]?.score_won,data?.data?.[3]?.score_won,data?.data?.[4]?.score_won]
  const perdedor = [data?.data?.[0]?.score_lose,data?.data?.[1]?.score_lose,data?.data?.[2]?.score_lose,data?.data?.[3]?.score_lose,data?.data?.[4]?.score_lose,]
  const imagem = [data?.data?.[0].team_won?.image_url,data?.data?.[1].team_won?.image_url,data?.data?.[2].team_won?.image_url,data?.data?.[3].team_won?.image_url,data?.data?.[4].team_won?.image_url]
  const imagem2 = [data?.data?.[0]?.team_lose?.image_url,data?.data?.[1]?.team_lose?.image_url,data?.data?.[2]?.team_lose?.image_url,data?.data?.[3]?.team_lose?.image_url,data?.data?.[4]?.team_lose?.image_url]
  const vencedor = [data?.data?.[0]?.team_won?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_won?.title]
  const perdedorn =  [data?.data?.[0]?.team_lose?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_lose?.title]
  const datajogo = [data?.data?.[0]?.played_at,data?.data?.[1]?.played_at,data?.data?.[2]?.played_at,data?.data?.[3]?.played_at,data?.data?.[4]?.played_at]
  const nacionalidadeV =[data?.data?.[0]?.team_won_country?.image_url,data?.data?.[1]?.team_won_country?.image_url,data?.data?.[2]?.team_won_country?.image_url,data?.data?.[3]?.team_won_country?.image_url,data?.data?.[4]?.team_won_country?.image_url];
  const nacionalidadeL =[data?.data?.[0]?.team_lose_country?.image_url,data?.data?.[1]?.team_lose_country?.image_url,data?.data?.[2]?.team_lose_country?.image_url,data?.data?.[3]?.team_lose_country?.image_url,data?.data?.[4]?.team_lose_country?.image_url];



  console.log(data);

  if( isFetching){
    return "loading..."
  }
  

  return (
  <>
  


    <div className = 'newsformat'>
    
      <div className = 'position'>
        <div className ='leaderboardP'>
           <div className = 'leaderboard'>
             <h4 className = 'leaderboardTittle'>Ranking do campeonato</h4>
             <div className ='timesLeaderboard'>
               <img className='leaderbordImg' src={navi} alt="" /> <h5>Natus Vincere</h5>
             </div>
             <div className ='timesLeaderboard'>
               <img className='leaderbordImg'  src={faze} alt="" /> <h5>Faze</h5>
             </div>
             <div className ='timesLeaderboard'>
               <img  className='leaderbordImg'  src={ence} alt="" /> <h5>Ence</h5>
             </div>
             <div className ='timesLeaderboard'>
               <img  className='leaderbordImg'  src={cloud9} alt="" /> <h5>Cloud9</h5>
             </div>
             <div className ='timesLeaderboard'>
               <img className='leaderbordImg'  src={vitality} alt="" /> <h5>Vitality</h5>
             </div>
           </div>
        </div>
        <div className = 'resultadoP' >
        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV[0]} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          
          <div className ='logo' id = 'logo1'><img  className ="imageteam" id='0' onError={() =>{document.getElementById("0").style.display='none'}}  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam" id='3' onError={() =>{document.getElementById("3").style.display='none'}} src={imagem2[0]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL[0]} alt=""/>
            </div>
         </div> 
         
        </div>
        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV[1]} alt=""/>
            <h3>{vencedor[1]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img className ="imageteam" id='1' onError={() =>{document.getElementById("1").style.display='none'}}  src={imagem[1]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[1] + ' x ' + perdedor[1]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam" id='4' onError={() =>{document.getElementById("4").style.display='none'}} src={imagem2[1]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[1]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL[1]} alt=""/>
            </div>
         </div> 
         
        </div>

        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV[2]} alt=""/>
            <h3>{vencedor[2]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam" id='5' onError={() =>{document.getElementById("5").style.display='none'}} src={imagem[2]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[2] + ' x ' + perdedor[2]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam" id='6' onError={() =>{document.getElementById("6").style.display='none'}} src={imagem2[2]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[2]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL[2]} alt=""/>
            </div>
         </div> 
         
        </div>


        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV[3]} alt=""/>
            <h3>{vencedor[3]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam" id='7' onError={() =>{document.getElementById("7").style.display='none'}} src={imagem[3]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[3] + ' x ' + perdedor[3]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam" id='8' onError={() =>{document.getElementById("8").style.display='none'}} src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[3]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL [3]} alt=""/>
            </div>
         </div> 
         
        </div>


        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV[4]} alt=""/>
            <h3>{vencedor[4]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam" id='9' onError={() =>{document.getElementById("9").style.display='none'}} src={imagem[4]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[4] + ' x ' + perdedor[4]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam" id='10' onError={() =>{document.getElementById("10").style.display='none'}} src={imagem2[4]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[4]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL[4]} alt=""/>
            </div>
         </div> 
         
        </div>
        </div>
      </div>
    </div>
      
      
    
    </>
  )
}

export default Home