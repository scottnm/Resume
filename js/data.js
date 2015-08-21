var contactInfo = {
    'location': 'Austin, TX',
    'mobile': '(214) 769-0461',
    'email': 'scottnmunro@gmail.com',
    'github': 'scottnm'
};

var overview = {
    'text': 'I am an aspiring Software Engineer and Game Developer ' +
            'as well as a full time Computer Science student at the ' + 
            'University of Texas at Austin. Most of the projects listed ' +
            'on this resume can be found on my Github!',
    'skills': [
        'Object Oriented Programming',
        'Game Development',
        'Frontend Web Development',
        'Teaching'
    ]
};

var work = {
    'SWE Intern':{
        'position': 'Software Engineering Intern',
        'employer': 'Google',
        'dates': 'June 2015 - August 2015',
        'location': 'Mountain View, CA',
        'description': 'Worked on Google\'s mobile development team, and ' +
                       'helped develop technology for the Web-based Google ' + 
                       'Play store.',
        'display': 'true'
    },

    'Pod Mentor':{
            'position': 'Freshman Mentor',
            'employer': 'University of Texas at Austin',
            'dates': 'August 2014 - Present',
            'location': 'Austin, TX',
            'description': 'Mentored and instructed a group of 20 Computer ' + 
                           'Science Freshman in the tools and resources ' +
                           'available to them. Also provided tutoring for ' +
                           'introductory Computer Science courses.',
            'display': 'true'
    }
};

var githubPrefix = 'https:\/\/github.com\/scottnm\/'
var projects = {
    'Java': [
        {
            'title': 'Huffman Compression',
            'dates': 'Spring 2014',
            'description': 'Implemented the Huffman compression algorithm to ' +
                          'compress and decompress files',
            'link': '#',
            'display': 'true',
            'extern': 'false'
        },
        {
            'title': 'Go-Fish Probability Simulation',
            'dates': 'Spring 2015',
            'description': 'Created a simulation of GoFish that displays the ' +
                           'probabilities of a player\'s guess being correct ' +
                           'allowing for a player to make more educated guesses',
            'link': 'http://github.com/gordineerandrew/Go-Fish',
            'display': 'true',
            'extern': 'true'
        },
        {
            'title': 'Recursive Anagram Generator',
            'dates': 'Spring 2014',
            'description': 'Built a program that recursively finds all of ' +
                           'the anagrams of a user-given string of text',
            'link': '#',
            'display': 'true',
            'extern': 'false'
        },
        {
            'title': 'Binary Tree Builder',
            'dates': 'Fall 2014',
            'description': 'Built a program that builds a binary tree from a ' +
                           'post-order traversal and outputs the breadth-' +
                           'first traversal of that tree',
            'link': githubPrefix + 'BinaryTreeBuilder.git',
            'display': 'true',
            'extern': 'true'
        }
    ],
    'Python': [
        {
            'title': 'Neural Network Pong',
            'dates': 'Spring 2014',
            'description': 'Built classic game Pong, with a trained neural ' +
                           'network opponent',
            'link': githubPrefix + 'Neuroevolution-Pong.git',
            'display': 'true',
            'extern': 'true'
        },
        {
            'title': 'Neural Net NAND',
            'dates': 'Spring 2014',
            'description': 'Developed a neural network structure that ' +
                           'evolved to represent a 3-bit NAND function',
            'link': githubPrefix + 'Neural-Network-NAND.git',
            'display': 'false',
            'extern': 'true'
        },
        {
            'title': 'Evolving Boss Battles',
            'dates': 'Spring 2014',
            'description': 'Developed a neural network and game environment ' +
                           'to train a simple boss-character to compete ' +
                           'against a player character, and researched the ' +
                           'effects of different training methods and neural ' +
                           'network structures',
            'link': githubPrefix + 'Evolving-Boss-Battles.git',
            'display': 'true',
            'extern': 'true'
        },
        {
            'title': 'Top Down Shooter (Game)',
            'dates': 'Winter 2014',
            'description': 'Developing the framework/basic mechanics for a ' +
                           'topdown zombie shooter game. Currently only in ' +
                           'the prototyping phase, but mechanics such as ' +
                           'walking, turning, shooting, reloading, ' +
                           'collision, and enemy generation have already ' +
                           'been implemented',
            'link': githubPrefix + 'itchnscratch.git',
            'display': 'true',
            'extern': 'true'
        }
    ],
    'C++': [
        {
            'title': 'Space Raiders (Game)',
            'dates': 'Spring 2015',
            'description': 'Using a c++ ncurses library, developed a simple ' +
                           'text-based form of the game Space Invaders, ' +
                           'called Space Raiders. Implemented simple ' +
                           'mechanics such as collisions, win-lose ' +
                           'conditions, and a simple enemy AI.',
            'link': githubPrefix + 'Space-Raiders.git',
            'display': 'true',
            'extern': 'true'
        }
    ],
    
    'Javascript' : [
    ]
};