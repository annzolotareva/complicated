let num = String(266219);
let multiplication = 1;
for (let i = 0; i < num.length; i++) {
  multiplication *= num[i];
}
multiplication **= 3; // jshint ignore:line
multiplication = String(multiplication).substr(0, 2);
console.log(multiplication);
