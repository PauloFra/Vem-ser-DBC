const FuncSomaValores = ({val1 ,val2}) =>{
    
    return (
        <div>
            <h1>{val1 + val2}</h1>
            <h1>{val1 - val2}</h1>
            <h1>{val1 / val2}</h1>
            <h1>{val1 * val2}</h1>
        </div>         
    )
}
export default FuncSomaValores;