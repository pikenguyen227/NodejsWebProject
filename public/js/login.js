function registerIsClicked()
{
  performExitAnimation()
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
	}, 390);
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
  }, 390);
}

function performExitAnimation()
{
  moveTo("loginContainer",100,638,1,5,0);

  fadeOut("loginFormContainer", 20, 0, ['register','login','nameField','passwordField','forgotPassword']);
  fadeIn("websiteTitleContainer", 40, 0, []);

  fadeOut("companyNameContainer", 5, 0,[]);
  fadeOut("errorContainer", 5, 0,[]);
 // document.getElementById('loginContainer').style.minHeight = '0';
}

window.onload = function() {
  	moveTo("loginContainer",580,100,1,-5,3000);

  	scaleUp("loadingContainer", 1.5, 0.5, 0.004, 0);
  	fadeIn("loadingContainer", 0, 0, []);
  	fadeOut("loadingContainer", 20, 3000, []);

  	fadeIn("loginFormContainer", 20, 3500, ['register','login','email','password','forgotPassword']);
  	fadeOut("websiteTitleContainer", 40, 3000,[]);

  	fadeIn("companyNameContainer", 20, 3500,[]);
  	fadeIn("errorContainer", 20, 3500,[]);

  	disableElement("register", true);
  	disableElement("login", true);
  	disableElement("nameField", true);
  	disableElement("passwordField", true);

  	setTimeout(function() 
	{ 
  		document.getElementById('loginContainer').style.minHeight = '280px';
  	}, 4500);
};




