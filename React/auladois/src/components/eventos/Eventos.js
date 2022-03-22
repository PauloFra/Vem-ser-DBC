function Eventos(){
    function meuEvento(){
       return alert('Ola Voce clicou no botao')
    }
    return(
        <>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Meu Botao</button>
        </>
    )
}
export default Eventos