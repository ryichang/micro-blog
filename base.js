console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  //set up variable for count
  var count = 0;


  $('#new-post-form').on('click', function(e) { 
  	//prevent page refresh
  	e.preventDefault(); 
  	//check length of post
  	if ($('#post-content').val().trim().length > 0) {
  	var postContent = $('#post-content').val();
  	var newPost = '<li class="list-group-item">' + postContent + '<span class="glyphicon glyphicon-remove pull-right">'+ '</li>';
  	//add new posts to posts
  	$('#posts').append(newPost);
  	localStorage.setItem('newPost', (this.newPost));
  	$('#post-content').val('');
  	console.log('#posts');
  	// each post addes one count 
  	count +=1; 
  	console.log(count);
  }

 

// tooltip function
  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
//adding Glyphicon click to remove lists 
  $(function(){
  	$('.glyphicon-remove').on('click', function() {
  		$('li').animate({
  			opacity: 0.0,
  			paddingLeft: '+=80'
  		}, 500, function() {
  			$('li').remove();
  		});
  	});
  });
  	




  });


});
