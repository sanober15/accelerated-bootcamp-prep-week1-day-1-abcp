function parent() {
  var innerVariable = "Go to your room!";
  //console.log(inaccessible)
  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return console.log(innerVariable);
  }
//  console.log(childe());
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();
