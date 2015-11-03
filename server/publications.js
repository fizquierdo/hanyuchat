Meteor.publish("messages", function(){
	// send only the latest msgs to the client
	return Messages.find({}, {sort: {timestamp: -1}, limit: 10});
});

Meteor.publish("descriptions", function(){
	return Descriptions.find({}, {sort: {timestamp: -1}});
});

Messages.allow({
	insert: function(){return true;}
});

Descriptions.allow({
	insert: function(){return true;}
});
