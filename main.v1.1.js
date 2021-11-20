function doTheRedirect() {
   var composer = document.getElementsByClassName("email-composer")[0];
   var data = composer && [
		composer.getAttribute("data-username"),
		"@",
		composer.getAttribute("data-firstname"),
		composer.getAttribute("data-surename"),
		".",
		composer.getAttribute("data-domain")];

   if(data && data.length) {
	  window.open("mailto:" + data.join(""));
   }
   
   return false;
}
