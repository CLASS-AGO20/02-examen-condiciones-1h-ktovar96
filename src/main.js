export default class App {
    convertir(pesos){
        let dinero;

        if (pesos < 2000) {
            dinero= pesos / 20.5; 
        } else {
            dinero= pesos / 22.7;
        }
        return dinero; 
    }

}

let app = new App();
console.log ("Probando convertir");
console.log(app.convertir(1500));
console.log (app.convertir(2000));