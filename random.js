// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random().toFixed(2);

var str =' es MAYOR que 0,5';

if (numero <= 0.5){
  str = ' es MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
