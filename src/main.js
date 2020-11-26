export default class App {
    
    convertir(pesos){
        let dinero;

        if (pesos < 2000) {
            dinero= pesos * 20.5; 
        } else {
            dinero= pesos * 22.7;
        }
        return dinero; 
    }

    costoRenta(kilometros) {
        let renta;
        if (kilometros < 50){
            renta= kilometros * 3;
        } else if (kilometros  => 50 && kilometros < 100) {
            renta= kilometros * 5;
        } else if (kilometros => 100 && kilometros < 200){
            renta= kilometros * 6;
        } else {
            renta= kilometros * 6.5;
        }
        return renta;
    }

}

let app = new App();
 console.log ("Probando convertir");
 console.log (app.convertir(1500));
 console.log (app.convertir(2000));

 console.log ("Probando costoRenta");
 console.log (app.costoRenta(30));
 console.log (app.costoRenta(50));
 console.log (app.costoRenta(100));
 console.log (app.costoRenta(250));