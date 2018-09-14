module.exports = function (){
    return {
      add: function(num1, num2) { 

        console.log("the sum is : ", num1 + num2);
           // add code here 
      },
      multiply: function(num1, num2) {

        console.log("the sum is : ", num1 * num2);
           // add code here 
      },
      square: function(num) {

        console.log("the sum is : ", (num * num))
           // add code here 
      },
      random: function(num1, num2) {

        if (num1 > num2) {

            console.log("the random number is : ", Math.floor(Math.random()*(num1 - num2 + 1)) + num2);
        }else{
            console.log("the random number is : ", Math.floor(Math.random()*(num2 - num1 + 1)) + num1);
        }


           // add code here
      }
    }
  };
  