<?php session_start();
if(isset($_POST['Submit'])) {
$youremail = 'bholland@performancegpa.com';
$fromsubject = 'performancegpa.com';
$fname = $_POST['fname'];
$mail = $_POST['mail'];
$subject = $_POST['subject']; 
$message = $_POST['message']; 
  $to = $youremail; 
  $mailsubject = 'Masage recived from'.$fromsubject.' Contact Page';
  $body = $fromsubject.'
  
  The person that contacted you is  '.$fname.'
   E-mail: '.$mail.'
   Subject: '.$subject.'
  
   Message: 
   '.$message.'
  
  |---------END MESSAGE----------|'; 
  mail($to, $subject, $body);
}
?> 
<script>
  window.location = "index.html";
</script>