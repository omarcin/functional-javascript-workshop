function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(user){ 
									return goodUsers.some(function (goodUser) {
										return goodUser.id === user.id;})})
  };
}

module.exports = checkUsersValid


// TESTS


  var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]

  // `checkUsersValid` is the function you'll define
  var testAllValid = checkUsersValid(goodUsers)

  // => true

  testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ])
  // => false