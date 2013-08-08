// var makeStack = function(){
  // Hey! Copy your code from src/functional/stack.js and paste it here
  // Use an object with numeric keys to store values
  var makeStack = function() {
    var stack = {};
    stack.size = 0;
    stack.storage = {};
    extend(stack, makeStack.stackMethods);
    return stack;
  };

  var extend = function(to, from){
  for (var key in from){
      to[key] = from[key];
    }
  };
  makeStack.stackMethods = {
    push: function(value){
      this.storage[this.size] = value;
      this.size++;
    },
    pop: function(){
      this.size ? this.size-- : this.size;
      return this.storage[this.size];
    },
    size: function(){
      return this.size;
    }
  };
  return stack;
// };
// var giraffeMaker = function(name, height){
//   var newGiraffe = {}
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);
//   return newGiraffe;
// };
