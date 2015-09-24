Meteor.subscribe("messages");

_sendMessage = function(){
	var msg = document.getElementById("msg");
	Messages.insert({msgText: msg.value, timestamp: new Date()});
	msg.value = "";
	msg.focus();
};

Template.input.events({
	'click .sendMsg': function(e){
		_sendMessage();
	},
	'keyup #msg': function(e){
		if (e.type == "keyup" && e.which == 13) {
			_sendMessage();
	   }
	}
});

Template.messages.helpers({
	messages: function(){
		return Messages.find({}, {sort: {timestamp: 1}});
	}
});

