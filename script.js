// first method
let num1 = String(266219);
let multiplication1 = 1;
for (let i = 0; i < num1.length; i++) {
  multiplication1 *= num1[i];
}
multiplication1 **= 3; // jshint ignore:line
multiplication1 = String(multiplication1).substr(0, 2);
console.log(multiplication1);
// second method
let num2 = Array.from(String(266219), Number);
let multiplication2 = num2.reduce(function (elem1, elem2) {
  return elem1 * elem2;
});
multiplication2 **= 3; // jshint ignore:line
multiplication2 = String(multiplication2).substr(0, 2);
console.log(multiplication2);
// third method
let num3 = Array.from(String(266219), Number);
let multiplication3 = Array.from(String(1), Number);
num3.forEach(function (num3) {
  multiplication3 *= num3;
});
multiplication3 **= 3; // jshint ignore:line
multiplication3 = String(multiplication3).substr(0, 2);
console.log(multiplication3);
