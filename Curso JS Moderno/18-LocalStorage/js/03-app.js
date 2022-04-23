localStorage.removeItem("randid");

//Actualizar un registro

const meses = JSON.parse(localStorage.getItem("meses"));
console.log(meses);

meses.push("Abril");
console.log(meses);

localStorage.setItem("meses", JSON.stringify(meses));

localStorage.clear();
