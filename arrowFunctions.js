'use strict';

//antigamente
function log(value){
  console.log(value);
}
log("teste");

var soma = function(a,b){
  return a+b;
}
console.log(soma(2,3));


var obj01 = {
  showContext : function showContext(){
    var _that = this;            // outra maneira de executar no mesmo contexto sem o uso do bind
    console.log(this);
    this.log('aqui');
    setTimeout(function(){
      console.log(this);
      console.log(_that);        // outra maneira de executar no mesmo contexto sem o uso do bind
      _that.log('apos 1000...'); // outra maneira de executar no mesmo contexto sem o uso do bind
      this.log('apos 1000...');
    }.bind(this),1000); //.bind(this) => vai equiparar o contexto do setTimeout
  },
  log: function log(value){
    console.log(value);
  }
};

obj01.showContext();
obj01.log('teste');


//Arrow functions
console.log("###===Arrow functions===###");
const log2 = (value) => console.log(value);
log2("teste2");

const soma2 = (a,b) => a + b;
console.log(soma2(2,2));

// função construtora de objeto
function Carro(){
  this.foo = 'bar';
}
console.log(new Carro());

// retorna um objeto mas não é do tipo carro.
const car = () => ({ 'foo' : 'bar'});
console.log(car());


/** são sempre funções anonimas
 * As funções Arrow devem ser declaradas sempre no topo, não é movida automaticamente para o topo.
 * O contexto das funções é Léxico, ou seja no escopo do bloco qual esta declarado o this
 */

const obj02 = {
  showContext : function showContext(){
    console.log(this);
    this.log('aqui');
    setTimeout(() => {
      console.log(this);
      this.log('apos 1200...');
    },1200);
  },
  log: function log(value){
    console.log(value);
  }
};

obj02.showContext();
obj02.log('teste');