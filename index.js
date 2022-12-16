const drivers = ['Verstappen', 'Alonso', 'LeClerc', 'Vettel', 'Raikkonen'];

// Define the functions
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFn) {
  return selectFn(drivers);
}

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));
console.log(selectingDrivers[0] === returnFirstTwoDrivers);
console.log(selectingDrivers[1] === returnLastTwoDrivers);
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log(fareDoubler(10));
console.log(fareTripler(10));
