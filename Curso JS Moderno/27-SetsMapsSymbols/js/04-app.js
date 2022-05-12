//WeakMap

const objeto = {
    id: 10,
};

const weakmap = new WeakMap();

weakmap.set(objeto, "Celular");
console.log(weakmap.get(objeto));
console.log(weakmap.has(objeto));

console.log(weakmap);

//Los weakmap al igual que los weakSet no son iterables y tampoco es posible
//conocer su longitud con .size, solo admiten objetos
