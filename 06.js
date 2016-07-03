 function countWords(inputWords) {
	return inputWords.reduce(
		function(acc, word) {
			acc[word] = 1 + (acc[word] || 0)
			return acc
		},
		{})
 }

 module.exports = countWords