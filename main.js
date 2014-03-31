//------------------------------------------------------
// Client Code. I'm placing everything here for now
// since this is probably going to change completely.
//------------------------------------------------------
if (Meteor.isClient) {
  
  Template.hello.events({
    'click input[name=date-button]': function () {
      if (typeof console !== 'undefined')
        Meteor.call('logDate');
    },
    'click input[name=delete-button]': function () {
      if (typeof console !== 'undefined')
        Meteor.call('removeAllPosts');
        // Make sure posts is never empty since 
        // everything currently relies on Posts.findOne();
        Meteor.call('initBasicPost');
    }
    ,
    'keyup input[name=name]': function(e){
      updateExistingPost(Posts.findOne(),$(e.target).val());
      /*
      //You can use this once you have some fancy schmancy username login thing going
      if(e.which===13){
        var name = $(e.target).val();
        updateName(name);
      }
      */
    }
  });
  Template.hello.helpers({
    post : function(){  return Posts.findOne(); }
  }) 

  function updateName(name){
    if(Posts.find().count == 0){
      createNewPost(name);
    }
    else{
      var post = Posts.findOne({name:name});
      if(post)
        updateExistingPost(post,name)
      else
        createNewPost(name);
    }
  } 
  function updateExistingPost(post,name){
    Posts.update(post._id,{
            $set:{ name:name }
          });
  }
  function createNewPost(name){
    Posts.insert({name:name});
  }
  
}

//------------------------------------------------------
// Server Code 
//------------------------------------------------------
if (Meteor.isServer) {
   //
}