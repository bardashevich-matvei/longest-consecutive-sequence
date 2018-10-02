module.exports = function longestConsecutiveLength(array) {
  var counter=1, maxLength=0;
  array
  .sort((a, b) => a - b)
  .forEach(function(value, index, array){
    if (array[index+1]-value === 1) counter++;
    else {
      if(counter>maxLength) maxLength=counter;
      counter=1;
    };
  });
  return maxLength;
}
