import { useEffect ,useState} from 'react'
import style from './perfil.module.css';
import axios from 'axios';
import fotoPerfil from '../images/fotoperfil.jpg'
export default function Perfil() {
    function perfilRequest(){
        axios.get('https://api.github.com/users/PauloFra')
        .then((success)=>{
          setLogin(success.data.login);
          setNome(success.data.name);
          setBio(success.data.bio);
          setEmpresa(success.data.company);
          setLocal(success.data.location);
          setFoto(success.data.avatar_url);
          console.log()
         
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
    <main>
    <div>
        <div className={style.fotoENome}>
          <img src={foto} alt="" />
          <h2>{login}</h2>
        </div>
        <div>
          <div className={style.basicInfo}>
          <label htmlFor="">Nome:</label>
          <input type="text" value={nome} />
          <label htmlFor="">Biografia:</label>
          <textarea name="" id="" value={bio}></textarea>
          <label htmlFor="">Empresa:</label>
          <input type="text" value={empresa} />
          <label htmlFor="">Localidade:</label>
          <input type="text" value={local} />
          </div>
          {/* <p>Empresa:{empresa}</p>
          <p>Localidade:{local}</p> */}
        </div>
    </div>
    </main>
    )
}
