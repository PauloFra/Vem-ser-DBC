import { useEffect , useState} from 'react'


import api from '../../api';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import Loading from '../../components/Loading/Loading';
import moment from 'moment';

import Notiflix from 'notiflix';
import FotoDbc from '../../images/download.png'
import { useParams  , useNavigate} from 'react-router-dom'
// import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { PessoaDTO } from '../../modal/PessoaDTO';
import {
  DivError,
  DivLogo,
  DivCenterForUser,
  InputForm,
  BotaoForm,
  TitleLogin,
  DivBeforeForm,
  ContainerLoginForSetUser
} from '../../CommunCss/Login.style'


function SetUsers() {
  const [objPessoaEspecifica , setObjPessoaEspecifica] = useState<any>()
  const {idUsuario} = useParams()
  const navigate = useNavigate()
  console.log('Params=>',idUsuario)

  const PostInUsuarios = async(values:PessoaDTO) =>{

    values.dataNascimento = moment(values.dataNascimento ,'DD/MM/YYYY' ).format('YYYY-MM-DD');
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

  const SingupSchema = Yup.object().shape({
    nome:Yup.string()
    .min(2, 'Muito Curto')
    .required('Obrigatorio'),
    email:Yup.string()
    .min(3, 'Email Inválido')
    .required('Obrigatorio'),
    cpf:Yup.string()
    .min(10, 'CPF inválido')
    .required('Obrigatorio'),
    dataNascimento:Yup.string()
    .min(9, 'Incompleto')
    .required('Obrigatorio'),
  });

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
            dataNascimento: moment(objPessoaEspecifica.dataNascimento ,'YYYY-MM-DD' ).format('DD/MM/YYYY'),
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
        validationSchema={SingupSchema}
         onSubmit={(
          values: PessoaDTO,
          { setSubmitting }: FormikHelpers<PessoaDTO>
        ) => {
        
          {idUsuario ? atualizarUsuario(values) : PostInUsuarios(values)} 
        }}
      >
        {({ errors, touched }) =>(

        <Form >
            <DivBeforeForm>
          <label htmlFor="nome">NOME</label>
          <Field id="nome" name="nome" placeholder="Nome" as={InputForm}/>
          {errors.nome && touched.nome ? (
                  <DivError>{errors.nome}</DivError>
                ) : null}
          <label htmlFor="email">EMAIL</label>
          <Field id="email" name="email" placeholder="Email"  as={InputForm}/>
          {errors.email && touched.email ? (
                  <DivError>{errors.email}</DivError>
                ) : null}
          
          <label htmlFor="cpf">CPF</label>
          <Field id="cpf" name="cpf" placeholder="Cpf" as={InputForm}/>
          {errors.cpf && touched.cpf ? (
                  <DivError>{errors.cpf}</DivError>
                ) : null}

          <label htmlFor="dataNascimento">DATA DE NASCIMENTO</label>
          <Field id="dataNascimento" name="dataNascimento" placeholder="dd/mm/aaaa"  as={InputForm}/>
          {errors.dataNascimento && touched.dataNascimento ? (
                  <DivError>{errors.dataNascimento}</DivError>
                ) : null}

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