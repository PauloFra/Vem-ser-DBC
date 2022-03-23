function Lista({meusItens}){
    console.log(meusItens);    
    return(
    <>
        <h3>Traballhando Com Listas</h3>
        {meusItens.map((item , index) => (
            <p key={index}>{item}</p>
        ))}
    </>
)
}
export default Lista;