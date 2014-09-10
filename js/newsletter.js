function CheckNewsletter()
{
	var mail = document.forms['newsLetter']['newsletter_email'].value;
	
	var atPos=mail.indexOf("@");
	var dotPos=mail.lastIndexOf(".");
	
	if(mail == 'Newsletter' || mail == '' || atPos<1 || dotPos<atPos+2 || dotPos+2>=mail.length)
	{
		document.getElementById('newsLetter_error').innerHTML = "Please enter a valid email address";
		return false;	
	}
	else return true;	
}

	var XMLHttpRequestObject = false; 
	
	if (window.XMLHttpRequest) {
	
	  XMLHttpRequestObject = new XMLHttpRequest();
	
	} else if (window.ActiveXObject) {
	
	  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	
	}
	
	
	function getDataNewsletter(divID) 
    { 
  	  if(CheckNewsletter())
  	  {
  		  		var mail = document.forms['newsLetter']['newsletter_email'].value;
		  		
  		  		dataSource = 'assets/newsletter308d.html?email=' + mail + '&code=phaia2314225let';
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