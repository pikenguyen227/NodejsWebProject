var backupText = "";
var isSchoolExpanded = false;
var isMajorExpanded = false;
var isDegreeExpanded = false;

var defaultDuration = 1000;
var defaultEnterTime = 3000;

window.onload = function() {
  initialAnimationWhenPageLoaded();
  performEnterAnimation();
}

function performEnterAnimation()
{
  runAnimation('registerContainer','slideInUp',defaultEnterTime, function(){
    $('#' + 'registerContainer').css('top', '15%');
    $('#' + 'registerContainer').css('min-height', '350px');
  }, function(){});

  runAnimation('registerFormContainer','fadeIn',defaultEnterTime + 500, function(){
    $('#' + 'registerFormContainer').css('opacity', '1.0');
    disableElement("registerNameField", false);
    disableElement("registerPasswordField", false);
    disableElement("retypeRegisterPasswordField", false);
    disableElement("school", false);
    disableElement("degree", false);
    disableElement("major", false);
    disableElement("registerButton", false);
    disableElement("backButton", false);
  },function(){});

  runAnimation('errorContainer','fadeIn',defaultEnterTime + 500, function(){
  },function(){});
}

function performExitAnimation()
{
  runAnimation('websiteTitleContainer','fadeIn',0, function(){
    $('#' + 'websiteTitleContainer').removeClass('animated ' + 'fadeOut');
    $('#' + 'websiteTitleContainer').css('opacity', '1.0');
  }, function(){});  

  runAnimation('registerContainer','slideDownToBottom',0, function(){
    $('#' + 'registerContainer').removeClass('animated ' + 'slideInToCenter');
  }, function(){});

  runAnimation('registerFormContainer','fadeOut',0, function(){
    $('#' + 'registerFormContainer').removeClass('animated ' + 'fadeIn');
    $('#' + 'registerFormContainer').css('opacity', '0.0');
    disableElement("registerNameField", true);
    disableElement("registerPasswordField", true);
    disableElement("retypeRegisterPasswordField", true);
    disableElement("school", true);
    disableElement("degree", true);
    disableElement("major", true);
    disableElement("registerButton", true);
    disableElement("backButton", true);
  },function(){});

  runAnimation('errorContainer','fadeOut',0, function(){
    $('#' + 'errorContainer').removeClass('animated ' + 'fadeIn');
  },function(){});
}


function backIsClickded()
{
  performExitAnimation();
  setTimeout(function() 
  { 
    document.location.href = '/'
  }, defaultDuration);
}

function registerIsClicked()
{
    performExitAnimation()
    setTimeout(function() 
    { 
      document.getElementById('registerForm').submit();
      var i;
      for(i =0; i < ['registerNameField','registerPasswordField','retypeRegisterPasswordField'].length; i++)
      {
        disableElement(['registerNameField','registerPasswordField','retypeRegisterPasswordField'][i], false);
      }
    }, defaultDuration);

}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(elementID) {

  checkWhichIsExpandedAndCollapseIt(elementID);
  setOrRevertBackButtonText(elementID);
  document.getElementById(elementID).classList.toggle("show");
}

function setOrRevertBackButtonText(elementID)
{
  if(document.getElementById(elementID.replace('Dropdown','')).textContent != "Back")
  {
    backupText = document.getElementById(elementID.replace('Dropdown','')).textContent;
    document.getElementById(elementID.replace('Dropdown','')).textContent = "Back";
  }
  else
  {
    document.getElementById(elementID.replace('Dropdown','')).textContent = backupText;
    backupText = "";
    if (elementID.replace('Dropdown','') == 'school')
    {
      isSchoolExpanded = false;
    }
    if (elementID.replace('Dropdown','') == 'degree')
    {
      isDegreeExpanded = false;
    }
    if (elementID.replace('Dropdown','') == 'major')
    {
      isMajorExpanded = false
    }
  }
}

function checkWhichIsExpandedAndCollapseIt(elementID)
{
  if (elementID.replace('Dropdown','') == 'school')
  {
      isSchoolExpanded = true;
      if(isDegreeExpanded)
      {
        setOrRevertBackButtonText('degreeDropdown');
        document.getElementById('degreeDropdown').classList.toggle("show");
      }
      if(isMajorExpanded)
      {
        setOrRevertBackButtonText('majorDropdown');
        document.getElementById('majorDropdown').classList.toggle("show");
      }
  }
  if (elementID.replace('Dropdown','') == 'degree')
  {
      isDegreeExpanded = true;
      if(isSchoolExpanded)
      {
        setOrRevertBackButtonText('schoolDropdown');
        document.getElementById('schoolDropdown').classList.toggle("show");
      }
      if(isMajorExpanded)
      {
        setOrRevertBackButtonText('majorDropdown');
        document.getElementById('majorDropdown').classList.toggle("show");
      }
  }
  if (elementID.replace('Dropdown','') == 'major')
  {
      isMajorExpanded = true;
      if(isSchoolExpanded)
      {
        setOrRevertBackButtonText('schoolDropdown');
        document.getElementById('schoolDropdown').classList.toggle("show");
      }
      if(isDegreeExpanded)
      {
        setOrRevertBackButtonText('degreeDropdown');
        document.getElementById('degreeDropdown').classList.toggle("show");
      }
  }
}

function changeText(elementID,theText)
{
  document.getElementById(elementID).textContent = theText;
  document.getElementById(elementID + 'Input').value = theText
  document.getElementById(elementID + 'Dropdown').classList.toggle("show");
  isSchoolExpanded = false;
  isDegreeExpanded = false;
  isMajorExpanded = false;

}


function filterFunction(elementID, dropdown) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(elementID);
    filter = input.value.toUpperCase();
    div = document.getElementById(dropdown);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

