function send_email()
{
	var email_address = "sayed2k7@gmail.com";
	var email_subject = document.getElementById("subject").value;
	var email_body = document.getElementById("message").value;

	if(email_subject=="")
	{
		email_subject = "Contact from Portfolio Website";
	}

	var url = "https://mail.google.com/mail/?view=cm&fs=1&to="+email_address+"&su="+email_subject+"&body="+email_body;
	window.location.href = url;

	//------------------------------//
	
	/*$("#btn_send_message").click(function() {
        $("<a>").prop({
            target: "_blank",
            href: url
        })[0].click();
    });*/
}
