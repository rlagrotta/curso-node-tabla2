const argv = require("yargs") 
                 .option("b",{
                     alias: "base",
                     type:"number",
                     demandOption:true,
                     describe: "Es la base de la tabla de multiplicar"
                 })
                 .option("h",{
                    alias: "hasta",
                    type:"number",
                    default: 10,
                    describe: "es la profundidad de la tabla"
                })
                 .option("l", {
                     alias:"listar",
                     describe:"lista los calculos si le das l, sino solo guarda el fichero",
                     type:"boolean",
                     default: false,
                     describe: "Muestra la tabla en consola",
                 })
                 .check((argv,options) => {
                     if(isNaN(argv.b)&& argv.l!==true){
                         throw "la base tiene que ser un número"
                     }  
                     return true
                 })
                 .argv;

module.exports = {argv};