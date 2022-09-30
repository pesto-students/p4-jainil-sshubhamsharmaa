//Parenthesis Checker

let expression = "([{}{)({})})}])";

console.log(paranthesisChecker(expression));
function paranthesisChecker(expression) {
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    var x = expression[i];
    if (x == "(" || x == "{" || x == "[") {
      stack.push(x);
    }
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "}" || check == "]") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == ")" || check == "]") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "}" || check == ")") return false;
        break;
    }
  }
  return stack.length == 0;
}
