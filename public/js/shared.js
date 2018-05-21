function moveTo(elementID,initialPosition, final, duration, offset, delay) 
{

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
