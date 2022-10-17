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
/* Every student showcase button requires a button image. If one  is not present in the student's folder (ie. Status 404), we can assume that the student's project is not ready for display. */
function studentCleanup(student, value, index) {
	let canaryPresent;
	$.get(student + "/!_showcaseAssets/buttonImg.png")
		.done(function() {
			displayedStudents.push(student);
		});
}
students.forEach(studentCleanup);


const showcaseGallery = document.getElementById("showcaseGallery");
let multilineTest = `<button type="button">
	<div>NEW</div>
	<img src="!_placeholder1/chirp.png" alt="">
	<div>This is a button with multiple interior elements.</div>
</button>`;


showcaseGallery.innerHTML = multilineTest;


let buttonImg;
let config;
let description;