
  //**************
//      BIO
 //**************

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
   "skills":["html","JavaScript","css","c#","photoshop"],
  "biopic": 'images/NOOR.jpg',

display: function(){
var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

 var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


 $('#header').prepend(formattedName + formattedRole);
 $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
   formattedGithub + formattedTwitter + formattedLocation);
 $('#header').append(formattedBioPic);
 $('#header').append(formattedWelcomeMessage);

 if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
     bio.skills.forEach(function (skill) {
       var formattedBioSkills =HTMLskills.replace('%data%', skill);
       $('#skills').append(formattedBioSkills);



});
}

}
};

bio.display();


  //**************
//      WORK
 //**************

var work = {

"jobs": [
    {  "employer": 'IPS',
      "title": 'Data Entry and clerk',
      "location": 'Khobar',
      "dates": 'jan 2016 - Octobar 2017',
      "description": 'admistration assistent ',
     },

     {  "employer": 'aqa tots swim school',
        "title": 'front desk',
        "location": 'riyadh',
        "dates": 'currently',
        "description": 'custmer service',

      },
    ],

display: function (){
if (work.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function (job) {

var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",job.employer);
var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%",job.title);
var formattedEmployerTitle =formattedHTMLworkEmployer + formattedHTMLworkTitle;
var formattedHTMLworkDates = HTMLworkDates.replace("%data%",job.dates);
var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%",job.location);
var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%",job.description);

$ ('.work-entry:last').append(formattedHTMLworkEmployer);
$ ('.work-entry:last').append(formattedHTMLworkTitle);
$ ('.work-entry:last').append(formattedHTMLworkDates);
$ ('.work-entry:last').append(formattedHTMLworkLocation);
$ ('.work-entry:last').append(formattedHTMLworkDescription);


  });
}
}
};

work.display();



  //**************
//     PROJECTS
 //**************


var projects = {
"projects": [
      {  "title": 'ICoach  App ( An android Application )',
        "dates": '2014)',
        "description": 'It is an application to provide the Academic Students to organize working and studying time, giving advices and information to help them know how to improve their grades at the school also it gives them a proposed strategic plan for the semester .its like an electronic book contain of regulations and instructions of the academic path at Tabuk university .',
        "images": ['images/197x148.gif'],
      },
    ],

display: function (){

   if (projects.projects.length > 0) {
      $('#projects').append(HTMLprojectStart);
      projects.projects.forEach(function (project) {
console.log(project);
 var formattedprojectTitle =HTMLprojectTitle.replace('%data%',project.title);
 var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
 var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);

 $(".project-entry:last").append(formattedprojectTitle);
 $(".project-entry:last").append(formattedDates);
 $(".project-entry:last").append(formattedDescription);


   if (project.images.length > 0) {
    project.images.forEach(function (image) {

var formattedImage = HTMLprojectImage.replace('%data%',project.images[0]);
      $('.project-entry:last').append(formattedImage);
   });
 }

      });
   }


    }
    };

projects.display();



  //**************
//    EDUCATION
 //**************


education = {
   'schools': [
     {  "name": 'Tabuk University',
      "degree": 'BA',
      "dates": '2014',
      'location': 'Tabuk,Saudi Arabia',
      "majors": ['computer science'],
   },
 ],
   "onlineCourses": [
     {
      'title': 'Front End Web Developer Nanodegree',
      'school': 'Udacity',
      'dates': '2017',
      'url': "https://www.udacity.com/nanodegree",
   },
 ],

display: function(){
  if (education.schools.length > 0) {
$("#education").append(HTMLschoolStart);
education.schools.forEach(function (school) {

  var formattedSchoolName =HTMLschoolName.replace('%data%', school.name);
  var formattedSchoolDegree =HTMLschoolDegree.replace('%data%', school.degree);
  var formattedSchoolNameDegree =formattedSchoolName +formattedSchoolDegree;
  var formattedSchoolDates =HTMLschoolDates.replace('%data%', school.dates);
  var formattedSchoolLocation =HTMLschoolLocation.replace('%data%', school.location);

$('.education-entry:last').append(formattedSchoolName,formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);

  if (school.majors.length > 0) {
     school.majors.forEach(function (major) {
   var formattedSchoolMajor =HTMLschoolMajor.replace('%data%',major);
$('.education-entry:last').append(formattedSchoolMajor);

  });
}


if (education.onlineCourses.length > 0){
$(".education-entry:last").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function (onlineCourse) {

  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
  var formattedOnlineTitleSchool =formattedOnlineTitle +formattedOnlineSchool;
  var formattedOnlineCourseDates =HTMLonlineDates.replace("%data%", onlineCourse.dates);
  var formattedOnlineUrl =formattedOnlineTitleSchool.replace("#", onlineCourse.url);

$(".education-entry:last").append(formattedOnlineTitle,formattedOnlineSchool, formattedOnlineCourseDates,formattedOnlineUrl);
     });
 }

});
 }

 }
  };

education.display();


  //**************
//      MAP
 //**************

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);



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






//var formattedEmployerTitle =formattedEmployer + formattedTitle;

  //var formattedSchoolNameDegree =formattedSchoolName +formattedSchoolDegree;

//var formattedOnlineTitleSchool =formattedOnlineTitle +formattedOnlineSchool;
