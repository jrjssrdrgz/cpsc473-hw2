
var createPerson = (function() {

  function PersonControl()
  {
    var add_element = document.getElementById("search_id");

    // the event handler for the Add button
    add_element.addEventListener("click", function(event)
  {
    // clear the name and the table
    test.model.Person.empty();
    var lastName = document.getElementById("last_name_id").value;

    // search for that student's information
    for(var i = 0; i < studentList.length; i++)
    {
      if(lastName == studentList[i].last)
      {
        var human = new test.model.Person(studentList[i].first, lastName, studentList[i].course, studentList[i].gpa);
        human.add(human);
      }
    }

    // create the view
    var list_View = new test.view.ListView(human.getAllPerson());

  });

  }

  window.addEventListener('load', function(event) {
    PersonControl();
  });

  return createPerson;

})();

var studentList = new Array();
S = {last:"Sunderland", first: "James", course:["Art","History","Calculus","Psychology", "Japanese"], gpa:[2.8, 3.0, 3.1, 2.7, 3.5], tag:0};
T = {last:"Mason", first: "Harry", course:["English","History","Creative Writing","Art", "Child Development"], gpa:[3.5, 2.9, 3.5, 3.0, 2.9], tag:1};
A = {last:"Queen", first: "Oliver", course:["PE","History","Calculus","Russian", "Martial Arts"], gpa:[3.0, 2.5, 2.0, 3.1, 3.5], tag:2};
R = {last:"Scott", first: "Michael", course:["Management","History","Finance","Psychology", "English"], gpa:[2.8, 2.8, 3.1, 3.5, 2.7], tag:3};

studentList.push(S,T,A,R);

// empty everything on the table
function emptyTable() {
  var table_node = document.getElementById("myTable");
  while(table_node.childElementCount > 1){
    table_node.removeChild(table_node.lastChild);
  }
}

function populateTable(stud, tag) {
  emptyTable();
  tag = tag.slice(14);

  for ( var i = 0; i < stud[tag].count(); i++)
  {
    var tableRow = document.createElement('tr');
    var courseNode = document.createElement('td');
    var courseInfo = document.createTextNode(stud[tag].getCourse(i));
    var gradeNode = document.createElement('td');
    var gradeInfo = document.createTextNode(stud[tag].getGPA(i));

    courseNode.appendChild(courseInfo);
    gradeNode.appendChild(gradeInfo);
    tableRow.appendChild(courseNode);
    tableRow.appendChild(gradeNode);

    document.getElementById("myTable").appendChild(tableRow);
    document.getElementById("studentGradeID").innerHTML = ("Grades for " + stud[tag].getString() + ":");

  }
}
