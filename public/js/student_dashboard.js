var botomIsExpanded = false;

var classIsActive = false;
var schoolIsActive = false;
var advisorIsActive = false;

var defaultDuration = 1000;
var defaultEnterTime = 3000;

window.onload = function() {
  initialAnimationWhenPageLoaded();
  performEnterAnimation();
  
  
  
    changePositionAccountBasedOnSize();



};

function performEnterAnimation()
{
  runAnimation('boardContainer','changeWidthToFull',defaultEnterTime - 1000, function(){}, function(){});
  runAnimation('boardContainer','slideInToCenter',defaultEnterTime, function(){
    $('#' + 'boardContainer').css('top', '15%');
    $('#' + 'boardContainer').css('min-height', '280px');
    $('#' + 'boardContainer').css('max-width', '100%');
    $('#' + 'boardContainer').removeClass('animated ' + 'changeWidthToFull');
  }, function(){}); 

  runAnimation('accountContainter','slideDownFromTop',defaultEnterTime, function(){}, function(){});

  runAnimation('navigationContainter','slideUpFromCorner',defaultEnterTime + 1000, function(){
    disableElement("classCategoryButton", false);
    disableElement("schoolCategoryButton", false);
    disableElement("advisorCategoryButton", false);
    $('#' + 'navigationContainter').css('opacity', '1');
  }, function(){});

  runAnimation('bottomContainer','fadeIn',defaultEnterTime, function(){}, function(){});
  runAnimation('cardAreaContainer','fadeIn',defaultEnterTime, function(){}, function(){});


}

window.onresize = function() {
  changePositionAccountBasedOnSize();
}

function changePositionAccountBasedOnSize()
{
   if(document.body.offsetWidth == document.getElementById('container').clientWidth)
  {
    document.getElementById('accountContainter').style.minWidth = '100%';
    document.getElementById('navigationContainter').style.right = '0';
    document.getElementById('navigationContainter').style.left = '0';
  }
  else
  {
    document.getElementById('accountContainter').style.minWidth = '300px';
    document.getElementById('navigationContainter').style.right = null;
    document.getElementById('navigationContainter').style.left = '5%';
  }
}

function myFunction(elementID) {

  setOrRevertBackButtonText(elementID);
  document.getElementById(elementID).classList.toggle("show");
}

function setOrRevertBackButtonText(elementID)
{
  if(document.getElementById(elementID.replace('Dropdown','')).textContent != "Close")
  {
    backupText = document.getElementById(elementID.replace('Dropdown','')).textContent;
    document.getElementById(elementID.replace('Dropdown','')).textContent = "Close";
  }
  else
  {
    document.getElementById(elementID.replace('Dropdown','')).textContent = backupText;
    backupText = "";
  }
}

function logoutIsClicked()
{
  performExitAnimation();
  
  setTimeout(function() 
  { 
    document.location.href = '/users/logout'
  }, defaultDuration + defaultDuration);

}

function performExitAnimation()
{
  runAnimation('boardContainer','slideDownToBottom',0, function(){
    $('#' + 'boardContainer').removeClass('animated ' + 'slideInToCenter');
  }, function(){});
  runAnimation('boardContainer','changeWidthBackToInitial', defaultDuration, function(){
    $('#' + 'boardContainer').css('max-height', '43px');
    $('#' + 'boardContainer').css('top', '');
    $('#' + 'boardContainer').css('min-height', '');
    $('#' + 'boardContainer').removeClass('animated ' + 'slideDownToBottom');
  }, function(){});

  runAnimation('websiteTitleContainer','fadeIn',0, function(){
     $('#' + 'websiteTitleContainer').removeClass('animated ' + 'fadeOut');
     $('#' + 'websiteTitleContainer').css('opacity', '1.0');
  },function(){});     

  runAnimation('accountContainter','slideUpToTop',0, function(){
    document.getElementById('accountDropdown').classList.toggle("show");
    $('#' + 'accountContainter').css('top', '0');
    $('#' + 'accountContainter').removeClass('animated ' + 'slideDownFromTop');
  }, function(){});

  runAnimation('navigationContainter','fadeOut',0, function(){
    $('#' + 'navigationContainter').css('bottom', '20%');
    $('#' + 'navigationContainter').removeClass('animated ' + 'slideUpFromCorner');
    disableElement("classCategoryButton", true);
    disableElement("schoolCategoryButton", true);
    disableElement("advisorCategoryButton", true);
  }, function(){});

  runAnimation('cardAreaContainer','fadeOut',0, function(){
     $('#' + 'cardAreaContainer').removeClass('animated ' + 'fadeIn');
     $('#' + 'cardAreaContainer').css('opacity', '1.0');
  },function(){}); 

  runAnimation('bottomContainer','fadeOut',0, function(){
     $('#' + 'bottomContainer').removeClass('animated ' + 'fadeIn');
     $('#' + 'bottomContainer').css('opacity', '1.0');
  },function(){});     
}


