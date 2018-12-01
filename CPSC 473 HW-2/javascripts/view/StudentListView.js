test = (function() {

  function ListView(data)
  {
    console.log("data:" + data);
    this.root = document.getElementById("person_list_id");
    this.content = data;

    this.createChildNode();
  }

  ListView.prototype.createChildNode = function() {

    while(this.root.firstChild)
    {
      this.root.removeChild(this.root.firstChild);
    }

    var studentList = this.content;

    for(var i=0; i < this.content.length; i++)
    {
      var myNode = document.createElement('li');
      myNode.id = "li_Student_id_" + i;

      var nodeInfo = document.createTextNode(this.content[i].getString());
      myNode.appendChild(nodeInfo);

      document.getElementById("person_list_id").appendChild(myNode);


      document.getElementById("li_Student_id_" + i).onclick = function(){
        populateTable(studentList, this.id);
      };
    }
  }

  if(window.testApp == undefined) {
    window.testApp = {};
  }

  if(window.testApp.view == undefined) {
    window.testApp.view = {};
  }

  window.testApp.view.ListView = ListView;

  return window.testApp;

})();
