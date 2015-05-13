//Parses EDI files and displays in table (e.g., edi-*.html)

  function myFunction(arr) {
    var out = "";
    var i;
    var n;
    var s;
  	
    for(i = 0; i < arr.length; i++) {
		
	       out 	+= "<tr>" +
	
		"<td class='padding med-cell'>"	+ arr[i].title + " ("
				+ arr[i].modified + ")"
				+ "</td>" +
	
		"<td class='padding small-cell'>" + arr[i].identifier + "</td>" +
	
		"<td class='padding large-cell'>" + arr[i].description + "</td>" +
	
		"<td class='padding small-cell'>" + arr[i].publisher.name + "</td>" +	
	
	//		"<td class='padding'>" 	+ arr[i].contactPoint.fn + "</td>" +
	
		"<td class='padding small-cell'>" 	+ '<a href="' + arr[i].contactPoint.hasEmail + '">' 
			   	+ "Email" + '</a>' + "</td>" +
	
	//		"<td class='padding'>" 	+ arr[i].bureauCode + "</td>" + 	
	
	/*		"<td class='padding small-cell'>" 	+'<a href="' + arr[i].landingpage 	+ '" target=_blank>' 
				+ "Website" + '</a>' + "</td>" +
	
		"<td class='padding small-cell'>" + '<a href="' + arr[i].distribution[0].downloadURL 	+ '" target=_blank>' 
				+ "Website" + '</a>' + "</td>" +
		
		"<td class='padding small-cell'>" + '<a href="' + arr[i].accessURL 	+ '" target=_blank>' 
				+ "Website" + '</a>' + "</td>" +
	*/
		"<td class='padding small-cell'>" + arr[i].accessLevel + "</td>" +
	
		"<td class='padding med-cell'>"
	
	    	for(n = 0; n < arr[i].keyword.length; n++) {
		      		out += 
					arr[i].keyword[n] + ", "  
		    } 	+
	
		"</td>"
	
		"</tr>"
		
	}

    document.getElementById("id01").innerHTML = out;
};
