function sidebar() {
    var checkBox = document.getElementById("Test-check");
    if (checkBox.checked == true){
      document.getElementById("mySidenav").style.width = "250px";
} else {
  document.getElementById("mySidenav").style.width = "0";
}
  }