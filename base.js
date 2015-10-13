console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here

 

  $('#new-post-form').on('click', function(e) { 
  	e.preventDefault(); 

  	if ($('#post-content').val().trim().length > 0) {
  	var postContent = $('#post-content').val();
  	var newPost = '<li class="list-group-item">' + postContent + '<span class="glyphicon glyphicon-remove pull-right">'+ '</li>';
  	$('#posts').append(newPost);
  	$('#post-content').val('');
  	console.log('#posts');

  }

// tooltip function
  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

  $(function(){
  	$('li').on('click', function() {
  		$(this).animate({
  			opacity: 0.0,
  			paddingLeft: '+=80'
  		}, 500, function() {
  			$(this).remove();
  		});
  	});
  });
  	







  	//   var input = $('#inputType').val(); 

  	//   if($())
  	
  	// $('#lists').append("<li class='list-group-item'>"+input+"</li>");
  	// console.log(input);
  	// $('#post').empty(); 

	// $(':header').addClass('headline');
 //  	$('li:li(i)')).hide().fadeIn(1500);
 //  	$('li').on('click'), function() {
 //  		$(this).remove();
 //  	});
  


  });


























});
