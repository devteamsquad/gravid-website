import { useState } from "react";

const Subscribe = () => {
    
    
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/46236823/9f7b3ca9-adb2-4411-a2f8-5610b6d04524'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
              
            ],
            "context": {
                "pageUri": "www.Grav.id.com",
                "pageName": "messagerK"
            },
        }

        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.    
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }

        // Sends the request
        xhr.send(final_data)
        
    }
    
}

export default Subscribe;


{/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "45245560",
    formId: "09efefc5-a397-464c-855e-48f478164f0c"
  });
</script> */}
