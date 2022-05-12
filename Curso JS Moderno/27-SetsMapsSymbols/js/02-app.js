const weakSet = new WeakSet();

const cliente = {
    nombre: "Manuel",
    saldo: 400,
};
const cliente2 = {
    nombre: "Ramon",
    saldo: 600,
};

weakSet.add(cliente);
weakSet.add(cliente2);

console.log(weakSet);

//Los weakset no se pueden iterar y tampoco aceptan otros tipos de datos mas que de objetos
