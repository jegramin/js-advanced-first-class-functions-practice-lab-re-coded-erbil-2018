// Code your solution in this file!
function logDriverNames(drivers){
  for(const driver of drivers){
    console.log(driver.name);
    
  }
}

function logDriversByHometown(drivers,hometown){
  for(const driver of drivers){
    if(driver.hometown === hometown){
      console.log(driver.name);
    }
  }
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function())
}






















// function logDriverNames(drivers){
//   for(i=0; i < drivers.length -1 ; i++){
//   console.log(drivers[i].name);
// }}

// function logDriversByHometown(drivers, str){
//   for(i=0; i < drivers.length -1 ; i++){
//   if (str === drivers[i].hometown){
//   console.log(drivers[i].name);
// }}}

// function driversByRevenue(drivers){
//   return drivers.slice().sort()
// }

// function driversByName(drivers){
//   return drivers.sort();
// }







