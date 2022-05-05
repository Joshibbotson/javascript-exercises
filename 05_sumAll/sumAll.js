const sumAll = function(beginning, end) {
    
    if (Number.isInteger(beginning) && beginning > 0 &&
    Number.isInteger(end) && end > 0) {

    let start;
    let finish;

    if (beginning > end) {
        start = end;
        finish = beginning;
    }
    if (beginning < end){
        start = beginning;
        finish = end;
    }

        let total = start;
        let sumArray = [start];

        for (let i=start; i <= finish; i++){
            total++
            if (i < finish){
            sumArray.push(total);
        }
    else {
        return "ERROR";
    };
    }
    return sumArray.reduce((previousValue, currentValue)=> previousValue + currentValue);
    }
};
sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
