import React from 'react'
import style from './ListaUsers.module.css'
import { PessoasDTO } from '../../modal/PessoasDTO'
function ListaUsers({pessoas}:PessoasDTO) {
  return (
    <>
    <div className={style.bigContent}>
    <div className={style.secondHeader}>
        <h2>Tickets</h2>
        <div className={style.secondHeader}>
            <ul>
                <li><a href="">Lupa</a></li>
                <li><a href="">sino</a></li>
                <li><a href="">Nome Usuario</a></li>
            </ul>
        </div>
    </div>
      <div className={style.divDaLista}>
        <div className={style.headerTable}>
            <h2>All Tickets</h2>
            <ul>
                <li><a href="">Lupa</a></li>
                <li><a href="">sino</a></li>
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