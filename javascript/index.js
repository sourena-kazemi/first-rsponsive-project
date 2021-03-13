var menu_btn = true;
var title = document.getElementsByClassName("header__title");
var body = document.getElementById("body")
var media = window.matchMedia("(max-width: 400px)")

function cancel(){
	document.getElementById("form").style.display="none";
	document.getElementById("email-sign-in").value ="";
	document.getElementById("password-sign-in").value ="";
	document.getElementById("email-sign-up").value ="";
	document.getElementById("password-sign-up").value ="";
	document.getElementById("username-sign-up").value ="";
	document.getElementById("email-sign-in-label").style.display="block";
	document.getElementById("email-sign-in").style.display="inline-block";
	document.getElementById("password-sign-in-label").style.display="block";
	document.getElementById("password-sign-in").style.display="inline-block";
	document.getElementById("email-sign-up-label").style.display="block";
	document.getElementById("email-sign-up").style.display="inline-block";
	document.getElementById("password-sign-up-label").style.display="block";
	document.getElementById("password-sign-up").style.display="inline-block";
	document.getElementById("username-sign-up-label").style.display="block";
	document.getElementById("username-sign-up").style.display="inline-block";
	document.getElementById("sign-up-title").style.display="block";
	document.getElementById("sign-in-title").style.display="block";

}
function sign_in(){
		document.getElementById("form").style.display="block";
		document.getElementById("email-sign-up-label").style.display="none";
		document.getElementById("email-sign-up").style.display="none";
		document.getElementById("password-sign-up-label").style.display="none";
		document.getElementById("password-sign-up").style.display="none";
		document.getElementById("username-sign-up-label").style.display="none";
		document.getElementById("username-sign-up").style.display="none";
		document.getElementById("sign-up-title").style.display="none";
}
function sign_up(){
		document.getElementById("email-sign-in-label").style.display="none";
		document.getElementById("email-sign-in").style.display="none";
		document.getElementById("password-sign-in-label").style.display="none";
		document.getElementById("password-sign-in").style.display="none";
		document.getElementById("sign-in-title").style.display="none";
		document.getElementById("form").style.display="block";
}

function support_form(){
	document.getElementById("online-support__box").style.display="block";
	document.getElementById("online-support__btn").style.display="none";
}
function support_close(){
	document.getElementById("online-support__box").style.display="none";
	document.getElementById("online-support__btn").style.display="block";
}

function menu(){
	if(menu_btn===true){
		if (media.matches){
			document.getElementById("header__menu").style.left="30%";
		}else {
			document.getElementById("header__menu").style.left="50%";
		}
		document.getElementById("row2").style.display="none";
		document.getElementById("row1").style.transform="rotate(45deg)";
		document.getElementById("row3").style.transform="rotate(-45deg)";
		document.getElementById("row1").style.position="absolute";
		document.getElementById("row3").style.position="absolute";

		title[0].style.display="none";
		document.getElementById("row1").style.backgroundColor="red";
		document.getElementById("row3").style.backgroundColor="red";
		document.getElementById("header__menu-btn").style.position="fixed";
		document.getElementById("row1").style.transition=".5s";
		document.getElementById("row2").style.transition=".5s";
		document.getElementById("row3").style.transition=".5s";

		document.getElementById("header__menu-btn").style.margin="1rem 0 0 .7rem";

		menu_btn=false;
	}
	else {
		title[0].style.display="block";
		document.getElementById("header__menu").style.left="100%";
		document.getElementById("row2").style.display="block";
		document.getElementById("row1").style.transform="rotate(0deg)";
		document.getElementById("row3").style.transform="rotate(0deg)";
		document.getElementById("row1").style.position="relative";
		document.getElementById("row3").style.position="relative";
		document.getElementById("header__menu-btn").style.margin=".7rem 0 0 .7rem";
		document.getElementById("header__menu-btn").style.position="relative";
		document.getElementById("row1").style.backgroundColor="black";
		document.getElementById("row3").style.backgroundColor="black";
		menu_btn=true;
	}

}
function menu_courses(){
	document.getElementById("header__menu").innerHTML= "<p class='menu-courses__back-btn' onclick='menu_courses_back()'>Back</p>" +
		"<ul class='menu-courses__title'>Web</ul>" +
		"<li class='menu-courses__item'>HTML</li>"+
		"<li class='menu-courses__item'>CSS</li>"+
		"<li class='menu-courses__item'>JavaScript</li>"+
		"<ul class='menu-courses__title'>C</ul>"+
		"<li class='menu-courses__item'>C</li>"+
		"<li class='menu-courses__item'>C++</li>"+
		"<li class='menu-courses__item'>C#</li>"+
		"<ul class='menu-courses__title'>Graphic</ul>"+
		"<li class='menu-courses__item'>Photo Shop</li>"+
		"<li class='menu-courses__item'>XD</li>"
}
function menu_courses_back(){
	document.getElementById("header__menu").innerHTML="<h4 class='menu__title' onclick='sign_up();menu()'>Sign up</h4>"+
		"<h4 class='menu__title' onclick='sign_in();menu()'>Sign in</h4>"+
		"<h4 class='menu__title'>Teachers</h4>"+
		"<h4 class='menu__title' id='menu_courses-btn' onclick='menu_courses()'>Courses</h4>"
}
function menu_about_back(){
	document.getElementById("header__menu").innerHTML="<h4 class='menu__title' onclick='sign_up();menu()'>Sign up</h4>"+
		"<h4 class='menu__title' onclick='sign_in();menu()'>Sign in</h4>"+
		"<h4 class='menu__title'>Teachers</h4>"+
		"<h4 class='menu__title' id='menu_courses-btn' onclick='menu_courses()'>Courses</h4>"+
		"<h4 class='menu__title' onclick='about()'>About Us</h4>"
}
function about(){
	document.getElementById("header__menu").innerHTML= "<p class='menu-courses__back-btn' onclick='menu_about_back()'>Back</p>" +
		"<h3 class='footer-about__title'>About Us</h3>"+
		"<p class='footer-about__text'>We Are a Team That<br> Provides Programming<br> Training For You and Strives<br> to Bring You to<br>The Best Level of Programming.</p>"
}