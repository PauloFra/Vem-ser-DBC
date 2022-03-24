import { useEffect ,useState} from 'react'
import style from './perfil.module.css';
import axios from 'axios';
import fotoPerfil from '../images/fotoperfil.jpg'
export default function Perfil() {
    function perfilRequest(){
        axios.get('https://api.github.com/users/PauloFra')
        .then((success)=>{
          const {login , name ,bio , company , location , avatar_url} = success.data;
          setLogin(login);
          setNome(name);
          setBio(bio);
          setEmpresa(company);
          setLocal(location);
          setFoto(avatar_url);
        }).catch((erros)=>{
          alert('Erro de request :(')
        })
    }
    const [login , setLogin] = useState('');
    const [nome , setNome] = useState('');
    const [bio , setBio] = useState('');
    const [empresa , setEmpresa] = useState('');
    const [local , setLocal] = useState('');
    const [foto , setFoto] = useState('');
    useEffect(()=>{
        perfilRequest()
    },[] );
    
  return (

<section>
    <div className={style.Introduc}>
      <h1> É um prazer receber você no meu portfolio. Estou à sua disposição, não hesite em entrar em contato comigo, sempre que precisar.</h1>
    </div>
    <div className={style.bgPerfil}>
      
  <div className={style.sectionDiv}>
    <div className={style.fotoENome}>
      <img src={foto} alt=""/>
      <h2>{login}</h2>
        </div>
        <div>
        <div className={style.basicInfo}>
        {nome &&
        <>
        <label htmlFor="">Nome:</label>
        <input type="text" value={nome}/>
        </>}
        {bio && 
        <>
        <label htmlFor="">Biografia:</label>
        <textarea name="" id="" value={bio}></textarea>
        </>}
        {empresa &&
        <>
        <label htmlFor="">Empresa:</label>
        <input type="text" value={empresa} />
        </>}
        {local && 
        <>
        <label htmlFor="">Localidade:</label>
        <input type="text" value={local} />
        </>}
        </div>
    </div>
  </div>
    </div>
  
</section>
    )
}
