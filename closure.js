function parent() {
  var innerVariable = "Go to your room!";

  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
//  console.log(childe());
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();
