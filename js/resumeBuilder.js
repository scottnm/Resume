
var bio = {
    "name" : "Scott Munro",
    "role" : "Computer Science Student",
    "contact_info" : {
        "mobile" : "214-769-0461",
        "email" : "scottnmunro@gmail.com",
        "github" : "scottnm",
        "location" : "Austin, TX"
    },
    "picture_URL" : "images/test-photo.jpg",
    "welcome_message" : "Welcome! I am an aspiring Software Engineer and Game Developer. All of the projects listed on this resume can be found on my Github!",
    "skills" : [
        "Object Oriented Programming",
        "Game Development",
        "C/C++",
        "Teaching"
    ]
}

bio.displayContacts = function(){
    var formattedContact = HTMLmobile.replace("%data%", bio.contact_info.mobile);
    $("#topContacts").append(formattedContact);
    formattedContact = HTMLemail.replace("%data%", bio.contact_info.email);
    $("#topContacts").append(formattedContact);
    formattedContact = HTMLgithub.replace("%data%", bio.contact_info.github);
    $("#topContacts").append(formattedContact);
    formattedContact = HTMLlocation.replace("%data%", bio.contact_info.location);
    $("#topContacts").append(formattedContact);

}

bio.displaySkills = function(){
    /* append all of the skills */
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

var workExperience = {
    "SWE Intern":{
        "position": "Software Engineering Intern",
        "employer": "Google",
        "dates": "June 2015 - August 2015",
        "location": "Mountain View, CA",
        "description": "Worked on Google's mobile development team, and helped develop technology for the Web-based Google Play store.",
        "display": "false"
    },

    "Pod Mentor":{
            "position": "Freshman Mentor",
            "employer": "University of Texas at Austin",
            "dates": "August 2014 - Present",
            "location": "Austin, TX",
            "description": "Mentored and instructed a group of 20 Computer Science Freshman in the tools and resources available to them. Also provided tutoring for introductory Computer Science courses.",
            "display": "true"
        }
}

var education = {
    "schools": [
        {
            "name": "University of Texas at Austin",
            "city": "Austin, Texas",
            "major": "Computer Science",
            "minor": "",
            "gradyear": "2017",
            "onlineinfo": "www.utexas.edu"
        }
    ]
}

var github_prefix = "https:\/\/github.com\/scottnm\/"
var projects = {
    "Java": [
        {
            "title":"Huffman Compression",
            "dates":"Spring 2014",
            "description":"Implemented the Huffman compression algorithm to compress and decompress files",
            "link":github_prefix+"Huffman-Compression.git",
            "display":"true"
        },
        {
            "title":"Recursive Anagram Generator",
            "dates":"Spring 2014",
            "description":"Built a program that recursively finds all of the anagrams of a user-given string of text",
            "link":github_prefix+"Anagram-Solver.git",
            "display":"false"
        },
        {
            "title":"Binary Tree Builder",
            "dates":"Fall 2014",
            "description":"Built a program that builds a binary tree from a post-order traversal and outputs the breadth-first traversal of that tree",
            "link":github_prefix+"BinaryTreeBuilder.git",
            "display":"true"
        }
    ],
    "Python": [
        {
            "title":"Neural Network Pong",
            "dates":"Spring 2014",
            "description":"Built classic game Pong, with a trained neural network opponent",
            "link":github_prefix+"Neuroevolution-Pong.git",
            "display":"true"
        },
        {
            "title":"Neural Net NAND",
            "dates":"Spring 2014",
            "description":"Developed a neural network structure that evolved to represent a 3-bit NAND function",
            "link":github_prefix+"Neural-Network-NAND.git",
            "display":"false"
        },
        {
            "title":"Evolving Boss Battles",
            "dates":"Spring 2014",
            "description":"Developed a neural network and game environment to train a simple boss-character to compete against a player character, and researched the effects of different training methods and neural network structures",
            "link":github_prefix+"Evolving-Boss-Battles.git",
            "display":"true"
        },
        {
            "title":"Top Down Shooter (Game)",
            "dates":"Winter 2014",
            "description":"Developing the framework/basic mechanics for a topdown zombie shooter game. Currently only in the prototyping phase, but mechanics such as walking, turning, shooting, reloading, collision, and enemy generation have already been implemented",
            "link":github_prefix+"itchnscratch.git",
            "display":"true"
        }
    ],
    "C++": [
        {
            "title": "Space Raiders (Game)",
            "dates": "Spring 2015",
            "description":"Using a c++ ncurses library, developed a simple text-based form of the game Space Invaders, called Space Raiders. Implemented simple mechanics such as collisions, win-lose conditions, and a simple enemy AI.",
            "link":github_prefix+"Space-Raiders.git",
            "display":"true"
        }
    ]
}

projects.display = function(){
    for(LANG in projects){
        var language = projects[LANG];
        for(PROJ in language){
            /* iterate through each project */
            var project = language[PROJ];
            if(project.display == "true"){
                /* append the project to the website */
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
                formattedTitle = formattedTitle.replace("href=\"#\"", "href=\""+project.link+"\"");
                var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);
            }

        }   
    }
}

function displayWork(){
    /* append all of the jobs */
    for(job in workExperience){
        curr_job = workExperience[job];
        if(curr_job.display == "true"){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", curr_job.employer);
            var formattedJobTitle = HTMLworkTitle.replace("%data%", curr_job.position);
            var formattedJob = formattedEmployer + " " + formattedJobTitle;
            $(".work-entry:last").append(formattedJob);
            var formattedDate = HTMLworkDates.replace("%data%", curr_job.dates);
            $(".work-entry:last").append(formattedDate);
            var formattedLocation = HTMLworkLocation.replace("%data%", curr_job.location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", curr_job.description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

var internationalizeButton = "<button id=\"internationalize_button\">Internationalize</button>";

function inName(){
    console.log(document.getElementById("internationalize_button").innerHTML);

    var newName;
    var oldName = bio.name;
    var space_pos = oldName.indexOf(" ");

    if(!internalized){
        document.getElementById("internationalize_button").innerHTML = "Englishize";
        newName = oldName.slice(0, space_pos+1) + oldName.slice(space_pos+1).toUpperCase();
    }
    else{
        document.getElementById("internationalize_button").innerHTML = "Internationalize";
        newName = oldName.slice(0, space_pos+1) + oldName.slice(space_pos+1).toLowerCase();
        newName = newName.slice(0, space_pos+1) + newName[space_pos+1].toUpperCase() + newName.slice(space_pos+2);
    }

    //document.getElementById("name").innerHTML = newName;

    bio.name = newName;
    internalized = !internalized;

    return newName;
};

/* code that needs to run when the web page launches */
var internalized = false;
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

/* displaying header information */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
bio.displayContacts();
$("#header").append(HTMLbioPic.replace("%data%", bio.picture_URL));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message)); 
bio.displaySkills();

/* meat of the resume */
displayWork();
projects.display();


$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

//$("#mapDiv").append(googleMap);


