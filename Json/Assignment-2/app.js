var Person = [
  {
    firstName: "Wes1",
    lastName: "Bos1",
    Dob: "10-03-1990"
  },
  {
    firstName: "Dev1",
    lastName: "Ed1",
    Dob: "14-04-1993"
  },
  {
    firstName: "John1",
    lastName: "Mark1",
    Dob: "20-10-1997"
  },
  {
    firstName: "John1",
    lastName: "Evans1",
    Dob: "10-03-1990"
  },
  {
    firstName: "Arthur1",
    lastName: "Evans1",
    Dob: "14-04-1993"
  },
  {
    firstName: "Wes2",
    lastName: "Bos2",
    Dob: "10-03-1990"
  },
  {
    firstName: "Dev2",
    lastName: "Ed2",
    Dob: "14-04-1993"
  },
  {
    firstName: "John2",
    lastName: "Mark2",
    Dob: "20-10-1997"
  },
  {
    firstName: "John2",
    lastName: "Evans2",
    Dob: "10-03-1990"
  },
  {
    firstName: "Arthur2",
    lastName: "Evans2",
    Dob: "14-04-1993"
  },
  {
    firstName: "Wes3",
    lastName: "Bos3",
    Dob: "10-03-1990"
  },
  {
    firstName: "Dev3",
    lastName: "Ed3",
    Dob: "14-04-1993"
  },
  {
    firstName: "John3",
    lastName: "Mark3",
    Dob: "20-10-1997"
  },
  {
    firstName: "John3",
    lastName: "Evans3",
    Dob: "10-03-1990"
  },
  {
    firstName: "Arthur3",
    lastName: "Evans3",
    Dob: "14-04-1993"
  },
  {
    firstName: "Arthur4",
    lastName: "Evans3",
    Dob: "14-04-1993"
  }
];

if (Person.length % 5 == 0) {
  var pagination_length = Person.length / 5;
} else {
  var pagination_length = Math.floor(Person.length / 5) + 1;
}
console.log(pagination_length);

// Pagination
for (i = 0; i < pagination_length; i++) {
  var x = document.createElement("A");
  x.setAttribute("href", "#");
  x.id = "a1";
  var t = document.createTextNode(i + 1);
  x.appendChild(t);
  var y = document.getElementsByClassName("pagination")[0].appendChild(x);
  //console.log(y);
  x.addEventListener("click", function() {
    var index = (document.getElementById("a1").value = this.innerHTML);
    //  document.getElementsByTagName("tr")[1].remove();
    //  document.getElementsByTagName("tr")[2].remove();
    //  document.getElementsByTagName("tr")[3].remove();
    //  document.getElementsByTagName("tr")[4].remove();
    // document.getElementsByTagName("tr")[5].remove();
    document.getElementsByTagName("tbody")[0].remove();

    // console.log(index);
    table_Row(index);
  });
}

//Next Table

function table_Row(index) {
  var loop_start = 5 * index;
  var loop_end = loop_start - 5;
  var tBody = document.createElement("tbody");
  for (var i = loop_end; i < loop_start; i++) {
    var bRow = document.createElement("tr");
    for (var j = 0; j < col.length; j++) {
      var td = document.createElement("td");
      td.innerHTML = Person[i][col[j]];
      bRow.appendChild(td);
    }
    tBody.appendChild(bRow);
    table.appendChild(tBody);
  }
}

// create table
var table = document.createElement("table");
table.classList.add("table");
table.classList.add("table-border");
table.classList.add("table-hover");
table.classList.add("m-5");
table.style.width = "50%";
table.setAttribute("border", "1");
table.setAttribute("cellspacing", "0");
table.setAttribute("cellpadding", "3");

var col = [];
for (var i = 0; i < Person.length; i++) {
  for (var key in Person[i]) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
}

// table head
var thead = document.createElement("thead");
thead.classList.add("thead-dark");
var hRow = document.createElement("tr");
for (var i = 0; i < col.length; i++) {
  var th = document.createElement("th");
  th.innerHTML = col[i];
  hRow.appendChild(th);
}
thead.appendChild(hRow);
table.appendChild(thead);

//table body
var tBody = document.createElement("tbody");
for (var i = 0; i < 5; i++) {
  var bRow = document.createElement("tr");
  for (var j = 0; j < col.length; j++) {
    var td = document.createElement("td");
    td.innerHTML = Person[i][col[j]];
    bRow.appendChild(td);
  }

  tBody.appendChild(bRow);
  table.appendChild(tBody);
}
//add data
var container = document.getElementById("personDetails");
container.innerHTML = "";
container.appendChild(table);
