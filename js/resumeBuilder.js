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



var bio = {
  name: 'Nour Aljaber',
  role: 'Web developer',
  contacts: {
    mobile: 00966561016477,
    email: 'noory738@gmail.com',
    github: 'NourAljaber',
    twitter: '@nmj_0',
    location: 'Saudi Arabia',
  },
  welcomeMessage: 'Objective:Seeking a position in computer science fields utilizing my strong analytic and communication skills combined with a bachelor degree. Develop my skills and provide me with the necessary training to grow within the organization. "n/"Job target: Technicians and computer feileds . web developer .Organization.Public Relations.Banks.'
    // biopic: 'images.fry.jpg',
     display: function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//   var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

   $('#header').prepend(formattedName + formattedRole);
   $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
     formattedGithub + formattedTwitter + formattedLocation);
//   $('#header').append(formattedBioPic);
   $('#header').append(formattedWelcomeMessage);
 }
 };

 bio.display();

/* var education {
   schools: array of objects with
          name: string
          location: string
          degree: string
          majors: array of strings
          dates: string (works with a hyphen between them)
          url: string (optional)
     onlineCourses: array of objects with
          title: string
          school: string
          dates: string (works with a hyphen between them)
          url: string
     display: function
 }/*

//var formattedName= HTMLheaderName.replace("%"%data%"%"," Nour Al Jaber ");
//var role="Web developer";
//var formattedRole=HTMLheaderRole.replace("%%"%data%"%%",role);
//var formattedGeneric= HTMLcontactGeneric.replace("%contact%",mobile,email,location);   ???????
//$("#header").prepend(formattedName);
//$("#header").prepend(formattedRole);
//$("#topContacts").prepend(formattedGeneric); ?????
