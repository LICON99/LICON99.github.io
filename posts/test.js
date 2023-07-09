function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {eats:false};
let rabbit2=new Rabbit();
console.log(rabbit.eats); // true
