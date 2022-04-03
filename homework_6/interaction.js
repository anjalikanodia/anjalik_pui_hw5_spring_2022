// Visual feedback of course being added to schedule
function confirmRegistration() {
    alert('Course successfully added to your schedule!');
}

// Testing change of information on detail page on loading
function testChangeCourseDescription() {
    document.getElementById("course_name").textContent = "New name yay!";
    document.getElementById("course_instructor").textContent = "Instructor: NEW";
    document.getElementById("course_description").textContent = "This needs to be replaced!";
    console.log("Success");
}

// Intializing properties of object (course) 
function Course(name, instructor, description) {
    this.name = name;
    this.instructor = instructor;
    this.description = description;
}

// Creating new instances of Course (naming convention courserow_column)
var course1_1 = new Course ("48-100 Studio: Foundation I", "Arscott, Mary-Lou", "As the first architectural design studio course, the Foundation 1 studio establishes a fundamental understanding of representation and abstraction to which more of your own thoughts and ideas about spatial thinking can be added. This will involve, by means of the architectural studio, a reiterative investigation into the relationship of technique, form, and meaning through study, invention, testing, and evaluation. During this semester a series of short problems will be given to expose you to the complexities of visual communication and the design act; to develop skills of spatial manipulation; to give you the self-confidence in making valid decisions within set time limits; to develop the skills of graphic presentation necessary for interpreting and communicating your architectural intentions; and above all, to instill the ability to combine insight with the rigorous analytical study in a design process that is efficient, personally effective, and which becomes second nature to you as a working process.");
var course1_2 = new Course ("48-250 Urbanism", "Gruber, Stefan", "Formerly titled Case Studies in Architecture and Cities (CSE STD ARC CIT).");
var course1_3 = new Course ("48-315 Environment I: Climate", "Loftness, Vivian", "This course introduces architectural design responses for energy conservation, human comfort, and the site-specific dynamics of climate. Students will be expected to combine an understanding of the basic laws of comfort and heat flow with the variables of local climate to create energy design guidelines for their own work. The state of the art in building energy conservation and passive heating and cooling technologies will be presented, with take-home readings and assignments.");
var course2_2 = new Course ("60-100 Electronic Media", "Doe, John", "This course is an introduction to the computer as a dynamic tool for time-based media production. In this course students develop skills in digital video and audio production through the exploration of narrative, experimental, performance, documentary and animation themes and forms.");
var courses_list = [course1_1, course1_2, course1_3, course2_2]

function changeDescription() {
    // alert('This page must change');
    window.location = 'description.html';
    current_course_id = id;
    document.getElementbyId("course_name").textContent = courses_list[id].name;
    document.getElementbyId("course_instructor").textContent = courses_list[id].instructor;
    document.getElementbyId("new_course_description").textContent = courses_list[id].description;
}

// var myCourses=[];
// var current_course_id = 0;

// // Take id out of local storage 

// // Check id against array

// // Create a description onload function that takes id as parameter
// function changeCourseDetails(course_ID) {
//     window.onload = function(){

//     }
// }

// Get the id of the card user clicks on and store it in local storage
// id = sessionStorage.getItem("course_ID")

