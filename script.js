
// const float = document.querySelectorAll(".float")
// const socialLinks = document.querySelectorAll(".social-links li a")


// float.forEach(element => {
//     // will be clickable by default
// });

// socialLinks.forEach(socialLink => {
//    // this will be clickable
// });

// // now i want to prevent click for all links 

const float = document.querySelectorAll(".float");
const socialLinks = document.querySelectorAll(".social-links li a");

// List of allowed links
const allowedLinks = [...float, ...socialLinks];

document.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Check if the clicked element is in the allowed links
  const isAllowed = allowedLinks.some((link) => link.contains(clickedElement));

  // If the clicked link is not in the allowed links, prevent the default behavior
  if (!isAllowed) {
    event.preventDefault();
    // Optionally, you can add some visual indication that the link is not clickable
    console.log("This link is not clickable.");
  }
});
