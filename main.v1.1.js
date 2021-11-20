function doTheRedirect(dataName1, dataName2, dataName3, dataName4) {
	if(!dataName1 || !dataName2 || !dataName3 || !dataName4) {
		   return false;
	}

	var composer = document.getElementsByClassName("email-composer")[0];
	var data = composer && [
		composer.getAttribute("data-" + dataName1),
		"@",
		composer.getAttribute("data-" + dataName2),
		composer.getAttribute("data-" + dataName3),
		".",
		composer.getAttribute("data-" + dataName4)];

	if(data && data.length) {
	  window.open("mailto:" + data.join(""));
	}

	return false;
}
