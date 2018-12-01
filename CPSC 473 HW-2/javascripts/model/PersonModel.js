test = (function() {
  var person_set = new Array();

  function Person(fn, ln, course, grades, id) {
    this.first_name = fn;
    this.last_name = ln;
    this.courses = course;
    this.gpa = grades;
    this.tag = id;
  }

  // returns the full name of the Person
  Person.prototype.getString = function() {
    return this.first_name + " " + this.last_name;
  }

  // returns the list of all the Person objects created
  Person.prototype.getAllPerson = function() {
    return person_set;
  }

  // add the the new Person object to the Person set
  Person.prototype.add = function(person) {
    person_set.push(person);
  }

  // return the index of the person in the person set
  Person.prototype.Person = function(index) {
    return person_set[index];
  }

  // empty the list of persons
  Person.empty = function() {
    person_set = [];
  }

 // returns the amount of courses for this person
  Person.prototype.count = function() {
    return this.courses.length;
  }

  // return the course
  Person.prototype.getCourse = function(index) {
    return this.courses[index];
  }

  // return the student's gpa
  Person.prototype.getGPA = function(index) {
    return this.gpa[index];
  }

 // I'm not sure what the window.testApp ones are for but it seems I need them
  if(window.testApp == undefined) {
    window.testApp = {};
  }

  if(window.testApp.model == undefined) {
    window.testApp.model = {};
  }

  window.testApp.model.Person = Person;
  return window.testApp;
})();
