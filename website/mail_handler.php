
<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['message'];

		$to='vickel1993@hotmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo '<meta http-equiv="refresh" content="5;url=http://www.vickelleung.com">'; 
			echo "<h1>Your email was Sent Successfully! Thank you"." ".$name.", We will contact you shortly, the page will redirect to homepage within 5 seconds!</h1>";
			echo '<img src="img/tybye.jpg">';
			

		}
		else{
			echo "Oh no, something went wrong!";
		}
	}
?>