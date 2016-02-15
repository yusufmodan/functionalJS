var funcCaller = function(func, arg) {
    return func(arg);
}

var firstVal = function(arr, func){
    func(arr[0], 0, arr);
}

var firstVal = function(arr, func){
    if(Array.isArray(arr)){
      func(arr[0], 0, arr);
    }else{
      var lastKey;
      for(var key in arr){
        lastKey = key;
      }
      func(arr[lastKey], lastKey, arr)
    }
}

var obj = {
  name: "yusuf",
  occupation: "Fellow"
}
obj["name"]


var once = function(func){
  var alreadyCalled = false;
  var result;

  return function(){
    arguments
    if(!alreadyCalled){
      result = func.apply(this,args);
      alreadyCalled = true;
    }
    return result;
  }
}

var chargeCreditCard = function(num, price){
  //charges credit card for a certain price
};
var p = once(chargeCreditCard);




















