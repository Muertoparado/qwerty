/* Promesas  */

/* new Promise((resolve, reject) => {
  try {
    console.log("entro promesa");
    resolve('La promesa fue exitosa');
  } catch (error) {
    reject(error);
  }
}); */

new Promise((resolve,reject)=>{
    try{
        console.log("dentro de la promesa");
        const resultado1 = await promesa1;
              console.log(resultado1); // Resultado 1
       
            /*  const resultado2 = await promesa2;
            console.log(resultado2); // Resultado 2 */
             
            } catch (error) {
              console.log(error);
            }
           
          }
          
          ejemploAsync();
          
    }


});