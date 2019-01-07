function matchups() {
	var god1 = document.getElementById("god1-select");
	var god2 = document.getElementById("god2-select");

	var i = keys[god1.options[god1.selectedIndex].text];
	var j = keys[god2.options[god2.selectedIndex].text];

	document.getElementById("god1-result").innerHTML = moves[i][j];
	document.getElementById("god2-result").innerHTML = moves[j][i];
}