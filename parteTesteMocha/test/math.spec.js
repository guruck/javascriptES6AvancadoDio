const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect; //https://www.chaijs.com/api/bdd
const sinon = require('sinon');

let value = 0;
describe('Math class', function(){
  //hooks: before, beforeEach, after, afterEach
  beforeEach(function(){
    value = 0;
  });

  //com a palavra "skip", podemos pular o teste
  // it.skip( 'Sum two numbers Async', function(done){
  it( 'Sum two numbers Async', function(done){
    //mocha recomenda utilizar apenas function para ter o controle do escopo do teste
    const math = new Math();
    this.timeout(3000);
    value = 5;
    math.sumAsync(5,5,value => {
      // assert.equal(value,10);
      expect(value).to.equal(10); //biblioteca "chai"
      done();
    });
  });

  //com a palavra "only" podemos definir a execução de apenas um dos testes
  // it.only( 'Sum two numbers Simple', function(){
  it( 'Sum two numbers Simple', function(){
    const math = new Math();
    // throw new Error('Oh no...'); //qualquer erro é interceptado pelo TDD
    // try {
      assert.equal(math.sum(value,5),5);
    // } catch (error) {
      // console.log(error);
    // }
  });

  //podemos definir testes sem o corpo para temos ciencia da necessidade de criar ainda
  it( 'Multiply two numbers Simple' );

  it( 'Testa propriedade objeto', function(){
    const obj = { teste: 'testando spr'};
    expect(obj).to.have.property('teste');
    expect(obj).to.have.property('teste').equal('testando spr');
  });

  it( 'Compara objeto', function(){
    const obj = { teste: 'testando spr'};
    const obj2 = { teste: 'testando spr'};
    // expect(obj).to.equal(obj2); // não passa pois cada objeto é um ponteiro diferente
    expect(obj).to.deep.equal(obj2); //compara os valores dos objetos
  });
  
  it.only( 'mocando funcoes com sinon', function(){
    //printSum(req,res,a,b){res.load('index', a + b);};
    const req ={};
    // const res = {
    //   load: sinon.spy()
    // };
    const res = {
      load: function load(){console.log('chamou aqui');}
    };
    // sinon.spy(res,'load'); //executa a função
    sinon.stub(res,'load').returns('xpto'); //substitui o metodo;
    const math = new Math();
    math.printSum2(req,res,5,5);

    expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][0]).to.equal('index');
    expect(res.load.args[0][1]).to.equal(10);
  });

});
