var nonsense = function(string) {
   var blab = function(){
     alert(string);
   };
   blab();
}

var nonsense = function(string) {
   var blab = function(){
     alert(string);
   };
   setTimeout(blab, 2000);
}

var nonsense = function(string) {
   var blab = function(){
     alert(string);
   };
   return blab;
}

var blabLater = nonsense("Some string");
var blabAgainLater = nonsense("another string");
blabLater();
blabAgainLater();



var lastNameTrier = function(firstName){
    var innerFunction = function(lastname) {
      console.log(firstName + ' ' + lastname)
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'


var storyWriter = function(){
  var story = "";
  return {
    addWords: function(string){
        story += " " + string;
        return story;
      },
    erase: function(){story = ""}
  };
};

var Toaster = function(){
    var privateVariable = 500;
    var currentTemp = 0;

    return {
      turnOn: function(deg){
        if(deg > privateVariable){
          console.log("oops too hot")
        }else{
          currentTemp = deg;
        }
      }
    };
};

var x = Toaster();
x.turnOn(10000)














