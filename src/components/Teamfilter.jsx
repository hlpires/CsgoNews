import  React, {useState} from 'react'

const Teamfilter = () => {

const lista = ['navi','pain','spirit','imperial','MIBR'];
const [names,setNames] = useState('null');
var value


const myTeam = (val) =>{
setNames(val.target.value)
}




  return (
    <div className = 'teamfilter'>
        <div className = 'teamselect'>
        <input type="text" id="myInput" onChange={myTeam} placeholder="Pesquise Times" value = {value}></input>

          <div>
            {lista.filter(name => name.includes(names)).map(filteredName => (
            <li className = 'lista' onClick ={console.log(filteredName)}>
            {filteredName}
            </li>))}
          </div>
        
        </div>

    </div>
  )
}

export default Teamfilter