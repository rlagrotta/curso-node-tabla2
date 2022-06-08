var colors = require('colors');
const fs = require('fs')
const crearArchivo = async( base = 5, listar=false, hasta=20) => {

    colors.setTheme({
        cubreTitulo: "rainbow",
        titulo: "grey",
        x: "green",
        prompt: "yellow"
    });


    console.log(hasta)
    switch(listar) 
    {
        case false:
            try {
                console.clear();
            
                let salida = '';
            
            for(let i=1;i<=hasta; i++){
                salida+=`${base}x${i}=${base*i}\n`;
            }
        
                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);   
        
            
            return `tabla-${base}.txt`;
            } catch(err){
                throw(err)
            }

            case true:
                try {
                    console.clear();
                    console.log(colors.cubreTitulo("=========================="))
                    console.log(colors.titulo(`Tabla del: ${base}`))
                    console.log(colors.cubreTitulo("=========================="))
                
                    let salida = '';
                    let consola = '';
                
                for(let i=1;i<=hasta; i++){
                    salida+=`${base}${"x"}${i}=${base*i}\n`;
                    consola+=`${base}${"x".x}${i}=${base*i}\n`;
                }
            
                    console.log(`${consola}`)    
                    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);   
            
                
                return `tabla-${base}.txt`;
                } catch(err){
                    throw(err)
                }
            }
        }

module.exports = {crearArchivo}