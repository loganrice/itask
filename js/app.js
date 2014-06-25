var taskTable;

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
	});

	var datastoreManager = client.getDatastoreManager();
	datastoreManager.openDefaultDatastore(function (error, datastore) {
	    if (error) {
	        alert('Error opening default datastore: ' + error);
	    }

	    // Now you have a datastore. The next few examples can be included here.
	    // define table name
	    taskTable = datastore.getTable('tasks');
	});

	//add task button
	$('.add').click(function(){
			addTask();
	});
});

var addTask = function(){
	// add a task
    var firstTask = taskTable.insert({
				    taskname: 'Buy bread',
				    completed: false,
				    created: new Date()
				});
    // show task name in list
    var taskname = firstTask.get('taskname');
    $('#tasks').append("<li class='task'>" + taskname + "</li>");
}