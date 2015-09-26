Meteor.subscribe("messages");

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

_sendMessage = function(){
	var msg = document.getElementById("msg");
	user = Meteor.user() ? Meteor.user().username : "Anonymous";
	Messages.insert({user: user, msgText: msg.value, timestamp: new Date()});
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

Template.message.helpers({
	formatted_timestamp: function(){
		return moment(this.timestamp).format("MM-DD-YYYY HH:mm");
	}
});

