import { useContext ,useEffect , useState} from 'react'
import { AuthContext } from '../../context/AuthContext'

import api from '../../api';

import { Formik, Field, Form, FormikHelpers } from 'formik';
 import Loading from '../../components/Loading/Loading';


import Notiflix from 'notiflix';
import FotoDbc from '../../images/download.png'

import { useParams  , useNavigate} from 'react-router-dom'


import { PessoaDTO } from '../../modal/PessoaDTO';
import {
  DivLogo,
  DivCenterForUser,
  InputForm,
  BotaoForm,
  TitleLogin,
  DivBeforeForm,
  ContainerLoginForSetUser
} from '../../CommunCss/Login.style'


function SetUsers() {
  const {objPessoa , setObjPessoa} = useContext<any>(AuthContext)

  const [objPessoaEspecifica , setObjPessoaEspecifica] = useState<any>()
  const {idUsuario} = useParams()
  const navigate = useNavigate()
  console.log('Params=>',idUsuario)

  const PostInUsuarios = async(values:PessoaDTO) =>{
    
    try{
      const {data} = await api.post('pessoa' , values);
      Notiflix.Notify.success('Novo Usuario Criado!')
      setTimeout(() =>{ navigate('/users')}, 1300);
    }
    catch(error){
      console.log(error);
      Notiflix.Notify.failure('Ops! , ocorreu algum erro');
    }
  }
  const atualizarUsuario = async(values:PessoaDTO) => {
    try{
      const {data} = await api.put(`pessoa/${idUsuario}` , values)
      console.log(data)
      Notiflix.Notify.success('Usuario Atualizado!')
      setTimeout(() =>{ navigate('/users')}, 1300); 
    }
    catch(error){
      console.log(error);
      Notiflix.Notify.failure('Ops! , ocorreu algum erro');
    }
  }
  
  const setup = async() =>{
    if(idUsuario){
      try{  
        const {data} = await api.get(`pessoa/{idPessoa}?idPessoa=${idUsuario}`)
        setObjPessoaEspecifica(data)
      }
      catch(error){
        console.log(error);
      }
    }
  }
  useEffect(()=>{
    setup()
  },[])
  console.log(objPessoaEspecifica);
  
  //1) Post em pessoa com os dados dos inputs
  if(idUsuario && !objPessoaEspecifica ){
    return(<Loading />)
}
  return (
    <div>
      <ContainerLoginForSetUser>
      <DivCenterForUser >
      <DivLogo>
       <img src={FotoDbc} width="48" alt="" />
       <h1>Usuario</h1>
      </DivLogo>
      <TitleLogin>{idUsuario ?'Atualize o ' :'Adicione um Novo'} Usuario</TitleLogin>
      <p>Entre com os dados abaixo</p>
           
      <Formik 
       
        initialValues={ 
          idUsuario?
          {
            cpf: objPessoaEspecifica.cpf,
            dataNascimento: objPessoaEspecifica.dataNascimento,
            email: objPessoaEspecifica.email,
            nome: objPessoaEspecifica.nome
          }
          :
          {
            cpf: '',
            dataNascimento: '',
            email: '',
            nome: ''
          }
        }
         onSubmit={(
          values: PessoaDTO,
          { setSubmitting }: FormikHelpers<PessoaDTO>
        ) => {
        
          {idUsuario ? atualizarUsuario(values) : PostInUsuarios(values)} 
        }}
      >
        {props =>(

        <Form >
            <DivBeforeForm>
          <label htmlFor="nome">NOME</label>
          <Field id="nome" name="nome" placeholder="nome" as={InputForm}/>

          <label htmlFor="email">EMAIL</label>
          <Field id="email" name="email" placeholder="email"  as={InputForm}/>
          
          <label htmlFor="cpf">cpf</label>
          <Field id="cpf" name="cpf" placeholder="cpf"  as={InputForm}/>

          <label htmlFor="dataNascimento">DATA DE NASCIMENTO</label>
          <Field id="dataNascimento" name="dataNascimento" placeholder="2022-04-08"  as={InputForm}/>

          <BotaoForm type="submit">{idUsuario ?'Atualizar' :'Adicionar'}</BotaoForm>
          </DivBeforeForm>
        </Form>
         )}
      </Formik>
      </DivCenterForUser>
    </ContainerLoginForSetUser>
    </div>
  )
}

export default SetUsers