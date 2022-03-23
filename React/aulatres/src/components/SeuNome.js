function SeuNome({setNome}){
return(
    <div>
        <p>Digite Seu Nome</p>
        <input type="text" placeholder="Qual é seu nome?" onChange={e => setNome(e.target.value)}/>
    </div>
)
}
export default SeuNome;