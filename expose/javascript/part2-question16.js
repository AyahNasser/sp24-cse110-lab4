let statistics ={
    redCars: 21,
    blueCars: 45,
    greenCars: 2,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};




for (var y in statistics) {
  


  if(y[0]== 'r'){
    console.log(statistics[y]);
  }
  else if(statistics[y]%2!=0){
    console.log(statistics[y]);
  }

  

}