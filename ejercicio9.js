/**N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */


export const calcularAtletaCampeona=(atletas)=>{
    let mayorMarca=atletas.reduce((acumulador, item)=> acumulador.marca > item.marca ? acumulador : item).marca;

    let atleta=atletas.find(atletaa => atletaa.marca===mayorMarca);

    return atleta.nombre
}

export const calcularRecord=(marca)=>{
    return marca>15.50 
}

