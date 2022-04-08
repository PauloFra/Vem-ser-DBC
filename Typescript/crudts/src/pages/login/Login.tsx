
import { Formik , Field , Form , FormikHelpers} from "formik"
import { LoginDTO } from "../../modal/LoginDTO"
import FotoDbc from './download.png'

import {
  BtnChangeType,
  DivLogo,
  DivCenter,
  InputForm,
  BotaoForm,
  TitleLogin,
  DivBeforeForm,
  ContainerLogin
} from '../../CommunCss/Login.style'

import { useNavigate } from "react-router-dom"
import {useContext , useEffect , useState} from 'react'
import { AuthContext } from "../../context/AuthContext"
function Login() {
  const [inputValue , setInputValue] = useState<any>('password')
  const navigate = useNavigate()
  const {handleLogin} = useContext<any>(AuthContext);
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/')
    }
},[])
const changeType = () =>{
  if(inputValue === 'password'){
      setInputValue('text')
  }else{
    setInputValue('password')
  }  
}
  return (
    <ContainerLogin>
     
     <DivCenter>
      <DivLogo>
       <img src={FotoDbc} width="48" alt="" />
       <p>Painel De Controle kit</p>
      </DivLogo>
     
     <TitleLogin>Login Vemser</TitleLogin>
    <p>Entre com seu usuario e senha abaixo</p>
    
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
              <Field name="senha" type={inputValue} id="senha" placeholder="Digite senha do usuário" as={InputForm} />
              <BtnChangeType onMouseDown={()=>changeType()}>?</BtnChangeType>
              <BotaoForm type="submit">Entrar</BotaoForm>
            </DivBeforeForm>  
        </Form>    
          
      </Formik>
      <p>Não possui uma conta ainda? <a href="">Criar</a></p>
     </DivCenter>
      
    </ContainerLogin>
  )
}

export default Login