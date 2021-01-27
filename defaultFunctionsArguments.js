var mult = function(a,b){
  b = typeof b === 'undefined' ? 1 : b; // essa forma funciona mas fica complexo realizar as validações para tratamento dos parametros
  b = b || 1; // isso era um trunfo para poder omitir o segundo parametro mas causa erro se o segundo parametro for zero 
  return a * b;
}
console.log(mult(2)); // retorna NaN, pois falta um parametro

var mult2 = function(a=2,b = a){ //utilizando o ES6 pode ser atribuido valor já na definição dos parametros
  return a * b;
}
console.log(mult2(undefined,3));
console.log(mult2());


//lazy evaluation
function randomNumber (){
  console.log('gerando numero...');
  return Math.random() * 10;
} 

var mult3 = function(a = randomNumber(),b = a){ //utilizando o ES6 pode ser atribuido valor já na definição dos parametros
  return a * b;
}
console.log(mult3(undefined,3));
console.log(mult3());
