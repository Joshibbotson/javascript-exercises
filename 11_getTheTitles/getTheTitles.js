const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]
  
const getTheTitles = function(arr) {
  let result =[];
  for (i=0; i < arr.length; i++){
    result.push(arr[i].title)
  }
  return result;
};
getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
