function parent() {
  var innerVariable = "Go to your room!";
  
  return function childe() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
  console.log(inaccessible);
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();


