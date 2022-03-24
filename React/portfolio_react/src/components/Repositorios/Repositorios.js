import React from 'react'
import style from './Repositorio.module.css';
import ReposGet from './ReposGet';
export default function Repositorios() {
  return (
    <>
    <section>
      <div className={style.sectionRepos}>
        <h2>Repositórios</h2>
      </div>
    </section>

    <section>
      <div className={style.sectionDoisRepos}>
          
          <ReposGet />

      </div>
    </section>
    </>
    )
}
