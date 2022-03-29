import {useContext , useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import {ContextLogin} from '../context/Contexto.js'
import { useNavigate } from "react-router-dom";
import style from './login.module.css'

export default function Login() {
    //  const navigate = useNavigate();
     const {ChamarLogin , token } = useContext(ContextLogin);
     console.log(token)
    // console.log(teste)
    // { && navigate('/logout')}
    return (
   <section>
      <div className={style.divLog}>
       <Formik
      initialValues={{
        usuario: '',
        senha: '',
      }}
      onSubmit={async (values) => {
        await ChamarLogin(values)
      }}
    >
      <Form>
        <label htmlFor="usuario">Usuario:</label>
        <Field id="usuario" name="usuario" placeholder="Usuario" />

        <label htmlFor="senha">Senha:</label>
        <Field id="senha" name="senha" placeholder="Senha" />
        <button type="submit">Logar</button>
      </Form>
    </Formik>
    </div>
   </section>
    
  )
}
