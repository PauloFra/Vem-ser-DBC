import React from 'react'
import style from './ListaUsers.module.css'
import usuarioDefault from './userdefault.png'
import pic from './pic.png'
import { PessoasDTO } from '../../modal/PessoasDTO'
import { 
    IoMdMore,
    IoMdSearch,
    IoMdNotifications,
    IoMdFunnel,
    IoMdReturnLeft

} from "react-icons/io";
function ListaUsers({pessoas}:PessoasDTO) {
  return (
    <>
    <div className={style.bigContent}>
    <div className={style.secondHeader}>
        <h2>Tickets</h2>
        <div className={style.secondHeader}>
            <ul>
                <li><a href=""><IoMdSearch /></a></li>
                <li><a href=""><IoMdNotifications /></a></li>
            </ul>
            <div className={style.nameAndFoto}>
                <h5>Nome do Usuario</h5>
                <a href=""><img src={pic} alt="" /></a>
            </div>
        </div>
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

                </tr>
           </thead>
            {pessoas.map((pessoa,ind)=>(
                <tbody key={ind}>
                    <tr >
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
                    <th><IoMdMore /></th>
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