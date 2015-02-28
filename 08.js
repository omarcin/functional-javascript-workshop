 function duckCount() {
	var args = Array.prototype.slice.call(arguments);
    return args.filter(function(o) { return Object.prototype.hasOwnProperty.call(o, 'quack'); }).length
 }

 // TESTS
 
//console.log(duckCount({ quack : "" }))


 
 
 module.exports = duckCount
 
 