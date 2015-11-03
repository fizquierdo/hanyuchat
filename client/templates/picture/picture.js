Meteor.subscribe("descriptions");

_sendDescription = function(){
	var picDesc = document.getElementById("picDesc");
	user = Meteor.user() ? Meteor.user().username : "Anonymous";
	Descriptions.insert({user: user, picDescText: picDesc.value, timestamp: new Date()});
	picDesc.value = "";
	picDesc.focus();
};

Template.picture.events({
	'click .sendDesc': function(e){
		_sendDescription();
	},
});

// descriptions
Template.descriptions.helpers({
	descriptions: function(){
		return Descriptions.find({}, {sort: {timestamp: 1}});
	}
});

// description
Template.description.helpers({
	formatted_timestamp: function(){
		return moment(this.timestamp).format("MM-DD-YYYY HH:mm");
	}
});
