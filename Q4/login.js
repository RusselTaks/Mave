<html>
<head>
<title>Login</title>
<script language="">
	function validate(form){
		if(form.username.value.length==0){
			alert("Enter username!");
			form.username.focus();
			return false;
		}
		if(form.userpassword.value.length==0){
			alert("Enter password");
			form.userpassword.focus();
			return false;

		return true;
	}
</script>
</body>
<body background="T2.jpg" link="#000" alink="#017bf5" vlink="#000">
<body>
<h1>Login</h1>
<form method="post" action="members.html" onsubmit="return validate(this)">
<p>User Name: <input type="text" name="Marvellous"></p>
<p>Password: <input type="password" name="Marve@2001"></p>
<p><input type="Submit" value="Login"></p>
</form>
</body>
</html>
