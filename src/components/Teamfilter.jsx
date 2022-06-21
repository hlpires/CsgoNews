import  React, {useState} from 'react'

const Teamfilter = () => {

const lista = ['navi','pain','spirit','imperial','MIBR'];
const [names,setNames] = useState('null');
const [item,setItem] = useState('');


const myTeam = (val) =>{
setNames(val.target.value)

}




  return (
    <div className = 'teamfilter'>
        <div className = 'teamselect'>
        <input type="text" id="myInput" onChange={myTeam} placeholder="Pesquise Times" value = {item}></input>

          <div>
            {lista.filter(name => name.includes(names)).map(filteredName => (
            <li  className = 'lista' onChange={() =>setItem(this),console.log(this)}>
            {filteredName}
            </li>))}
          </div>
        
        </div>

    </div>
  )
}

export default Teamfilter