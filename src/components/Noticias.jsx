import React from 'react'
import Fallen from "../images/fallen.jpg"
import Torneio from "../images/torneio.jpg"
import Patsi from "../images/patsi.jpg"


const Noticias = () => {
  return (
    <div className='noticias'>
    <div className = "e-sports">
    <img className = 'noticiasimage' src={Torneio} alt=""></img>
    <p className = "noticiastext">O PGL Major Antuérpia 2022, também conhecido como PGL Major 2022 ou Antuérpia 2022,
         foi o décimo sétimo Counter-Strike: Global Offensive Major Championship.
         </p>
    </div>
    <div className = "e-sports">
    <img  className = 'noticiasimage' src={Fallen} alt=""></img>
    <p className = "noticiastext">Depois de conseguir seu primeiro título pela Imperial,
         os jogadores de Counter-Strike: Global Offensive usaram as redes sociais para comemorar.
          </p>
    </div>
    <div id = 'patsi' className = "e-sports">
    <img className = 'noticiasimage' src={Patsi} alt=""></img>
      <p className = "noticiastext">
        O Spirit está no Legends Stage do PGL Major 
        Antwerp depois de se classificar com um recorde de 3-1,
        derrotando o Astralis na final
      </p>
    </div>
 
 
    
    </div>
  )
}

export default Noticias