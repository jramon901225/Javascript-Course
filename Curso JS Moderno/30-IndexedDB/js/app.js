window.addEventListener("DOMContentLoaded", () => {
    crmDB();
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
    };

    crmdb.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm", {
            heyPath: "crm",
            autoIncrement: true,
        });

        //Defirnir las columnas
        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("telefono", "telefono", { unique: false });

        console.log("Columnas creadas!");
    };
}
