const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(arr) {
    const date = new Date().getFullYear()
    let ageArray =[]
    
      for (i=0; i <arr.length; i++) {
      if (typeof(arr[i].yearOfDeath) !== 'undefined') {
        ageArray.push(arr[i].yearOfDeath - arr[i].yearOfBirth)
      }
      else {
        ageArray.push(date - arr[i].yearOfBirth)
      }  
    }
    const max = Math.max(...ageArray);
    const index = ageArray.indexOf(max)
    const oldest = arr[index]
    
    return oldest;
  };
  
  findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
