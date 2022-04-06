
import { Formik , Field , Form , FormikHelpers} from "formik"
import { LoginDTO } from "../../modal/LoginDTO"
import FotoDbc from './download.png'
import {
  DivLogo,
  DivCenter,
  InputForm,
  BotaoForm,
  TitleLogin,
  DivBeforeForm,
  ContainerLogin
} from './Login.style'
import { useNavigate } from "react-router-dom"
import {useContext , useEffect} from 'react'
import { AuthContext } from "../../context/AuthContext"
function Login() {
  const navigate = useNavigate()
  const {handleLogin} = useContext<any>(AuthContext);
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/')
    }
},[])
  return (
    <ContainerLogin>
     
     <DivCenter>
      <DivLogo>
       <img src={FotoDbc} width="48" alt="" />
       <p>Dashboard kit</p>
       </DivLogo>
     
     <TitleLogin>Login Vemser</TitleLogin>
    <p>Enter your user and password below</p>
    
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
            <DivBeforeForm>
              <label htmlFor="usuario">USUARIO</label>
              <Field  name="usuario" id="usuario" placeholder="Digite o nome do usuário" as={InputForm}/>
              <label htmlFor="senha">SENHA</label>
              <Field name="senha" type="password" id="senha" placeholder="Digite senha do usuário" as={InputForm}/>
              {/* <button>*</button> */}
              <BotaoForm type="submit">Log in</BotaoForm>
            </DivBeforeForm>  
        </Form>    
          
      </Formik>
      <p>Dont have an account? <a href="">Sing up</a></p>
     </DivCenter>
      
    </ContainerLogin>
  )
}

export default Login