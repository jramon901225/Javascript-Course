let DB;

document.addEventListener("DOMContentLoaded", () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    let crmdb = window.indexedDB.open("crm", 1);

    //Si hay un error
    crmdb.onerror = function () {
        console.log("Hubo un error al crear la base de datos");
    };

    //Si todo sale bien
    crmdb.onsuccess = function () {
        console.log("Base de datos creada!");

        DB = crmdb.result;
    };

    crmdb.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm", {
            keyPath: "crm",
            autoIncrement: true,
        });

        //Defirnir las columnas
        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("telefono", "telefono", { unique: false });

        console.log("Columnas creadas!");
    };
}

function crearCliente() {
    let transaction = DB.transaction(["crm"], "readwrite");

    transaction.oncomplete = function () {
        console.log("Transaccion Completada");
    };

    transaction.onerror = function () {
        console.log("Hubo un error en la transaccion");
    };

    const objectStore = transaction.objectStore("crm");

    const nuevoCliente = {
        telefono: 7894561233,
        nombre: "Manuel",
        email: "correo@correo.com",
    };

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}
