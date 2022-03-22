const Condicional = () =>{
    const isBoolean = true;
    const booleano = false;
    
    return(
        <>
        (
            {isBoolean &&<h1>Condicional True</h1>}
            {/* /ternario */}
            {booleano ?<h1>Se true executa isso aqui</h1>:<h1>Se false executa aqui</h1>}
        )
        </>
    )
}

export default Condicional;