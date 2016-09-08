<!DOCTYPE html>
<html lang="zh-cn">
    <head>
        <meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<title>Bootstrap 101 Template</title>

    	<!-- Bootstrap -->
	    <link href="css/bootstrap.min.css" rel="stylesheet">

	    <link href="fonts/REIMU-webfont/stylesheet.css" rel="stylesheet">

	    <link href="css/style.css" rel="stylesheet">

    	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
	    <![endif]-->
	</head>
	<body>
		<div class="row">
			<div class="container">
				<div class="music col-xs-12 col-sm-8 col-sm-push-2 col-md-4 col-md-push-4">
					<i class="glyphicon glyphicon-stop" id="btn"></i>
					<i class="glyphicon glyphicon-forward" id="forward"></i>
				</div>
			<!--	<h1 class="col-xs-12 col-sm-8 col-sm-push-2 col-md-4 col-md-push-4" id="js_mTxt">
					TEST
				</h1> -->
			</div>
		</div>
		
		<audio id="player" src=""></audio>


	    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
	    <!-- Include all compiled plugins (below), or include individual files as needed -->
	    <script src="js/bootstrap.min.js"></script>
	    <!-- <script src="js/script.js"></script> -->
	    <script src="js/player.js"></script>
	</body>
</html>