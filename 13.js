function repeat(operation, num) {
  if (num <= 0) return null
  operation()
  return function () { return repeat(operation, --num)}
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  var nextFn;
  while(fn != null){
	fn = fn();
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(function() {return repeat(operation, num)})
}

