const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


createFareMultiplier = function(multiplyValue) {
    return endValue => multiplyValue*endValue;
}

/*
const fareDoubler = ((multiplybyTwo) => multiplybyTwo*2);
const fareTripler = ((multiplybyThree) => multiplybyThree*3);

function fareDoubler(multiplybyTwo) {
    return multiplybyTwo*2;
};

function fareDoubler(multiplybyTwo) {
    return createFareMultiplier(multiplybyTwo);
};

function fareTripler(multiplybyThree) {
    return multiplybyThree*3;
};

const fareDoubler=((fare)=>createFareMultiplier(2)(fare));
const fareTripler=((fare)=>createFareMultiplier(3)(fare));

*/

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, driverReturnFunction) {
    return driverReturnFunction(drivers);
}