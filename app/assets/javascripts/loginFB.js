  
  var accessToken = '';
  logInWithFacebook = function() {
    FB.login(function(response) {
      if (response.authResponse) {
        accessToken = response.authResponse.accessToken;
        alert(accessToken);
        console.log(accessToken);
        // Now you can redirect the user or do an AJAX request to
        // a PHP script that grabs the signed request from the cookie.
      } else {
        alert('User cancelled login or did not fully authorize.');
      }
    });
    return false;
  };
  window.fbAsyncInit = function() {
    FB.init({
      appId: '334548493556862',
      cookie: true, // This is important, it's not enabled by default
      version: 'v2.7'
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xmlhttp.open("POST", "https://graph.facebook.com/v2.6/me/messages?access_token="+accessToken);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({
  "recipient":{
    "id":"100000113104685"
  },
  "message":{
    "text":"hello, world!"
  }}));

