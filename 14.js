function loadUsers(userIds, load, done) {
  var users = [];
  var pending = userIds.length;
  
  userIds.forEach(function(id, index){
	load(id, function(user) {
		users[index] = user;
		if(--pending == 0) {
			done(users);
		}
	});
  });
}

module.exports = loadUsers