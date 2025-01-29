<<<<<<< HEAD
/* Access references for the input and display zones */

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

/* Handle Form Submission */

form.addEventListener("submit" , (event: Event) =>{
     event.preventDefault(); // prevent page reload

     // Collect input values
     const firstName = (document.getElementById("first-name") as HTMLInputElement).value
     const lastName = (document.getElementById("last-name") as HTMLInputElement).value
     const emailAdress = (document.getElementById("email-address") as HTMLInputElement).value
     const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value
     const education = (document.getElementById("education") as HTMLInputElement).value
     const experience = (document.getElementById("experience") as HTMLInputElement).value
     const skills = (document.getElementById("skills") as HTMLInputElement).value   
     
     // Generate resume content dynamically

     const resumeHTML = `
       <h2><b>Editable Resume</b></h2>
       <h3>Personal Information</h3>
       <p><b>FirstName:</b><span contenteditable="true">${firstName}</span></p>
       <p><b>LastName:</b><span contenteditable="true">${lastName}</span</p>
       <p><b>Email:</b><span contenteditable="true">${emailAdress}</span</p>
       <p><b>Phone:</b><span contenteditable="true">${phoneNumber}</span</p>

       <h3>Education</h3>
       <p contenteditable="true">${education}</p>

       <h3>Experience</h3>
       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable="true">${skills}</p>
      
     `;

     // Display generated resume

     if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
     } else {
        console.error("The resume display is invalid.");
        
     }
=======
/* Access references for the input and display zones */

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

/* Handle Form Submission */

form.addEventListener("submit" , (event: Event) =>{
     event.preventDefault(); // prevent page reload

     // Collect input values
     const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
     const firstName = (document.getElementById("first-name") as HTMLInputElement).value
     const lastName = (document.getElementById("last-name") as HTMLInputElement).value
     const emailAdress = (document.getElementById("email-address") as HTMLInputElement).value
     const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value
     const education = (document.getElementById("education") as HTMLInputElement).value
     const experience = (document.getElementById("experience") as HTMLInputElement).value
     const skills = (document.getElementById("skills") as HTMLInputElement).value   

      // Picture Elements
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
     
     // Generate resume content dynamically
     
     const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
       
       <h3>Personal Information</h3>
       <p><b>FirstName:</b><span contenteditable="true">${firstName}</span></p>
       <p><b>LastName:</b><span contenteditable="true">${lastName}</span</p>
       <p><b>Email:</b><span contenteditable="true">${emailAdress}</span</p>
       <p><b>Phone:</b><span contenteditable="true">${phoneNumber}</span</p>

       <h3>Education</h3>
       <p contenteditable="true">${education}</p>

       <h3>Experience</h3>
       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable="true">${skills}</p>
      
     `;

     // Display generated resume

     if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
     } else {
        console.error("The resume display is invalid.");
        
     }
>>>>>>> 958d4c5 (Updated resume for better responsiveness)
})