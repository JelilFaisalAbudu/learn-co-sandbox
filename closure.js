function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();
myScope; // returns [function]
console.log(myScope()); // returns the value in the nested function - innerScope()