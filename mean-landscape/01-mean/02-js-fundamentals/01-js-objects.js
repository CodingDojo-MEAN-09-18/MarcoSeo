// 30 minutes max
// 30 minutes max

function myStudent(){
    students.forEach(function(student) {
        console.log("Name: " + student.name + ", Cohert: " + student.cohort)
    })
}
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

myStudent();


function myUser(){
    console.log("EMPLOYEES")
    for(var i = 0; i < users.employees.length; i++){

        var fname = users.employees[i].first_name;
        var lname = users.employees[i].last_name;
        var name = fname + lname;

        console.log((i+1) + " - " + lname + ", " + fname + " " + name.length);
    }
    console.log("MANAGERS")
    for(var i = 0; i < users.managers.length; i++){

        var fname = users.managers[i].first_name;   
        var lname = users.managers[i].last_name;
        var name = fname + lname;

        console.log((i+1) + " - " + lname + ", " + fname + " " + name.length);
    }

}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 
 myUser();