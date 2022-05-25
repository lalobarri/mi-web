function sumarUno(numero){
    //funcion que retorne promesa

    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero+1);
        },1000);
    

    });
    
    return promesa;
    
}

sumarUno(5).then(nuevoNumero=>{
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero=>{
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero=>{
    console.log(nuevoNumero);
});
