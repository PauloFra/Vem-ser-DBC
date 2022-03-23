import {useEffect} from 'react';
import axios from 'axios';
function Inicial(){ 
    async function setup(){
        // const {data} = await axios.get('https://api.github.com/users/PauloFra');
        // console.log(data);
        // console.log(data.login);
        // console.log(data.login);
        const {data} = await axios.get('https://api.github.com/users/PauloFra/repos');
     
        //busca nome dos repositorios
        data.map(element => (
            console.log(element.name)
        ))
      
    }


    useEffect(()=>{
        setup()
    },[])
    return(
        <div>
            <input type="text"/>
            
        </div>
    )
}
export default Inicial