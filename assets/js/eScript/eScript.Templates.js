function createPage(title, ishome, content) {
	// Head Node
	$('<title/>',{'text': title}).appendTo('head');
	///Styles
	
	// Headbar Nav Node
	    $('<nav/>', {
	    	'id':'headbar',
		    'class':'navbar navbar-default headbar',
		    'role':'navigation',
		    'html': "<div class='navbar-header headbar-header'>" + 
                "<a class='headbar-brand navbar-brand' href='#'>" +
                    "<img src='http://assets.tfsthiago1112.net/img/Logo/Logo_TFSThiago1112.svg' width='38px' />TFSThiago1112" +
                "</a>" +
            "</div>",
		}).appendTo('body');
	//Generate Navbar
	$('<nav/>', {
		'class':'navbar navbar-default',
		'style':'margin-bottom: 0px;',
		'html':"<div class='container-fluid'>"+
	                "<div class='navbar-header'>"+
	                    "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-site'>"+
	                        "<span class='sr-only'>Toggle navigation</span>"+
	                        "<span class='icon-bar'></span>"+
	                        "<span class='icon-bar'></span>"+
	                        "<span class='icon-bar'></span>"+
	                    "</button>"+
	                    "<a class='navbar-brand' href='#'>TFSThiago1112</a>"+
	                "</div>"+
	                "<div class='collapse navbar-collapse' id='navbar-site'>"+
	                    "<ul id='navigation-left' class='nav navbar-nav'/>"+
	                    "<ul id='navigation-right' class='nav navbar-nav navbar-right'/>"+
	                "</div>"+
	            "</div>"
	}).appendTo('body');
	$('<li/>', {'class':'active', 'html':"<a href='#'>Home</a>"}).appendTo('#navigation-left');
	$('<li/>', {'class':'', 'html':"<a href='#'>About me</a>"}).appendTo('#navigation-left');
	$('<li/>', {
		'class':'dropdown',
		'html':"<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>Projects <span class='caret'></span></a>"+
                            "<ul class='dropdown-menu' role='menu'>"+
                                "<li><a href='#'>ePDV</a></li>"+
                                "<li><a href='#'>eTechno</a></li>"+
                                "<li><a href='#'>Tecnocraft</a></li>"+
                                "<li><a href='#'>eLibrary</a></li>"+
                                "<li><a href='#'>eSite</a></li>"+
                                "<li><a href=''>Comming Soon</a></li>"+
                            "</ul>"
	}).appendTo('#navigation-left');
	//Jumbotron Node
	if (ishome == true) {
		$('<div/>', {
			'class':'jumbotron',
			'html':"<div class='row'>"+
                "<div class='col-md-10'>"+
                    "<h1>TFSThiago1112</h1>"+
                    "<p>My development portfolio</p>"+
                "</div>"+
                "<div class='col-md-2'>"+
                    "<img src='http://assets.tfsthiago1112.net/img/Logo/Logo_TFSThiago1112.svg' width='200px' />"+
                "</div>"+
            "</div>"
		}).appendTo('body');
	}
	//News Node
	//Footer Node
};