// var im = {
//   nome: 'Eduardo',
//   sobrenome: 'Silva',
//   idade: '28',
// }

// var nomeCompleto = im.nome + ` ${im.sobrenome}`;
// console.log(nomeCompleto);

// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: 'scort'
// }

// var novoPreco = carro.preco = 3000;
// console.log(carro);

var dog = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,

  latir: function(carteiro) {
    if(carteiro === 'homem') {
      console.log('au au au');
    } else {
      console.log('hé hé hé hé');
    }
  }
}

dog.latir('homem');