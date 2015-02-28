 var slice = Array.prototype.slice

 function logger(namespace) {
   return function () {
		var args = slice.call(arguments);
		args.unshift(namespace)
		console.log.apply(logger, args)  
   }
 }

 module.exports = logger