function sidebar() {
  var checkBox = document.getElementById("Test-check");
  if (checkBox.checked == true) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "0";
  }
}

function dropdown() {
  var checkBox = document.getElementById("Dropdown-Check");
  if (checkBox.checked == true) {
    document.getElementById("dropdown-menu").style.transform = "rotate(90deg)";
  } else {
    document.getElementById("dropdown-menu").style.transform = "rotate(0deg)";
  }
}
