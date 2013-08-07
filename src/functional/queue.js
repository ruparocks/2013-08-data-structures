  var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here
  var totalSize = 0; //total number of the index
  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    queue[totalSize] = value;
    totalSize++;
    size++;
  };

  queue.dequeue = function(){
    var index = totalSize - size;
    size ? size-- : size;
    return queue[index];
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
