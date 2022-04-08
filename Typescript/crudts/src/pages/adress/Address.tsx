
import { useContext ,useEffect , useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import api from '../../api';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { EnderecoDTO } from '../../modal/ContatoDTO';
import FotoDbc from '../../images/download.png'
import { useParams } from 'react-router-dom'

import { EnderecoSwaggerDTO } from '../../modal/ContatoDTO';
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
import './Adress.css'

// interface EnderecoDTO {
//   cep: string;
//   logradouro: string;
//   bairro: string;
//   localidade: string;
//   complemento:string;
//   uf: string;
//   pais: string;
//   tipo: string;
//   numero: string
// }

   function Address() {  
    const {idEndereco} = useParams()
    console.log('UseParam =>', idEndereco )

    
    const [arrContato , setArrContato] = useState<any>([])
    const setup = async() => {
        if(idEndereco){
          try{
            const {data} = await api.get(`endereco/${idEndereco}`)
            console.log(data)
            setArrContato(data)
          }
          catch(error){
            console.log(error)
            alert('Ops!')
          }
        }
    }

    const {handleLogout} = useContext<any>(AuthContext)

    async function BuscaCep(values:EnderecoDTO ,setFieldValue:any){
      try{
        const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);   
        setFieldValue('logradouro' , data.logradouro)
        setFieldValue('bairro' , data.bairro)
        setFieldValue('localidade' , data.localidade)
        setFieldValue('uf' , data.uf)
        console.log(data)     
      }catch(error){
        console.log(error)
        alert('Ops!')
      }
    }
 
    async function PostInEndereco(values:EnderecoDTO){
      let idPessoa = 658

      const newAddress = {
        cep:values.cep.replaceAll('-' , ''),
        cidade: values.localidade,
        complemento:values.complemento,
        estado: values.uf,
        logradouro: values.logradouro,
        pais: values.pais,
        tipo: values.tipo,
        numero: parseInt(values.numero)
      }
     try{
      const {data} = await api.post(`endereco/${idPessoa}` , newAddress);
      console.log(data)
      alert('Novo Endereço Criado!')
     }catch(error){
      console.log(error);
      alert('Ops!')
     }
    }

    const atualizarEndereco = async(values:EnderecoDTO) => {
      const newAddress = {
        idEndereco: idEndereco,
        cep:values.cep.replaceAll('-' , ''),
        cidade: values.localidade,
        complemento:values.complemento,
        estado: values.uf,
        logradouro: values.logradouro,
        pais: values.pais,
        tipo: values.tipo,
        numero: parseInt(values.numero)
      }

      try{
        const {data} = await api.put(`endereco/${idEndereco}` ,newAddress )
        console.log(data)
        alert('usuario atualizado')
      }catch(error){
        console.log(error); 
        alert('Ops!')
      }
    }

  useEffect(()=>{
    setup()
  },[])
  return (
    <ContainerLogin  className='divBg'>
      <DivCenter className='divMaior'>
      <DivLogo>
       <img src={FotoDbc} width="48" alt="" />
       <h1>Address</h1>
      </DivLogo>
      <TitleLogin>{idEndereco ?'Atualize o ' :'Adicione um Novo'} Endereço</TitleLogin>
      <p>Entre com os dados abaixo</p>
           
      <Formik
        initialValues={
          {
            cep: '',
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',
            tipo: 'RESIDENCIAL',
            pais: '',
            numero: '',
            complemento: ''
          }
        }
         onSubmit={(
          values: EnderecoDTO,
          { setSubmitting }: FormikHelpers<EnderecoDTO>
        ) => {
         {idEndereco ? atualizarEndereco(values) : PostInEndereco(values)} 
        }}
      >
        {props =>(

       
        <Form>
            <DivBeforeForm>
          <label htmlFor="cep">CEP</label>
          <Field id="cep" name="cep" placeholder="Cep"  as={InputForm}/>

          <button className='btnConsultaCep' type='button' onClick={()=>BuscaCep(props.values , props.setFieldValue)}>Consulta Cep</button>
          
          <label htmlFor="logradouro">LOGRADOURO</label>
          <Field id="logradouro" name="logradouro" placeholder="Logradouro"  as={InputForm}/>
          
          <label htmlFor="bairro">BAIRRO</label>
          <Field id="bairro" name="bairro" placeholder="bairro"  as={InputForm}/>

          <label htmlFor="localidade">LOCALIDADE</label>
          <Field id="localidade" name="localidade" placeholder="localidade" as={InputForm} />

          <label htmlFor="uf">UF</label>
          <Field id="uf" name="uf" placeholder="uf"  as={InputForm}/>

          <label htmlFor="pais">PAIS</label>
          <Field id="pais" name="pais" placeholder="pais"  as={InputForm}/>

          <label htmlFor="tipo">TIPO</label>
          <Field name="color" as="select"  >
            <option value="COMERCIAL">COMERCIAL</option>
            <option value="RESIDENCIAL">RESIDENCIAL</option>
          </Field>
          <label htmlFor="complemento">COMPLEMENTO</label>
          <Field id="complemento" name="complemento" placeholder="complemento" as={InputForm} />  

          <label htmlFor="numero">NUMERO</label>
          <Field id="numero" name="numero" placeholder="Numero da Residencia"  as={InputForm}/>       

          <BotaoForm type="submit">{idEndereco ?'Atualizar' :'Adicionar'}</BotaoForm>
          </DivBeforeForm>
        </Form>
         )}
      </Formik>
      </DivCenter>
    </ContainerLogin>
  )
}

export default Address