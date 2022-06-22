import  React, {useState} from 'react'

const Teamfilter = () => {


// filtro de times array com multiplos times 
const lista = ['navi','pain','spirit','imperial','MIBR'];
const [names,setNames] = useState('null');
const [time,setTime] = useState(input);

var input = ('')



function resetvalue(){


  console.log(input)
  setTime(input)

}


const myTeam = (val) =>{
setNames(val.target.value)
}



function timeescolido (elemento){
console.log(elemento.currentTarget.textContent)
setTime(elemento.currentTarget.textContent)
setNames('*')

}



  return (
    <div className = 'teamfilter'>
        <div className = 'teamselect'>
        <input type="text" id="myInput" onChange={myTeam} placeholder="Pesquise Times" value={time}>          
        </input>
        <button className = 'clear' onClick ={resetvalue}></button>
        </div>
          <div>
            {lista.filter(name => name.includes(names)).map(filteredName => (
            <li  className = 'lista' onClick={timeescolido}  id = '1'>
            {filteredName}
            
            
            </li>))}
          </div>
        
        

    </div>
  )
}

export default Teamfilter