 function countWords(inputWords) {
	return inputWords.reduce(
		function(acc, word) {
			acc[word] = 1 + (acc[word] || 0)
			return acc
		},
		{})
 }

 module.exports = countWords
 
 // var x  = {}
 // 
 // x["Dupa"] = 1 + (x["DUPA"] || 0)
 // console.log(x)
 // var words = ['A', 'A', 'B']
 // console.log(countWords(words))