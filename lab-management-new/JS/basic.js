
function divShow(str) {
	var btnN=Array(4);
	btnN=["section-2-1","section-2-2","section-2-3","section-2-4"];
	for (var i = 0; i < btnN.length; i++) {
		if (btnN[i]==str) {
			document.getElementById(btnN[i]).style.display="inline-block";
		}
		else
			document.getElementById(btnN[i]).style.display="none";
	}
	
}

function postData(ar) {
	if (ar.lengh == 0) {
		document.getElementById("test").innerHTML="";
		return;
	}
	else {
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange == function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("test").innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","test.php?brand=" + ar,true);
		xmlhttp.send();
	}
}
