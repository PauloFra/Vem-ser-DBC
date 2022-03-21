import styles from './SayMyName.module.css'
const SayMyName = (
    {
        idade,
        name,
        teste,
        url
    
    }) =>{
    //<h1>{props.name}{props.idade}{props.teste}</h1>;
    return (
        <div className={styles.sayMyName}>    
        <h1>{name}</h1>
        <h3>{idade}</h3>
        <h3>{teste}</h3>
        <img src={url}/>
        </div>
    );
}

export default SayMyName;