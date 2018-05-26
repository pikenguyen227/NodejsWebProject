// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


function moveTo(elementID,initialPosition, final, duration, offset, delay) 
{
	/*
	var elem = document.getElementById(elementID);
	var pos = initialPosition;
	var id = interval(function(){
		if ((offset > 0 && pos > final) || (offset < 0 && pos < final))
		{
			pos = pos + (final - pos);
		  	elem.style.top = pos + 'px'; 
		  	id.clear();
		} 
		else 
		{
			pos = pos + offset;
		  	elem.style.top = pos + 'px'; 
		}
	},duration,delay);
*/

	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);
  
		var pos = initialPosition;
		var id = setInterval(function () 
		{
			if ((offset > 0 && pos > final) || (offset < 0 && pos < final))
			{
				pos = pos + (final - pos);
			  	elem.style.top = pos + 'px'; 
			  	clearInterval(id);
			} 
			else 
			{
				pos = pos + offset;
			  	elem.style.top = pos + 'px'; 
			}
		}, duration);

	}, delay);
}




function scaleUp(elementID, scaleTo, duration ,offset, delay)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);
  
		var x = 0;
		var y = 0;
		var id = setInterval(function () 
		{
			if (x > scaleTo && y > scaleTo) 
			{
			  clearInterval(id);
			} 
			else 
			{
				x = x + offset;
				y = y + offset;
			
				elem.style.transform = "scale(" + x + "," + y + ")"
			}
		}, duration);

	}, delay);
 
}

function fadeOut(elementID, duration, delay, list) {
	setTimeout(function() 
	{ 
	    var fadeTarget = document.getElementById(elementID);
	    fadeTarget.style.opacity = 1;
	    var op = 1;
	    var fadeEffect = setInterval(function () {
	        if (op < 0.1) {
	            clearInterval(fadeEffect);
	            var i;
				for (i = 0; i < list.length; i++) { 
    				disableElement(list[i], true);
				}
	        } else {
	        	op = op - 0.1;
	            fadeTarget.style.opacity = op;
	        }
	    }, duration);
	}, delay);
}


function fadeIn(elementID, duration, delay, list) {
	setTimeout(function() 
	{ 
	    var fadeTarget = document.getElementById(elementID);
	    fadeTarget.style.opacity = 0;
	    var op = 0;
	    var fadeEffect = setInterval(function () {
	        if (op > 0.9) {
	            clearInterval(fadeEffect);
	            var i;
				for (i = 0; i < list.length; i++) { 
    				disableElement(list[i], false);
				}
	        } else {
	        	op = op + 0.1
	            fadeTarget.style.opacity = op;
	        }
	    }, duration);
	}, delay);
}

function disableElement(elementID, value)
{
	if(value)
	{
		document.getElementById(elementID).style.cursor = 'default';
	}
	else
	{
		document.getElementById(elementID).style.cursor = 'pointer';
	}
	document.getElementById(elementID).disabled = value;
}
/*
function changeWidthTo(elementID, finalWidth, duration ,offset, delay)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);

		var width = elem.clientWidth;
		
		var id = setInterval(function () 
		{
			if (width > finalWidth) 
			{
				width = width + (finalWidth - width);
			  	elem.style.maxWidth = width + 'px'; 
				clearInterval(id);
			} 
			else 
			{
				width = width + offset;
				elem.style.maxWidth = width + 'px'
			}
		}, duration);

	}, delay);
 
}
*/
function changeWidthTo(elementID, finalWidth, duration ,offset, delay, percent)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);

		var width = elem.clientWidth;
		
		var id = setInterval(function () 
		{
			if ((offset > 0 && width > finalWidth) || (offset < 0 && width < finalWidth))
			{
				if (percent != -1)
				{
			  		elem.style.maxWidth = percent + '%'; 
			  	}
				clearInterval(id);
			} 
			else 
			{
				width = width + offset;
				elem.style.maxWidth = width + 'px'
			}
		}, duration);

	}, delay);
}

function changeHeightTo(elementID, finalHeight, duration ,offset, delay, percent)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);

		var height = elem.clientHeight;

		var id = setInterval(function () 
		{
			if ((offset > 0 && height > finalHeight) || (offset < 0 && height < finalHeight))
			{
				if (percent != -1)
				{
			  		elem.style.minHeight = percent + '%'; 
				}
				clearInterval(id);
			} 
			else 
			{
				height = height + offset;
				elem.style.minHeight = height + 'px'
			}
		}, duration);

	}, delay);
}


function changeCornerRadius(elementID,topLeft,topRight,bottomRight,bottomLeft, offset, delay)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);
		
		var tl = elem.style.borderRadius

		var id = setInterval(function () 
		{
			
			
		}, duration);

	}, delay);
}




function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    return { clear: function() { t = 0 } };
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};


/*
function changeWidthTo(elementID, finalWidth, duration ,offset, delay)
{
	setTimeout(function() 
	{ 
		var elem = document.getElementById(elementID);

		var width = elem.style.width;

		var id = setInterval(function () 
		{
			if (width > finalWidth) 
			{
				width = width + (finalWidth - width);
			  	elem.style.width = width + 'px'; 
				clearInterval(id);
			} 
			else 
			{
				width = width + offset;
				elem.style.width = width + 'px'
			}
		}, duration);

	}, delay);
 
}



*/

function runAnimation(target, animation ,delay, finalSetting, cleanUp)
{

  setTimeout(function() 
  { 
    finalSetting();
    $('#' + target).addClass('animated ' + animation);
    $('#' + target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cleanUp());
  }, delay);
}

function initialAnimationWhenPageLoaded()
{
	runAnimation('websiteTitleContainer','fadeOut',defaultEnterTime, function(){
		$('#' + 'websiteTitleContainer').css('opacity', '0.0');
	}, 
	function(){});   

	runAnimation('loadingContainer', 'zoomIn', 0, function () {
		$('#' + 'loadingContainer').css('opacity', '1.0');
	}, function(){});

	runAnimation('loadingContainer', 'zoomOut', defaultEnterTime, function(){
	}, function(){
		$('#' + 'loadingContainer').css('opacity', '0.0');  
	});
}


