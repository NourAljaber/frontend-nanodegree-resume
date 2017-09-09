var bio = {
  "name": 'Nour Aljaber',
  "role": 'Web developer',
  "contacts": {
  "mobile": 00966561016477,
  "email": 'noory738@gmail.com',
  "github": 'NourAljaber',
  "twitter": '@nmj_0',
  "location": 'Saudi Arabia',
  },
  "welcomeMessage": 'Seeking a position in computer science fields utilizing my strong analytic and communication skills combined with a bachelor degree. Develop my skills and provide me with the necessary training to grow within the organization.',
   "skills":['html','JavaScript','css','c#','photoshop'],
  "biopic": 'images/fry.jpg',
}


//var display: function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

 var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// var formattedStartSkills=TMLskillsStart.replace("%data%", bio.??);  ????
// var formattedSkills=HTMLskills.replace("%data%", bio.skills);    ?????


 $('#header').prepend(formattedName + formattedRole);
 $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
   formattedGithub + formattedTwitter + formattedLocation);
 $('#header').append(formattedBioPic);
 $('#header').append(formattedWelcomeMessage);
 //$('#header').append(formattedStartSkills);
 //$('#header').append(formattedSkills);

};

//bio.display();



/*var education {
 "schools": [
      {  "name": 'Tabuk University',
        "location": 'Tabuk,Saudi Arabia',
        "degree": 'BA',
        "majors": ['computer science'],
        "dates": '8/6/2014',
        "url": 'string',

    },
      ]

      "onlineCourses": [
    {  title:'frontend-nanodegree',
      "school": 'string',
      "dates":' string (works with a hyphen between them)',
      "url": 'string',
  },
    ]
  };


var display: function (){}

//education.display();




var work {

"jobs": [
    {  "employer": 'IPS',
      "title": 'Data Entry and clerk',
      "location": 'Khobar',
      "dates": 'jan 2016 - Octobar 2017',
      "description": 'admistration assistent ',
     },

     {  "employer": 'aqa tots swim school'
        "title": 'front desk',
        "location": 'riyadh',
        "dates": 'currently',
        "description": 'custmer service',

      },
       ]
};

var display: function(){}
//work.display();




var projects{
"projects": [
      {  "title": 'string'
        "dates": 'string (works with a hyphen between them)'
        "description": 'string'
        "images": ['array with string urls']
      },
    ]
};


var display: function(){}
//projects.display();

*/



////////////////////////////////////////////////the end of the code



/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //var firstName = "Nour" ;
 //var age = 25 ;
 //console.log(firstName);

 //$("#main").append(" NOUR AL JABER ");

 //var awesomeThoughts = " I am Nour and i am awesome!" ;
 //onsole.log(awesomeThoughts);


// [string].replace([old],[new]);

//var email = "noory738@gmail.com";
//var newEmail=
//email.replace("gmail", "hotmail");
//console.log(email);
//console.log(newEmail);

//var awesomeThoughts = " I am Nour and i am awesome!" ;
//var funThoughts =
//awesomeThoughts.replace("awesome!", "Fun");
//$("#main").append(funThoughts);



//var formattedName= HTMLheaderName.replace("%"%data%"%"," Nour Al Jaber ");
//var role="Web developer";
//var formattedRole=HTMLheaderRole.replace("%%"%data%"%%",role);
//var formattedGeneric= HTMLcontactGeneric.replace("%contact%",mobile,email,location);   ???????
//$("#header").prepend(formattedName);
//$("#header").prepend(formattedRole);
//$("#topContacts").prepend(formattedGeneric); ?????
