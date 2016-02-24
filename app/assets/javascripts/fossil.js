$(document).ready(function(){
  console.log("hello");

  var request = $.ajax({
    url:,
    method: 'GET',
  });

  request.on('done', function(response){

    console.log(response);

  });
});