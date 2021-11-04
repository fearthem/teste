
//Atenção: Objeto começa com chaves
// Array começa com colchetes
// Um array JSON começa com colchetes e então vem as chaves

// loop sobre objetos
const obj = {"nome":"carlos","amauri":"xxxx"};
const jason = JSON.stringify(obj);
const fa = JSON.parse(jason);
console.log(Object.values(obj));
console.log(Object.keys(obj).length);
console.log(fa["nome"]);
for (let index = 0; index < fa.length; index++) {
    console.log(fa[index]);;
    
}
