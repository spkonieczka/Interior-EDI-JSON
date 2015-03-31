function load() {

var output="<ul>";
for (var i in data.dataset) {

	output+="<li>"+data.dataset[i].title+"</li>"+
			"<li>"+data.dataset[i].description+"</li>"+
			"<li>"+data.dataset[i].keyword+"</li>"+
			"<li>"+data.dataset[i].modified+"</li>"+
			"<li>"+data.dataset[i].publisher.name+"</li>"+
			"<li>"+data.dataset[i].contactPoint.fn+"</li>"+
			"<li>"+data.dataset[i].contactPoint.hasEmail+"</li>"+
			"<li>"+data.dataset[i].identifier+"</li>"+
			"<li>"+data.dataset[i].bureauCode+"</li>"+
			"<li>"+data.dataset[i].programCode+"</li>"+
			"<li>"+data.dataset[i].landingpage+"</li>"+
			"<li>"+data.dataset[i].accesslevelcomment+"</li>"+
			"<li>"+data.dataset[i].programCode+"</li>"
}			

output+="</ul>";
document.getElementById("placeholder").innerHTML=output;

}
