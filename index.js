


// Set up the canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

// Set the canvas size to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Generate random stars
    const stars = [];
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
        const star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 2,
            rotation: Math.random() * 360
            };
        stars.push(star);
    }

// Function to draw the stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate((star.rotation * Math.PI) / 180);
        ctx.fillRect(-star.size / 2, -star.size / 2, star.size, star.size);
        ctx.restore();
        }
    }

// Function to update the star positions and rotation
function updateStars() {
    for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.x += star.speed;
        star.rotation += star.speed;

// Reset stars that move off the canvas
        if (star.x > canvas.width) {
            star.x = 0;
            }
        }
    }

// Function to animate the stars
function animateStars() {
    drawStars();
    updateStars();
    requestAnimationFrame(animateStars);
    }

// Start the animation
animateStars();

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
    }

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

document.addEventListener("DOMContentLoaded", function() {
    var resumeButton = document.querySelector(".resume");
    resumeButton.addEventListener("click", function() {
        // Create an anchor element
        var downloadLink = document.createElement("a");
        downloadLink.href = "UC_Resume_SPJII.pdf"; // Replace with the path to your PDF file
        downloadLink.download = "UC_Resume_SPJII.pdf"; // Specify the file name for download
        downloadLink.target = "_blank"; // Open the PDF file in a new tab
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Simulate a click on the download link
        document.body.removeChild(downloadLink); // Clean up after download
    });
});


function redirectToWebsite(url) {
        window.location.href = url;
    }
    function copyToClipboard() {
        // Get the text from the input field
        var textToCopy = document.getElementById("textToCopy").value;

        // Create a temporary input element
        var tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Select the text in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); /* For mobile devices */

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Provide some feedback (you can customize this part)
        alert("Text copied to clipboard: " + textToCopy);
    }
