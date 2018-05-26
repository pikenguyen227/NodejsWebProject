var defaultDuration = 1000;
var defaultEnterTime = 3000;

function registerIsClicked()
{
  performExitAnimation();
  setTimeout(function() 
	{ 
    if (document.location.href.includes('/users'))
    {
      document.location.href = 'register'
    }
    else
    {
		  document.location.href = 'users/register'
    }
	}, defaultDuration);
}

function loginIsClicked()
{
  performExitAnimation();

 

  setTimeout(function() 
  { 
      document.getElementById('loginForm').submit();
      var i;
      for(i=0; i < ['email','password'].length; i++)
      {
        disableElement(['email','password'][i], false);
      }
  }, defaultDuration);
}

function performExitAnimation()
{
  
  runAnimation('loginContainer','slideDownToBottom',0, function(){
    $('#' + 'loginContainer').removeClass('animated ' + 'slideInToCenter');
  }, function(){});

  runAnimation('loginFormContainer','fadeOut',0, function(){
    disableElement("register", true);
    disableElement("login", true);
    disableElement("forgotPassword", true);
  }, function(){}); 

  runAnimation('registerButtonContainer','fadeOut',0, function(){});

  runAnimation('websiteTitleContainer','fadeIn',0, function(){
     $('#' + 'websiteTitleContainer').removeClass('animated ' + 'fadeOut');
     $('#' + 'websiteTitleContainer').css('opacity', '1.0');
  },function(){});     

  runAnimation('errorContainer','fadeOut',0, function(){
    $('#' + 'errorContainer').removeClass('animated ' + 'fadeIn');
  },function(){});
}

function performEnterAnimation()
{
  runAnimation('loginContainer','slideInToCenter',defaultEnterTime, function(){
    $('#' + 'loginContainer').css('top', '15%');
    $('#' + 'loginContainer').css('min-height', '350px');
  }, function(){});

  runAnimation('loginFormContainer','fadeIn',defaultEnterTime + 500, function(){
    $('#' + 'loginFormContainer').css('opacity', '1.0');
    disableElement("register", false);
    disableElement("login", false);
    disableElement("email", false);
    disableElement("password", false);
    disableElement("forgotPassword", false);
  }, function(){});

  runAnimation('registerButtonContainer','fadeIn',defaultEnterTime + 500, function(){
    $('#' + 'registerButtonContainer').css('opacity', '1.0');
  }, function(){});   

  runAnimation('errorContainer','fadeIn',defaultEnterTime + 500, function(){
  },function(){});
}

window.onload = function() {
  initialAnimationWhenPageLoaded();
  performEnterAnimation();
}



/*
$('#' + target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('#' + target).removeClass('animated ' + animation);
        });
        */












