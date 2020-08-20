var ShowGen = 1;
function CheckHideGen() {
  var checkBox = document.getElementById("HideGen");
  if (checkBox.checked == true){
    ShowGen = 0;
  } else {
	ShowGen = 1;
  }
}