function setPropsOnObj(object){
  object.x = 7;
  object['y'] = 8;
  object.onePlus = function(num) {
    return num + 1
  };
}

function setPropsOnArr(array){
  array.hello = function() {
    return 'Hello!';
  };
  array.full = 'stack';
  array[0] = 5;
  array.twoTimes = function(x) {
    return x * 2;
  };
}

function setPropsOnFunc(functionObj) {
  functionObj.year = '20??';
  functionObj.divideByTwo = function(num) {
    return num / 2;
  };
  functionObj.prototype.helloWorld = function() {
    return 'Hello World';
  }
}
