Meteor.publish("messages", function(){
	// send only the latest msgs to the client
	return Messages.find({}, {sort: {timestamp: -1}, limit: 10});
});

Messages.allow({
	insert: function(){return true;}
});
