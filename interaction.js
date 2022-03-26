// Get the id of the card user clicks on and store it in local storage
id = sessionStorage.getItem("course_ID")

// Create all courses as instances of an object using a constructor fuunction

function Course (code, name, instructor, description) {
    this.name = name;
    this.description = description;
    this.instructor = instructor;
    this.code = code;
}

// Row 1 Course 1
var course1_1 = new Course ("48-100","Studio: Foundation I", "Arscott, Mary-Lou", "As the first architectural design studio course, the Foundation 1 studio establishes a fundamental understanding of representation and abstraction to which more of your own thoughts and ideas about spatial thinking can be added. This will involve, by means of the architectural studio, a reiterative investigation into the relationship of technique, form, and meaning through study, invention, testing, and evaluation. During this semester a series of short problems will be given to expose you to the complexities of visual communication and the design act; to develop skills of spatial manipulation; to give you the self-confidence in making valid decisions within set time limits; to develop the skills of graphic presentation necessary for interpreting and communicating your architectural intentions; and above all, to instill the ability to combine insight with the rigorous analytical study in a design process that is efficient, personally effective, and which becomes second nature to you as a working process.");

// Row 1 Course 2
var course1_2 = new Course ("48-250","Urbanism", "Gruber, Stefan", "Formerly titled Case Studies in Architecture and Cities (CSE STD ARC CIT).");

// Row 1 Course 3
var course1_3 = new Course ("48-315","Environment I: Climate", "Loftness, Vivian", "This course introduces architectural design responses for energy conservation, human comfort, and the site-specific dynamics of climate. Students will be expected to combine an understanding of the basic laws of comfort and heat flow with the variables of local climate to create energy design guidelines for their own work. The state of the art in building energy conservation and passive heating and cooling technologies will be presented, with take-home readings and assignments.");

// Row 1 Course 4
var course1_4 = new Course ("48-356","Color Drawing", "Cooper, Douglas", "Color Drawing builds knowledge and provides practice in the use of color in depicting architectural surroundings. Media used are pastels on gray backgrounds, colored pencil on white backgrounds and water color. In the interest of speed the principal technique used in watercolor is a moderate dry brush technique. Coursework assumes knowledge of linear perspective and basic use of color. Work consists of in-class exercises and weekend assignments built on these. Students can expect to spend up to 6 hours of work per weekend.");

// Row 1 Course 4
var course1_5 = new Course ("48-455","Advanced Structures", "Oppenheim, Irving", "In this elective course we examine the following topics: structural behavior and member design in reinforced concrete and prestressed concrete; construction estimation and task planning; structural system design for buildings constructed with precast concrete, panelized systems, cast-in-place two-way systems, dia-grid exterior frames, tube-type, and space frame structures; geometric structures such as shells, lattice shells, cable nets, fabric structures, and air-supported structures. ");

// Create a list/array of all courses
var courses_list = [course1_1, course1_2, course1_3, course1_4, course1_5]

// Take id out of local storage 

// Check id against array

// Create a description onload function that takes id as parameter
function changeCourseDetails(course_ID) {
    window.onload = function(){

    }
}

