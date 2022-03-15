
// let escopoGlobal = 'global';
// // console.log(' 1ª this => ', this);

// const func = () => {
//     let escopoLocal = 'local function';
//     // console.log(' 2ª this => ', this);

//     if(/*alguma coisa*/ true) {
//         let tambemLocal = 'local if';
//         // console.log(' 3ª this => ', this);
//     }

//     let func2 = () => {
//       console.log('this mais interno => ', this)
//     }

//     func2(); // também global
// }

// // porque o meu this vai receber o valor do escopo da chamada dessa função
// func(); // no escopo global


class Cachorro {
    nome;
    genero;
    peso;
    idade;
  
    constructor( nomeParam, generoParam, pesoParam, idadeParam ) {
      this.nome = nomeParam;
      this.genero = generoParam;
      this.peso = pesoParam;
      this.idade = idadeParam;
    }
    
  }
  
  let cachorrosCadastrados = [
    new Cachorro( 'Pipoca', 'F', 6, 2 ),
    new Cachorro( 'Jeremias', 'M', 10, 4 ),
    new Cachorro( 'Antonio', 'M', 11, 2 ),
  ]
  
  const cadastraPet = () => {
    let nome = prompt('nome:')
    let genero = prompt('genero:')
    let peso = prompt('peso:')
    let idade = prompt('idade:')
    
    const cachorroInstanciado = new Cachorro(nome, genero, peso, idade);
  
    cachorrosCadastrados.push(cachorroInstanciado);
  }
  
  
  // HERANÇA
  
  
  /*
    Imaginem que temos uma Pet Shop, logo:
    - precisamos ter nossos pets (class Pet);
    - propriedades dos pets: nome, raca e peso;
    - nossos pets vao poder latirOuMiar() // método que imprime `oi, meu nome é XXX, minha raça é YYY e meu peso é ZZZ`
  */
  
  
  
  /*
    Imaginem agora que na Pet Shop vamos ter também os donos dos pets, logo:
    - precisamos ter esses donos (class DonoDePet);
    - propriedades dos donos: nome e pets (array de Pets);
    - nossos donos vao poder saudar() // método que imprime o nome do dono e o nome de cada um de seus pets
  */
  
  
  
  
  //==================================EXEMPLO COM THIS======================================================
  
  function saudacao(pet) { 
    console.log(`Dono: ${this.nome}, Pet: ${pet.nome}`);
  }
  
  // na minha petShop
  class DonoDePet {
    nome = 'Guilherme';
    pets = [ { nome: 'Bolinha' }, { nome: 'Floquinho' }, { nome: 'Joãozinho' } ];
  
    imprimirNomeDosPets() {
      this.pets.forEach( saudacao );
    }
  }
  
  // const dono = new DonoDePet();
  
  // dono.imprimirNomeDosPets();
  
  
  
  //==================================CONVENÇÕES======================================================
  
  // class Pet {
  //     // PADRÃO DE "ORDENAÇÃO"
  //     // 1º atributos / propriedades
  //     nome = 'Não informado';
  //     raca = 'Não informado';
  //     idade = 0;
  
  //     // 2º construtor
  //     constructor(nome, raca, idade) {
  //         this.nome = nome !== undefined ? nome : this.nome;
  //         this.raca = raca;
  //         this.idade = idade;
  //     }
  
  //     // 3º métodos e outros
  //     latirOuMiar() {
  //         console.log(`Au ou miau, meu nome é ${this.nome}`);
  //     };
  // }
  
  // const pet = new Pet();
  // console.log(pet);