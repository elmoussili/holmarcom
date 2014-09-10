	function Check()
	{
		var email = document.forms['contact']['Email'].value;
		
		var name = document.forms['contact']['Name'].value;
		
		var message = document.forms['contact']['Message'].value;
		
		var atpos=email.indexOf("@");
		var dotpos=email.lastIndexOf(".");
		
		if(name == 'Name' || name == '')
		{
			document.getElementById('error').innerHTML = "Please enter your name";
			return false;	
		}
		else if(email == 'Email' || email == '' || atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
		{
			document.getElementById('error').innerHTML = "Please enter a valid email address";
			return false;	
		}
		else if(message == 'Message' || message == '')
		{
			document.getElementById('error').innerHTML = "Please write a message";
			return false;	
		}
		else 
		{
			return true;	
		} 	
	}


	  var XMLHttpRequestObject = false; 

      if (window.XMLHttpRequest) {

        XMLHttpRequestObject = new XMLHttpRequest();

      } else if (window.ActiveXObject) {

        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");

      }



      function getData(divID) 
      { 
    	  if(Check())
    	  {
    		  	var email = document.forms['contact']['Email'].value;
    			
    			var name = document.forms['contact']['Name'].value;
    			
    			var message = document.forms['contact']['Message'].value;  
		  		
		    	dataSource = 'assets/contact308d.html?email=' + email + '&name=' + name + '&msg=' + message + '&code=phaia2314225';
		        if(XMLHttpRequestObject) {
		
		          var obj = document.getElementById(divID); 
		
		          XMLHttpRequestObject.open("GET", dataSource); 
		
		          XMLHttpRequestObject.onreadystatechange = function() 
		
		          { 
		
		            if (XMLHttpRequestObject.readyState == 4 && 
		
		              XMLHttpRequestObject.status == 200) 
		            { 
		            		 obj.innerHTML = XMLHttpRequestObject.responseText; 
		            } 
		
		          } 
		
		
		
		          XMLHttpRequestObject.send(null); 
		
		        }
    	  }

      }

