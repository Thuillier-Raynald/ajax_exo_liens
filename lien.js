var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function(e) {
	loadPage('lien1.php');
});

btn2.addEventListener('click', function(e) {
	loadPage('lien2.php');
});

btn3.addEventListener('click', function(e) {
	loadPage('lien3.php'); // erreur 404
});

function loadPage(page) {
	var content = document.getElementById('content')
	var xhr = new XMLHttpRequest(); 
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200) {
				content.innerHTML = xhr.response ;
			} else if (xhr.status == 404) {
				content.innerHTML = '<h2 style="color: red;">Page introuvable</h2>';
			} else {
				content.innerHTML = '<h2 style="color: red;">Une erreur non gérée est survenue</h2>';
			}
		}
	}
	xhr.open('GET', './' + page);
	xhr.send();
	
};
