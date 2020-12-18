function transistores(listBandas){
  if(!listBandas)
    return 'Deben estar presentes al menos dos colores';

  if(listBandas.length <= 1)
    return 'Deben estar presentes al menos dos colores';

  var tabla = {'Negro': 0, 'Marrón': 1, 'Rojo': 2, 'Naranja': 3, 'Amarillo': 4, 'Verde': 5, 'Azul': 6, 'Violeta': 7, 'Gris': 8, 'Blanco': 9};
  var res = "";

  for (var i in listBandas) 
    res+=tabla[listBandas[i]];

  return parseInt(res);
}

module.exports = transistores;
