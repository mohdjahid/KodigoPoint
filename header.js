$('header').html("<nav class='navbar main-navbar'>"+
	"<div class='container-fluid'>"+
	    "<div class='navbar-header'>"+
	    	"<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#KodigoNavBar' aria-expanded='false'>"+
		        "<span class='sr-only'>Toggle navigation</span>"+
		        "<span class='icon-bar'></span>"+
		        "<span class='icon-bar'></span>"+
		        "<span class='icon-bar'></span>"+
			"</button>"+

			"<a class='navbar-brand' href='#'>"+
				"<img src='kodigopoint-logo.png' class='logo-size'>"+
			"</a>"+
		"</div>"+
		"<div class='collapse navbar-collapse' id='KodigoNavBar'>"+
			"<ul class='nav navbar-nav navbar-right'>"+
				"<li class='active'><a href='#'>Home <span class='sr-only'>(current)</span></a></li>"+
				"<li><a href='#'>Q/A</a></li>"+
				"<li><a href='#'>Test</a></li>"+
				"<li><a href='#'>Interview</a></li>"+
			"</ul>"+
	    "</div>"+
	"</div>"+
"</nav>"+
"<nav class='navbar menubar'>"+
	"<div class='container-fluid'>"+
	    "<div class='navbar-header'>"+
			"<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#KodigoMenuBarLeft' aria-expanded='false'>"+
				"<span class='sr-only' style='border:1px solid white;'>Toggle navigation</span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
			"</button>"+
			"<button type='button' class='navbar-toggle collapsed pull-left' data-toggle='collapse' data-target='#KodigoMenuBarRight' aria-expanded='false'>"+
				"<span class='sr-only' style='border:1px solid white;'>Toggle navigation</span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
				"<span class='icon-bar' style='border:1px solid white;'></span>"+
			"</button>"+
	  	"</div><!--.navbar-collapse -->"+
	    "<div class='collapse navbar-collapse ' id='KodigoMenuBarLeft'>"+
			"<ul class='nav navbar-nav'>			        "+
		        "<li class='dropdown'>"+
					"<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Programming <span class='caret'></span></a>"+
					"<ul class='dropdown-menu'>"+
						"<li><a href='#'>C</a></li>"+
			            "<li><a href='#'>Cpp</a></li>"+
			            "<li><a href='#'>Core Java</a></li>"+
			        "</ul>"+
		        "</li>"+
	        	"<li class='dropdown'>"+
			        "<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Web Development <span class='caret'></span></a>"+
			        "<ul class='dropdown-menu'>"+
			            "<li><a href='#'>HTML</a></li>"+
			            "<li><a href='#'>CSS</a></li>"+
			            "<li><a href='#'>Bootstrap</a></li>"+
			            "<li><a href='#'>JavaScript</a></li>"+
			            "<li><a href='#'>Jquery</a></li>"+
			            "<li><a href='#'>JSON</a></li>"+
					"</ul>"+
		        "</li>"+
				"<li class='dropdown'>"+
					"<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Java Technology <span class='caret'></span></a>"+
			        "<ul class='dropdown-menu'>"+
			            "<li><a href='#'>JSP</a></li>"+
			            "<li><a href='#'>Java Servlet</a></li>"+
			            "<li><a href='#'>Spring</a></li>"+
			            "<li><a href='#'>Hybernate</a></li>"+
			            "<li><a href='#'>JDBC</a></li>"+
			        "</ul>"+
		        "</li>"+
				"<li class='dropdown'>"+
		          "<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Databases <span class='caret'></span></a>"+
					"<ul class='dropdown-menu'>"+
			            "<li><a href='#'>MY SQL</a></li>"+
			            "<li><a href='#'>Oracle</a></li>"+
					"</ul>"+
		        "</li>"+
			"</ul>"+
			"<form class='navbar-form navbar-right' action='https://www.google.co.in/search?' method='get' id='search'>"+
		        "<div class='form-group'>"+
					"<input class='form-control' placeholder='Search in KodigoPoint' type='text' name='q'  required />"+
					"<input class='form-control' placeholder='Search in KodigoPoint' type='text' name='q' value='PrologAcademy.com&hellip;' style='display:none' />"+
		        "</div>"+
		        "<div class='form-group'>"+
			        "<button type='submit' class='btn btn-default btn-block'>"+
			        	"<span class='glyphicon glyphicon-search' aria-hidden='true'></span>"+
			        "</button>"+
		        "</div>"+
			"</form>"+
	    "</div>"+
	"</div>"+
"</nav>");