/* <div class="div-flex">
    <button class="btn-plus"><i class="fa-solid fa-xmark"></i></button>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus quasi, ipsam exercitationem minus beatae at incidunt hic dignissimos tempora.</h4>
    <button class="btn-plus"><i class="fa-solid fa-trash"></i></button>
</div> */
let countElements = 1;

const adicionaElementoNoToDoList = () =>{
    if(document.getElementById('only-input').value === ''){
        return alert('Adicione ao menos um caracter para executar');}
    
    document.getElementById('h2quesome').style.display = 'none';
    countElements = countElements++;
    const divDoElemento = document.createElement('div');
    const buttonUm = document.createElement('button');
    const h4 = document.createElement('h4');
    const buttonDois = document.createElement('button');
    const iTrash = document.createElement('i');
    const iExcluir = document.createElement('i');
    
    divDoElemento.classList.add( 'div-flex' , 'bg-color2' , 'bg-color1');
    divDoElemento.setAttribute( 'id' , 'div_' + countElements);
    buttonUm.setAttribute( 'id' , 'btn_' + countElements);
    buttonUm.setAttribute('class','btn-plus');
    buttonDois.setAttribute('class','btn-plus');
    h4.textContent = document.getElementById('only-input').value;
    iTrash.classList.add('fa-solid', 'fa-trash');
    iExcluir.classList.add('fa-solid', 'fa-xmark' ,'fa-paper-plane');
    

    buttonUm.appendChild(iExcluir);
    buttonDois.appendChild(iTrash);
    divDoElemento.appendChild(buttonUm);
    divDoElemento.appendChild(h4);
    divDoElemento.appendChild(buttonDois);

    const insertDiv = document.getElementById('manipulation');
    insertDiv.appendChild(divDoElemento);
    
    iTrash.addEventListener('click' ,excluirElementoDoToDoList );
    iExcluir.addEventListener('click' ,alteraEntreFeitoENaoFeito );
    }


const button = document.getElementById('btn-p');
button.addEventListener('click' , adicionaElementoNoToDoList);

const excluirElementoDoToDoList = (event) => {
    event.target.parentNode.parentNode.remove();
}   
// buttonUm.addEventListener('click' , adicionaElementoNoToDoList);
const alteraEntreFeitoENaoFeito = (event) =>{
    event.target.parentNode.parentNode.classList.toggle('bg-color2');
    event.target.classList.toggle('fa-xmark');
}   
