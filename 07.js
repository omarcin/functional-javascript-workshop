    // Your reduce function should behave the same as a
    // regular Array#reduce, but it will take the array
    // to operate on as the first argument:

    reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)
    // => 6

	
   function reduce(arr, fn, initial) {
     if(arr.length == 0) return initial
	 var head = arr.shift()
	 return reduce(arr, fn, fn(initial, head, 0, arr))
   }

   module.exports = reduce
