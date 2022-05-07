const sumAll = function(beginning, end){
  
    if (typeof(beginning) !== "number" || beginning < 0 ||
       typeof(end) !== "number" || end < 0){
      return "ERROR";
    }
    
    else {
      let start;
      let finish;
  
      if (beginning > end) {
          start = end;
          finish = beginning;
      }
      else {
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
      }
  return sumArray.reduce((previousValue, currentValue)=> previousValue + currentValue);
  }
    
  }
  sumAll ("", 10)

// Do not edit below this line
module.exports = sumAll;
