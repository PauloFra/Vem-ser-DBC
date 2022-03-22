
const Calculos = ({valor1 , valor2}) =>{
    const Soma = () =>{
        return <h1>{valor1 + valor2}</h1>
        }
    const multiplica = () =>{
        return <h1>{valor1 * valor2}</h1>
        }
    
    return(
        <div>
            <h1>O resultado do calculo foi {multiplica()}</h1>
        </div>
    )   
}
export default Calculos;