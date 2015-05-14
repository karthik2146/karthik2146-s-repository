<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>

<html lang="en"><object cotype="cs" id="cosymantecbfw_nf" style="width: 100%; height: 0px; display: block; position: absolute; z-index:99999; top:0px; left:0px;" fid="390821503"></object><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="http://getbootstrap.com/favicon.ico">

    <title>Rice Mill Application</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/cover.css" rel="stylesheet">
    <link href="css/application.css" rel="stylesheet">

   
  </head>
  
  
<body>

<div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand"></h3>
              <nav>
                <ul class="nav masthead-nav">
                  <li class="active"><a href="home">Home</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="inner cover">
            <h1 class="cover-heading">Prasanth Sanny Reddy Rice Mill </h1>
            <p class="lead"> A customized application for managing rice mill entities</p>
            
            <div class="login-container">
	            <form class="form-signin">
	        		<h2 class="form-signin-heading color-dark">Please sign in</h2>
	        		<label for="inputEmail" class="sr-only">Email address</label>
	        			<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
	       			 <label for="inputPassword" class="sr-only">Password</label>
	       			 	<input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
	       			 <div class="checkbox">
			          <label class="color-dark">
			            <input type="checkbox" value="remember-me"> Remember me
			          </label>
	        		</div>
	        		<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
	     		 </form>
      		 </div>
      		 
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p>Rice mill application footer </p>
            </div>
          </div>

        </div>

      </div>

    </div>
    
       <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <jsp:include page="parts/common_js.jsp"></jsp:include>
         
</body>
</html>
