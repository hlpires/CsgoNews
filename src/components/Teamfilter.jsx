import  React, {useState} from 'react'

const Teamfilter = () => {


// filtro de times array com multiplos times 
const lista = ['navi','pain','spirit','imperial','MIBR'];
const [names,setNames] = useState('null');
const [time,setTime] = useState('null');
const myTeam = (val) =>{
setNames(val.target.value)

}

function timeescolido (elemento){
console.log(elemento.currentTarget.textContent)
setTime(elemento.currentTarget.textContent)
}



  return (
    <div className = 'teamfilter'>
        <div className = 'teamselect'>
        <input type="text" id="myInput" onChange={myTeam} placeholder="Pesquise Times" value={time}></input>

          <div>
            {lista.filter(name => name.includes(names)).map(filteredName => (
            <li  className = 'lista' onClick={timeescolido} >
            {filteredName}
            
            
            </li>))}
          </div>
        
        </div>

    </div>
  )
}

export default Teamfilter