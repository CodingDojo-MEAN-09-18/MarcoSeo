

var _ = {
    map: function(arr, iteratee) {
        for(let i=0; i<arr.length; i++){
           arr[i] = iteratee(arr[i]);
        }
        return arr;
      //code here;
    },
    reduce: function(arr, iteratee, memo) {
        if(typeof(memo) == "undefined"){
          memo = arr[0];
          arr[0] = 0;
        }
        for(let i=0; i<arr.length; i++){
          //console.log(memo);
          memo = iteratee(arr[i], memo);
        }
        return memo;
      // code here;
    },
    find: function(list, predicate) {   
        for(let i=0; i<list.length;i++){
         if(predicate(list[i])){
           return list[i];
         }
         return undefined;
        }  
      // code here;
    },
    filter: function(list, predicate) { 
        var resultList = [];
        for(let i=0;i<list.length;i++){
         if(predicate(list[i])){
           resultList.push(list[i]);
         }
        }
        return resultList;
      // code here;
    },
    reject: function(list, predicate) { 
        var resultList = [];
        for(let i=0;i<list.length;i++){
         if(!predicate(list[i])){
           resultList.push(list[i]);
         }
        }
        return resultList;
      // code here;
    }
  }
 // you just created a library with 5 methods!
const newArray = [3,2,3,54,5,1,2];
// const map1 = _.map(newArray, function(num) {
//      const square = num * num;
//      return square;
// });
// // console.log(newArray);
// console.log('map1 =', map1);
 
// const reduce1 = _.reduce(newArray, function(memo, num){
//     return memo + num;
// }, 0);

// console.log('reduce1 =', reduce1);

// const find1 = _.find(newArray, function(num){
//     return num > 4;
// });
// console.log(find1);

// const filter1 = _.filter(newArray, function(num){
//     return num > 4;
// });
// console.log(filter1);
