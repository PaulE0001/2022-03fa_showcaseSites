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
/* Every student showcase button requires a button image. If one  is not present in the student's folder (ie. Status 404), we can assume that the student's project is not ready for display.
Using synchronous requests is discouraged these days, but coding with it is profoundly easier.
Considering the time at the moment, I'm going to make that sacrifice. */
function studentCleanup(student, index, array) {
	let xhp = new XMLHttpRequest();
	xhp.open("GET", student + "/!_showcaseAssets/buttonImg.png", false);
	xhp.send();
	if (xhp.status == 200) {
		displayedStudents.push(student);
		console.log("Student pushed: " + student);
	}	
}
students.forEach(studentCleanup);




const showcaseGallery = document.getElementById("showcaseGallery");


let multilineTest = `<a href="" target="_blank" class="showcaseButton">
	<div class="newHighlight">NEW</div>
	<img src="!_placeholder1/chirp.png" alt="">
	<div>This is a button with multiple interior elements.</div>
</a>`;
let config;
function galleryAssembly(student, index, array) {
	let primePath = student + "/!_showcaseAssets/";

	let buttonImg = primePath + "buttonImg.png";
	config = primePath + "config.json";
	let xhp = new XMLHttpRequest();
	xhp.open("GET", config, false);
	xhp.send();
	config = JSON.parse(xhp.responseText);

	let dateApproved = new Date(config.dateApproved);
	let dateDiff = todaysDate - dateApproved;
	let mintHighlight = "";
	//If the project is younger than a week since approved:
	if (dateDiff < 604800000) {mintHighlight = `<div class="newHighlight">NEW</div>`}

	let projHomepage = student + "/" + config.homepage;


	multilineTest = `<li id="` + student + `" class="showcaseButton"><a href="` + projHomepage + `" target="_blank">
		<div class="buttonText">
			` + mintHighlight + `
			<div class="nameLabel">` + config.name + `</div>
		</div>
		<img src="` + buttonImg + `" alt="">
	</a></li>`;
	showcaseGallery.insertAdjacentHTML("beforeend", multilineTest);
	console.log("Text inserted");
}
displayedStudents.forEach(galleryAssembly);




let galleryContent = document.querySelectorAll(".showcaseButton");

/* Really wish I kept the Tab I got this from open for long enough to take note of it in hindsight, because the solution it brought up felt ingenious. Certainly so after trying to hash out what was going on, at least.

Part of the issue is that there are at least two ways to get an array of HTML elements, but they have some key differences in what sort of functions you can do right out of the box. I ultimately settled on querySelectorAll, as it allowed me to use array functions. There was another method that used something else I can't recall, but the short of it is that it *didn't* make an array. This made it tough to do some things I took for granted. And even still this solution behaved a bit more quirky than I anticipated. */


for (let i = galleryContent.length - 1; i >= 0; i--) {
	galleryContent = document.querySelectorAll(".showcaseButton");
	let ranNum = Math.floor(Math.random() * galleryContent.length);
	showcaseGallery.appendChild( galleryContent.item(ranNum) );
	console.log("Button " + i + " to " + ranNum);
}


let personalSubmit = document.getElementById("!_paulEdmiston");
let loadingAdvisory = document.getElementById("loadingAdvisory")
loadingAdvisory.classList.add("hidden");
function easterEgg() {
	personalSubmit.classList.toggle("hidden");
}
easterEgg();