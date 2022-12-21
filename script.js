let idade = 18

let adulto = idade >=18 && idade < 60;
let idoso = idade >=60;
let adolescente = idade < 18;
let crianca = idade > 13;

if (adulto) {
  console.log("É adulto")
} else if (idoso) {
  console.log("É idoso")
} else if (adolescente) {
  console.log("É adolescente")
} else if (crianca) {
  console.log ("É criança")
} 


//Exercício de condicional - 2 

let x = 10;
let y = 5;
console.log(x > 5)

let w = "10";
let z = 10;
console.log(w != z)

let preco = 40.3
if(preco >= 45){
  console.log("Tá cara")
} else {
  console.log("Tá barata, mas continuo pobre")
}


// Anotações da aula - Condicional ternário

let isMember = false;

let shipping= isMember ? 2 : 10; 

console.log(isMember ? "Você é membro" : "Você não é membro")
console.log("Frete: " + shipping);

// div 

let age = 90

let isAdult = (age >= 18 ? "Sim" : "Não");
console.log(isAdult);

// switch

let profession = "policial"

console.log("Profissão:" + profession);

switch (profession) {
  case 'bombeiro':
    console.log('Sua camisa será vermelha');
    break;
  case 'policial':
    console.log('Sua farda será azul');
    break;
  case 'porteiro':
    console.log('Sua farda será preta');
    break;
  default:
    console.log('Sua farda será branca');
    break;
}