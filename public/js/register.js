
var backupText = "";
var isSchoolExpanded = false;
var isMajorExpanded = false;
var isDegreeExpanded = false;

function changeCursor(list)
{
  var i;
  for (i = 0; i < list.length; i++) { 
    document.getElementById(list[i]).style.cursor = 'pointer'
  }
}

window.onload = function() {
  	moveTo("registerContainer",580,100,1,-5,3000);

  	scaleUp("loadingContainer", 1.5, 0.5, 0.004, 0);
  	fadeIn("loadingContainer", 0, 0, []);
  	fadeOut("loadingContainer", 20, 3000, []);

    fadeIn("registerFormContainer", 20, 3500, ['registerNameField','registerPasswordField','retypeRegisterPasswordField','school','degree','major','registerButton','backButton']);
    fadeOut("websiteTitleContainer", 40, 3000,[]);

    fadeIn("errorContainer", 20, 3500,[]);

    changeCursor(['registerNameField'])

    disableElement("registerNameField", true);
    disableElement("registerPasswordField", true);
    disableElement("retypeRegisterPasswordField'", true);
    disableElement("school", true);
    disableElement("degree", true);
    disableElement("major", true);
    disableElement("registerButton", true);
    disableElement("backButton", true);
};


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

function backIsClickded()
{
  moveTo("registerContainer",100,580,1,5,0);
  
  fadeOut("registerFormContainer", 20, 0, ['registerNameField','registerPasswordField','retypeRegisterPasswordField','school','degree','major','registerButton','backButton']);
  fadeIn("websiteTitleContainer", 40, 0, []);
/*
    fadeOut("errorContainer", 5, 0,[]);
    */
    setTimeout(function() 
  { 
    document.location.href = '/'
  }, 390);
}

function registerIsClicked()
{
    moveTo("registerContainer",100,638,1,5,0);
    fadeOut("registerFormContainer", 20, 0, ['school','degree','major','registerButton','backButton']);
    fadeIn("websiteTitleContainer", 40, 0, []);
    fadeOut("errorContainer", 5, 0,[]);
    setTimeout(function() 
    { 
      document.getElementById('registerForm').submit();
      var i;
      for(i =0; i < ['registerNameField','registerPasswordField','retypeRegisterPasswordField'].length; i++)
      {
        disableElement(['registerNameField','registerPasswordField','retypeRegisterPasswordField'][i], false);
      }
    }, 390);

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

