import {useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import style from '../../CommunCss/tableList.module.css'
import { MaskCpf } from '../../Utils';
import SubHeader from '../SubHeader/SubHeader';
import api from '../../api';
import { 
  IoMdTrash,
  IoIosColorWand,
  IoMdFunnel,
  IoMdReturnLeft
} from "react-icons/io";
function ListAddress() {
  const {arrayEndereço ,getInEndereço} = useContext<any>(AuthContext)
  
  useEffect(()=>{
    getInEndereço()   
  },[])
  
  const removeEndereco = async (idEndereco:number) => {
    try{
        const {data} = await api.delete(`/endereco/${idEndereco}`)
        alert('Endereço deletado')
        document.location.reload();
    }
    catch(error){
        console.log(error);
    }      
  }

  return (
    <div className={style.bigContent}>
    <div className={style.secondHeader}>
        <h2>Contacts</h2>
        <SubHeader />
    </div>
      <div className={style.divDaLista}>
        <div className={style.headerTable}>
            <h2>All Contacts</h2>
            <ul>
                <li><a href=""><IoMdReturnLeft /> Filter</a></li>
                <li><a href=""><IoMdFunnel /> Sort</a></li>
            </ul>
        </div>
        <table className={style.mainTable}>
           <thead>
                <tr className={style.cabeçalhoTable}>
                    <th>Cep</th>
                    <th>Cidade</th>
                    <th>Complemento</th>
                    <th>Logradouro</th>
                    <th>pais</th>
                    <th>Tipo</th>
                    <th>Atualizar / Remover</th>
{/* cep: "88080700"
cidade: "Florianópolis"
complemento: "casa"
estado: "SC"
idEndereco: 1
logradouro: "Rua José Dos Santos"
numero: 120
pais: "Brasil"
tipo: "RESIDENCIAL"
[[Prototype]]: Object */}
                </tr>
           </thead>
            {arrayEndereço && arrayEndereço.map((element:any,ind:any)=>(
                <tbody key={ind}>
                    <tr>
                    <th>
                        {MaskCpf(element.cep)}
                    </th>
                    <th>
                        {element.cidade}
                    </th>
                    <th>
                    {element.complemento ? element.complemento : <>Sem Complemento</>}
                    </th>
                    <th>
                        {element.logradouro}
                    </th>
                    <th>
                        {element.pais}
                    </th>
                    <th>
                        {element.tipo}
                    </th>
                     <th>
                     <div  className={style.divFlex}>
                        <Link to={`/address/${element.idEndereco}`}> 
                            <div className={style.divEdit}>
                                <IoIosColorWand />
                            </div>
                        </Link> 
                        
                        <a onClick={()=>{removeEndereco(element.idEndereco)}} href="#">
                            <div  className={style.divRemove}>
                                <IoMdTrash /> 
                            </div>
                        </a>
                        
                    </div> 
                     </th>
                    </tr>
                    </tbody>
            ))}
            </table> 
      </div>
    </div>)
}

export default ListAddress