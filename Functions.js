function sidebar() {
  var checkBox = document.getElementById("Test-check");
  if (checkBox.checked == true) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "0";
  }
}

function CheckboxCheck() {
  var checkBox = document.getElementById("Test-check");
  if (checkBox.checked == true) {
    document.getElementById("Test-check").checked = false;
  }
}
