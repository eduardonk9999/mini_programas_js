let valorDoCelular = 100;
let acessorios = 20;
const taxa = 10;
let limiteGastos = 0;

let saldoDaConta = 600;



// var operaçãoBancaria = saldoDaConta - valorDoCelular;


while(saldoDaConta > limiteGastos){
  
  console.log(saldoDaConta);

  saldoDaConta = saldoDaConta - valorDoCelular;

  if(saldoDaConta == 100) {
    while(saldoDaConta > limiteGastos){
  
      console.log(`carredor ${saldoDaConta}`);
    
      saldoDaConta = saldoDaConta - acessorios;
    }
    console.log('Limite da conta zerado');
  }

  
}
console.log("não da pra comprar mais celulares com seu limite atual");