function classIsClicked()
{
  if(classIsActive == false)
  {
    animateFocus('classCategoryButton','schoolCategoryButton', 'advisorCategoryButton');
    classIsActive = true;
    schoolIsActive = false;
    advisorIsActive = false;

  }
  else
  {
    focusOff('classCategoryButton');
    document.getElementById('boardContainer').style.backgroundColor  = 'black';
    classIsActive = false;
  }
}

function schoolIsClicked()
{
  if(schoolIsActive == false)
  {
    animateFocus('schoolCategoryButton','classCategoryButton', 'advisorCategoryButton');
    classIsActive = false;
    schoolIsActive = true;
    advisorIsActive = false;
  }
  else
  {
    focusOff('schoolCategoryButton');
    document.getElementById('boardContainer').style.backgroundColor  = 'black';
    schoolIsActive = false;
  }
}

function advisorIsClicked()
{
  if(advisorIsActive == false)
  {
    animateFocus('advisorCategoryButton','classCategoryButton', 'schoolCategoryButton');
    classIsActive = false;
    schoolIsActive = false;
    advisorIsActive = true;
  }
  else
  {
    focusOff('advisorCategoryButton');
    document.getElementById('boardContainer').style.backgroundColor  = 'black';
    advisorIsActive = false;
  }
}

function animateFocus(elementIDone,elementIDtwo,elementIDthree)
{
  focusOn(elementIDone);
  focusOff(elementIDtwo);
  focusOff(elementIDthree);

  changeBoardColor(elementIDone);
}

function changeBoardColor(elementID)
{
  if(elementID == 'classCategoryButton')
  {
      document.getElementById('boardContainer').style.backgroundColor  = 'blue';
  }
  else if(elementID == 'schoolCategoryButton')
  {
      document.getElementById('boardContainer').style.backgroundColor  = 'red';
  }
  else if(elementID == 'advisorCategoryButton')
  {
      document.getElementById('boardContainer').style.backgroundColor  = 'green';
  }
}

function focusOn(elementID)
{
  document.getElementById(elementID).style.minHeight = '100%';
}

function focusOff(elementID)
{
  document.getElementById(elementID).style.minHeight = '80%';
}



function addIsClicked()
{
  if(botomIsExpanded == false)
  {
    document.getElementById('addButton').textContent = "Cancel";
    runAnimation('bottomContainer','changeHeightToExpanded',0, function(){
      if ($('#' + 'bottomContainer').hasClass('fadeIn') == true)
      {
        $('#' + 'bottomContainer').removeClass('animated ' + 'fadeIn');
        $('#' + 'bottomContainer').css('opacity', '1');
      }
      if($('#' + 'bottomContainer').hasClass('changeHeightToCollapsed') == true)
      {
        $('#' + 'bottomContainer').removeClass('animated ' + 'changeHeightToCollapsed');
        $('#' + 'bottomContainer').css('min-height', '5.45%');
      }
     
    }, function(){}); 

    runAnimation('cardAreaContainer','shrinkHeightToExpanded',0, function(){
      if ($('#' + 'cardAreaContainer').hasClass('fadeIn') == true)
      {
        $('#' + 'cardAreaContainer').removeClass('animated ' + 'fadeIn');
        $('#' + 'cardAreaContainer').css('opacity', '1');
      }
      if($('#' + 'cardAreaContainer').hasClass('shrinkHeightToCollapsed') == true)
      {
        $('#' + 'cardAreaContainer').removeClass('animated ' + 'shrinkHeightToCollapsed');
        $('#' + 'cardAreaContainer').css('min-height', '85%');
      }
    
    }, function(){});    
     botomIsExpanded = true;
  }
  else
  {
    document.getElementById('addButton').textContent = "Add cards";
    runAnimation('bottomContainer','changeHeightToCollapsed',0, function(){
      $('#' + 'bottomContainer').removeClass('animated ' + 'changeHeightToExpanded');
      $('#' + 'bottomContainer').css('min-height', '30%');
    }, function(){}); 

    runAnimation('cardAreaContainer','shrinkHeightToCollapsed',0, function(){
      $('#' + 'cardAreaContainer').removeClass('animated ' + 'shrinkHeightToExpanded');
      $('#' + 'cardAreaContainer').css('min-height', '60.45%');
    }, function(){}); 
    botomIsExpanded = false;
  }
  
}



