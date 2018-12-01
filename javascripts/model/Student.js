// A student could have more than one grade, so it will need
// to be added externally.
// IE.: use a function constructor... takes in a Student, a num of grades, and grades?)

test = (function() {
  var student_set = new Array();

  function Student(fn,ln) {
    this.first_name = fn;
    this.last_name = ln;
  }
  //
  Student.prototype.getString = function() {
    return this.first_name + " " + this.last_name;
  }
  //
  Student.prototype.getAllStudent = function() {
    return student_set;
  }
  //
  /*Person.prototype.add = function(s_obj) {
    student_set.push(s_obj);
    // console.log(student_set);
  }
  //*/
  Student.prototype.searchLastName(ln) = function() {
    return student_set.last_name(ln);
  }

  if (window.testApp == undefined) {
    window.testApp = {};
  }
  //
  if (window.testApp.model == undefined) {
    window.testApp.model = {};
  }

  window.testApp.model.Student = Student;

  return window.testApp;
})();
