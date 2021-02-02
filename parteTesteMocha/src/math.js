class Math{
  sum = (...param) => param.reduce((acumulator,value) => acumulator + value,0);
  sumAsync(a,b,callback) {
    setTimeout(() => {
      callback(a + b);
    },2500);
  };
  multiply(a,b){ return a * b;};
  printSum(req,res,a,b){
    res.load('index', a + b);
  };
  printSum2(req,res,a,b){
    console.log(res.load('index', a + b));
  };
}
module.exports = Math;