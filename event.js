var variables_list = [];
var var_length;
var random_num;
var result;

function myfunction() {}

window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "Enter":
      variables_list.push(document.getElementById("input1").value);
      document.getElementById("input1").value = "";
      document.getElementById("disp_list").innerHTML = variables_list;
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);

function getresult() {
  console.log("clicked")
  console.log(random_num);
  console.log(var_length);
  var_length = variables_list.length;
  random_num = Math.round(Math.random(0, var_length) * var_length);
  result = variables_list[random_num];
  document.getElementById("answer").innerHTML = result;
  window.alert(result)

}
