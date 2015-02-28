function curryN(fn, n) {
  n = n || fn.length;
  console.log(n);
  if(n <= 0) return fn;
  
  return function(x) {
	return curryN(f, n-1)(x);
  }  
}

module.exports = curryN


 function add3(one, two, three) {
   return one + two + three
 }

 var curryC = curryN(add3)
 var curryB = curryC(1)
 var curryA = curryB(2)
 console.log(curryA(3)) // => 6
 console.log(curryA(10)) // => 13

 console.log(curryN(add3)(1)(2)(3)) // => 6	