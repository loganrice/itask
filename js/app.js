$(document).ready(function(){
	var appKey = 'ca2w8rewh811swk';
	var client = new Dropbox.Client({key: appKey});
	console.log(client);
	// Try to finish OAuth authorization.
	client.authenticate({interactive: false}, function (error) {
	    if (error) {
	        alert('Authentication error: ' + error);
	    }
	});

	if (client.isAuthenticated()) {
	    // Client is authenticated. Display UI.
	    alert("cool it worked");
	}

	//authenticate button
	$('.btn').click(function(){
		client.authenticate();
	})
})