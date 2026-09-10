/*
-Find leadForm 
-Listen for submit 
-Recruiter submits form
-Run addLead
-Receive event information
-preventDefault()
-Page doesn't reload

*/

const leadForm = document.getElementById("leadForm"); //store leadForm
leadForm.addEventListener("submit", addLead); //listen for submit  and run addLead function
function addLead (event){ // Define addLead
    event.preventDefault(); //stop default action

    const companyName = document.getElementById("companyName").value; // get company name in the form
    const contactPerson = document.getElementById("contactPerson").value; //get contact person
    const jobTitle = document.getElementById("jobTitle").value; //get Job Title
    const phone = document.getElementById("phone").value; // get phone number
    const email = document.getElementById("email").value; //get email
    const sector = document.getElementById("sector").value; // get sector
    const location = document.getElementById("location").value; // get location
    const status = document.getElementById("status").value; // get status
    const source = document.getElementById("source").value; // get source
    const notes = document.getElementById("notes").value; //get notes
    const followUpDate = document.getElementById("followUpDate").value; //get follow-up Date 

    const lead = { //Create one lead record from the submitted form data.
      companyName: companyName, // store company name
      contactPerson: contactPerson, // store contact person
      jobTitle: jobTitle, // store jobTitle
      phone: phone, // store phone
      email: email, // store email
      sector: sector, //store sector
      location: location, // store location
      status: status, // store status
      source: source, //store source
      notes: notes, //store notes
      followUpDate: followUpDate, //store follou-up date
    };


}// End function