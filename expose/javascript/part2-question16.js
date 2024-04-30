let statistics ={
    redCars: 21,
    blueCars: 45,
    greenCars: 2,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};


const obj = { a: 1, b: 2, c: 3 };

for (let y in statistics) {
  console.log(`statistics.${y} = ${statistics[y]}`);
}