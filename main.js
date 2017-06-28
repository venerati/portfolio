
function insertDate() {
	// passes the date modified information into the footer of the html page.
	var pageModified = new Date(document.lastModified);

	document.getElementById("dateModified").innerHTML = pageModified;
}

insertDate();