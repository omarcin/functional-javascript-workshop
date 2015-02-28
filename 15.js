function getDependencies(tree) {
	var dependencies = {};
	
	function go(deps) {
		if(!deps) return;
		for(k in deps) {
			var dependency = deps[k];
			var dep = k + "@" + dependency.version;
			dependencies[dep] = 1;
			go(dependency.dependencies);
		}
	}
	
	go(tree.dependencies);
	
	return Object.keys(dependencies).sort();
}

module.exports = getDependencies