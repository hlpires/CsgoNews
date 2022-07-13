import React from 'react'
import {millify} from 'millify'
import navi from '../images/navi.png'
import cloud9 from '../images/cloud9.png'
import vitality from '../images/vitality.png'
import ence from '../images/ence.png'
import faze from '../images/faze.png'

import { useGetNewsQuery } from '../services/csnewsApi'



var numerodejogos; 


const Home = () => {

  const {data, isFetching} = useGetNewsQuery();
  const vitoria = [data?.data?.[0]?.score_won,data?.data?.[1]?.score_won,data?.data?.[2]?.score_won,data?.data?.[3]?.score_won,data?.data?.[4]?.score_won]
  const perdedor = [data?.data?.[0]?.score_lose,data?.data?.[1]?.score_lose,data?.data?.[2]?.score_lose,data?.data?.[3]?.score_lose,data?.data?.[4]?.score_lose,]
  const imagem = [data?.data?.[0].team_won?.image_url,data?.data?.[1].team_won?.image_url,data?.data?.[2].team_won?.image_url,data?.data?.[3].team_won?.image_url,data?.data?.[4].team_won?.image_url]
  const imagem2 = [data?.data?.[0]?.team_lose?.image_url,data?.data?.[1]?.team_lose?.image_url,data?.data?.[2]?.team_lose?.image_url,data?.data?.[3]?.team_lose?.image_url,data?.data?.[4]?.team_lose?.image_url]
  const vencedor = [data?.data?.[0]?.team_won?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_won?.title]
  const perdedorn =  [data?.data?.[0]?.team_lose?.title,data?.data?.[1]?.team_won?.title,data?.data?.[2]?.team_won?.title,data?.data?.[3]?.team_won?.title,data?.data?.[4]?.team_lose?.title]
  const datajogo = [data?.data?.[0]?.played_at,data?.data?.[1]?.played_at,data?.data?.[2]?.played_at,data?.data?.[3]?.played_at,data?.data?.[4]?.played_at]
  const nacionalidadeV =[data?.data?.[0]?.team_won_country?.image_url];
  const nacionalidadeL =[data?.data?.[0]?.team_lose_country?.image_url];



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
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam"  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam"  src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL} alt=""/>
            </div>
         </div> 
         
        </div>
        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam"  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam"  src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL} alt=""/>
            </div>
         </div> 
         
        </div>

        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam"  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam"  src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL} alt=""/>
            </div>
         </div> 
         
        </div>


        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam"  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam"  src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL} alt=""/>
            </div>
         </div> 
         
        </div>


        <div className = 'resultadoBox'>
         <div className ='timeVencedor'>
         
          <div className = 'timeVname'>
            <img className='bandeiraImg' id ='bandeira1'src={nacionalidadeV} alt=""/>
            <h3>{vencedor[0]}</h3>
          </div>
          <div className ='logo' id = 'logo1'><img  className ="imageteam"  src={imagem[0]} alt="" /></div>
          <div className='resultado' ><h2 className = 'versus' > {vitoria[0] + ' x ' + perdedor[0]} </h2></div>
          <div className ='logo' id = 'logo2'><img  className ="imageteam"  src={imagem2[3]} alt="" /></div>
          <div className = 'timeVname'>
            <h3>{perdedorn[0]}</h3>
            <img className='bandeiraImg' src={nacionalidadeL} alt=""/>
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