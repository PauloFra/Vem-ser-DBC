import Item from './Item.js'
const Lista = ({eventSum , name}) =>{
    return(
        <>
        <h1>Minha Lista</h1>
        <h3>Funcao de soma </h3>
        <Item marca="Fiat" lancamento='2001' eventSum={eventSum} name={name}/>
        <Item marca="Renault" lancamento='2001' eventSum={eventSum} name={name}/>
        <Item marca="VW" lancamento='2001' eventSum={eventSum} name={name}/>
        <Item marca="Fiat" lancamento='2001' eventSum={eventSum} name={name}/>
        </>
    )
}
export default Lista;