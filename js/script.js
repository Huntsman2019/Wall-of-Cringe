//Get the button
var mybutton = document.getElementById("Backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var node = document.createElement("DIV");
  var node2= document.createElement("P")
  var textnode = document.createTextNode(document.getElementById("quotes").value);
  node2.appendChild(textnode);
  node.appendChild(node2);
  document.getElementById("main-content").appendChild(node);
  node2.className="quote";
  node2= document.createElement("P")
  textnode = document.createTextNode("-"+document.getElementById("names").value);
  node2.appendChild(textnode);
  node.appendChild(node2);
  document.getElementById("main-content").appendChild(node);
  node2.className="quoted-by";
  node.classList="col-12 col-sm-4";
}