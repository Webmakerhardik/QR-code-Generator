const scannerForm = document.querySelector(".scanner-form");
const fileInput = scannerForm.querySelector("input[type='file']");
const previewImage = scannerForm.querySelector("img");
const contentText = scannerForm.querySelector(".content p");

// Click event to trigger file selection
scannerForm.addEventListener("click", () => {
    fileInput.click();
});

// Handling file selection
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        
        reader.onload = () => {
            previewImage.src = reader.result; // Display the image
            previewImage.style.display = "block";
            contentText.textContent = "Image uploaded successfully!";
        };
        
        reader.readAsDataURL(file);
    } else {
        alert("Please upload a valid image file.");
    }
});
