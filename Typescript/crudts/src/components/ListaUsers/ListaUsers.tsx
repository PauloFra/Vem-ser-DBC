
import style from '../../CommunCss/tableList.module.css'
import SubHeader from '../SubHeader/SubHeader';
import { PessoasDTO } from '../../modal/PessoasDTO'
import { Link } from 'react-router-dom';
import api from '../../api';
import { 
    IoIosColorWand,
    IoMdSearch,
    IoMdTrash,
    IoMdFunnel,
    IoMdReturnLeft

} from "react-icons/io";

function ListaUsers({pessoas}:PessoasDTO) {

    const removePessoa = async(idPessoa:number) =>{
        try{
            const {data} = await api.delete(`/pessoa/${idPessoa}`)
            alert('Usuario Deletado')
            document.location.reload();
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <>
    <div className={style.bigContent}>
    <div className={style.secondHeader}>
        <h2>Tickets</h2>
        <SubHeader />
    </div>
      <div className={style.divDaLista}>
        <div className={style.headerTable}>
            <h2>All Tickets</h2>
            <ul>
                <li><a href=""><IoMdReturnLeft /> Filter</a></li>
                <li><a href=""><IoMdFunnel /> Sort</a></li>
            </ul>
        </div>
        <table className={style.mainTable}>
           <thead>
                <tr className={style.cabeçalhoTable}>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                    <th>Atualizar / Remover</th>
                </tr>
           </thead>
            {pessoas.map((pessoa,ind)=>(
                <tbody key={ind}>              
                <tr>
                <th>    
                    {pessoa.nome}
                </th>    
                <th>  
                    {pessoa.email}
                </th>
                <th>
                    {pessoa.cpf}
                </th>
                <th>
                    {pessoa.dataNascimento}
                </th>
                <th className={style.textCenter}>
                    <div  className={style.divFlex}>
                        <Link to={`/set-users/${pessoa.idPessoa}/`}> 
                            <div className={style.divEdit}>
                                <IoIosColorWand />
                            </div>
                        </Link> 

                        <a onClick={()=>{removePessoa(pessoa.idPessoa)}} href="#">
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
    </div>
    </>
  )
}

export default ListaUsers