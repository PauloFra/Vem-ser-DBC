import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import style from './ReposGet.module.css'


export default function ReposGet() {
    async function  buscaNoRepo () {
        await axios.get('https://api.github.com/users/PauloFra/repos')
        .then((success)=>{
            // console.log(success.data);
            // const {name,git_url} = success.data;
            // console.log(name)
            setRepos(success.data);
            // success.data.map(element =>{
            //     setRepos(element.name)
            // })
        })
    }
    const [repos , setRepos] = useState('');
    console.log(repos)
    useEffect(()=>{
        buscaNoRepo();
    },[])  
  return (
        <div className={style.cardMain}>
            {repos.length && repos.map(element =>(
            <a href={element.clone_url} target='_blank'> <div key={element.id} className={style.card}>
            <div className={style.divH3}>
                <h3>{element.name}</h3>
            </div>
            <div className={style.divDoP}>
                <span>{element.full_name}</span>    
            </div>
           </div>
           </a>
        ))}
        </div>
  )
}
