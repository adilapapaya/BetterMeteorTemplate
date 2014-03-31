// code to run on server at startup
Meteor.startup(function () {
	// uncomment this to reset your posts
	Posts.remove({}); //reset it
	if (Posts.find().count() === 0) { 
	  Meteor.call('initBasicPost');
	}

});

//An example Meteor method
Meteor.methods({

	logDate: function() {
		Posts.update(Posts.findOne()._id,{
            $set:{ date:"Today's Date is " + (new Date()) }
          });

		return ("Today's Date is " + (new Date()));
    },
    initBasicPost: function(){
    	Posts.insert({name:'Human',date:new Date()});
    },
    removeAllPosts: function(){
    	Posts.remove({});

    }

})