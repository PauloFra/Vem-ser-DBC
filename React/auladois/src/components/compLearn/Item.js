const Item = ({marca , lancamento , eventSum , name}) =>{
    return(
        
        <li>{marca} - {lancamento} - {eventSum(20 , 10)} - {name}</li>
    
    )
}
export default Item;