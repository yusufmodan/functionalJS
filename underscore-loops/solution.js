var checkValue = function(arr, val) {
  var found = false;
  _.each(arr, function(value){
    if(value === val){
      found = true;
    }
  })
  return found;
}

var pushObjects = function(obj){
    return _.map(obj, function(value){
      return value
    })
}

var evens = function(list){
  return _.filter(list, function(value){
     return (value % 2 === 0)
  })
}














