var MYLIB = {
  init: function() {},
  status: 0
};

console.log("Hola mundo");

var obj = { name: "Naza", age: 33};

function Person (name, age)
{
  this.name = name;
  this.age=age;
}

var naza = new Person("Naza", 45);

function print() {
 console.log(this.name);
}

Person.prototype.print = print;

var otro = new Person("Pepe", 90);

console.log(otro);

otro.print();

/*
console.log(naza);

filterFun([8,14,2,21,34,0],  function (v) { return v < 10; }
);

var filterFun = filter;

function filter(v,f) {
  for (var i=0; i<v.length; i++)
    if ( f(v[i]) )
      console.log(v[i]);
}

function f1() {
  function f2() {
  }
}
console.log(filter);

for (elem in obj)
  console.log(elem + ' ' + obj[elem]);
*/
