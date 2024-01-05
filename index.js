// Function to handle click event on icons
function handleIconClick(event) {
  // Remove active class from all icons
  const icons = document.querySelectorAll(".custom-aside i");
  icons.forEach((icon) => icon.classList.remove("active"));

  // Add active class to the clicked icon
  event.target.classList.add("active");
}
