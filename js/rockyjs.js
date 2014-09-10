/* This script is from Google Map API */
function initialize() {
	
	/*
	go to: http://www.itouchmap.com/latlong.html
	and write down your address to get the Latitude and Longitude to put them inside the function.
	and you can also manually find your location on the map and click the blue pin on map to get the Latitude, Longitude of your location.
	*/
    var position = new google.maps.LatLng(-33.85744429288579, 151.20895385742188); // put your own Latitude, Longitude instead of the default ones
    var myOptions = {
      zoom: 15,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
        document.getElementById("mapDiv"),
        myOptions);
 
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"We are here.", // you can also change the title of your marker on map :)
    }); 
}
  
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
  
$(document).ready(function()
{
/* It makes Anchors work in facebook apps */
		$('#link1').click(function()
		 {
			  $('html,body').animate(
			  {scrollTop: $("#toc-introduction").offset().top}, 
			  {duration: 222, step: function(top_offset){
					FB.Canvas.scrollTo(0, top_offset + 40);
				  }
		 	  });
		 
		 });
		 
		 $('#link2').click(function()
		 {
			  $('html,body').animate(
			  {scrollTop: $("#toc-discography").offset().top}, 
			  {duration: 222, step: function(top_offset){
					FB.Canvas.scrollTo(0, top_offset + 40);
				  }
		       });
		 });
		  
		 $('#link3').click(function()
		 {
			  $('html,body').animate(
			  {scrollTop: $("#toc-contact").offset().top}, 
			  {duration: 222, step: function(top_offset){
					FB.Canvas.scrollTo(0, top_offset + 40);
				  }
		      });
		 });
		 
		
		 
		 /* Thumbnails hover */
		 $(".img").hover(function()
		 {
			  $(this).stop().animate({opacity: "0.6"}, 'slow');
		 	  },
			function()
			{
			  $(this).stop().animate({opacity: "1"}, 'slow');
		 });
			
});