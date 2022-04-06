import { Formik , Field , Form , FormikHelpers} from "formik"
import { LoginDTO } from "../../modal/LoginDTO"
import {
  DivForm,
  TitleLogin,
  ContainerLogin
} from './Login.style'

import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext"
function Login() {
  const {handleLogin} = useContext<any>(AuthContext);
  
  return (
    <ContainerLogin>
      <TitleLogin>Login Vemser</TitleLogin>
      <Formik
      initialValues={{
        usuario:'',
        senha:''
      }}
      onSubmit={(
        values:LoginDTO,
        {setSubmitting}:FormikHelpers<LoginDTO>
      ) =>{
        handleLogin(values)
      }}
      >
        <Form>
        <DivForm>
            <label htmlFor="usuario">Usuario:</label>
            <Field name="usuario" id="usuario" placeholder="Digite o nome do usuário"/>
          </DivForm>
          <DivForm>
            <label htmlFor="senha">Senha:</label>
            <Field name="senha" id="senha" placeholder="Digite senha do usuário"/>
          </DivForm>
          <button type="submit">Entrar</button>
        </Form>        
      </Formik>
    </ContainerLogin>
  )
}

export default Login