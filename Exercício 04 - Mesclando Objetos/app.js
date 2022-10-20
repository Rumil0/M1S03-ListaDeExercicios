const mesclaObjetos = (objX, objY) => {return Object.assign(objX, objY);}

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);

// { a: 1, b: 2, c: 3, d: 4 }
