function click_cog(){
	document.getElementById("user_cog_id").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu-cog");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function click_menu(){
	document.getElementById("menu_id").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// $(document).ready(function() {
// 	$('#click').on('click', '.dropbtn', function() {
// 		document.getElementById('#user_cog_id').classList.toggle("show");
// 	});
// 	window.onclick=function(event) {
// 	  if (!event.target.matches('.dropbtn')) {
// 	    var dropdowns = document.getElementsByClassName("dropdown-menu");
// 	    var i;
// 	    for (i = 0; i < dropdowns.length; i++) {
// 	      var openDropdown = dropdowns[i];
// 	      if (openDropdown.classList.contains('show')) {
// 	        openDropdown.classList.remove('show');
// 	      }
// 	    }
// 	  }
// 	}
// });