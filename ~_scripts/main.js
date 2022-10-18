const todaysDate = new Date();
const folderBlacklist = [
	"~_css", 
	"~_scripts"
];

/* This would ideally be executed with something more automatic, but according to my research, this requires some back-end functionality (eg. Node.JS or PHP.) The former would require some back-end setup that I don't have the authority in my server setup to do nor the time for. The latter is available, but making PHP and JS play nice with each other feels dirty.
I'll have to settle for a student array and do some extra clean-up from here. Fortunately I have a consistent naming system going on to make this work. If you end up doing things differently, however, expect to revisit this. */
let students = [
	"!_paulEdmiston",
	"!_placeholder1",
	"!_placeholder2",
	"!_placeholder3",
	"abrahamSegura",
	"anelleSantana",
	"brittanyAcceturo",
	"cheloyGonzalez",
	"christopherFelix",
	"christopherTa",
	"davidCummiskey",
	"farrahLam",
	"jacobVerduzco",
	"jorgeMRocha",
	"juneKwon",
	"leksiaTorres",
	"milagrosPerez",
	"mollyBolt",
	"nayelliZechman",
	"rebeccaTang",
	"sharonCho",
	"tinaHu",
	"vickyShan",
	"zenaXayalath"
]
let displayedStudents = [];
/* To help encourage exploration, the gallery order will be random on every refresh. This function is defined first as we'll be using it in multiple places sooner rather than later.
Every student showcase button requires a button image. If one  is not present in the student's folder (ie. Status 404), we can assume that the student's project is not ready for display. Get is a seriously weird function, however. It behaves asynchronously. That means that the code will continue with what it was doing, whether or not the function is done. This is technically better, but practically not. Throws a wrench in how to program this. */
function randomizeArray(array) {
	array.sort( function() {return 0.5 - Math.random()} );
}
let statusCode = null;
function studentCleanup(student, index) {
	statusCode = null;
	$.ajax({
		url: student + "/!_showcaseAssets/buttonImg.png",
		async: false,
		success: function(data, textStatus, xhr) {statusCode = xhr.status;}
	})
}
// students.forEach(studentCleanup);
// $.when(students.)
//$.each(students, studentCleanup);
$.when.apply($, students.map(studentCleanup))


let multilineTest = `<a href="" target="_blank" class="showcaseButton">
	<div class="newHighlight">NEW</div>
	<img src="!_placeholder1/chirp.png" alt="">
	<div>This is a button with multiple interior elements.</div>
</a>`;
const showcaseGallery = document.getElementById("showcaseGallery");

let buttonImg;
let config;

function galleryAssembly(student, index, array) {
	multilineTest = `<a href="" target="_blank" class="showcaseButton">
		<div class="newHighlight">NEW</div>
		<img src="!_placeholder1/chirp.png" alt="">
		<div>` + student + `</div>
	</a>`;
	$("#showcaseGallery").append(multilineTest);
}
displayedStudents.forEach(galleryAssembly);
let galleryContents = $("#showcaseGallery a");
function galleryShuffle() {
	$.each( galleryContents, function(index, currentValue) {currentValue.detach();} );
	galleryContents.sort( function() {return 0.5 - Math.random()} );
	$.each( galleryContents, function(index, currentValue) {showcaseGallery.append(currentValue);} );
	
}
galleryShuffle();



// showcaseGallery.innerHTML = multilineTest;