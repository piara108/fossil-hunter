$(document).ready(function(){
  // console.log("hello");

  requestList();

  requestDetail();


});

var requestList = function(){
    var request = $.ajax({
    url:'/welcome/getList',
    method: 'GET'
    });

  request.done(function(response){
    console.log("we got list!");
    console.log(response);

  });
};

var requestDetail = function(){
    var request = $.ajax({
    url:'/welcome/getDetail',
    method: 'GET'
    });

  request.done(function(response){
    console.log("we got detail!")
    console.log(response);

  });
};