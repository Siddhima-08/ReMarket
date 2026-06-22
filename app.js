console.log("JS Connected");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function(e){

    let value = searchInput.value.toLowerCase().trim();

    if(e.key === "Enter"){

        if(value === "mobile" || value === "mobiles"){
            window.location.href = "mobile.html";
        }

        else if(value === "book" || value === "books"){
            window.location.href = "books.html";
        }

        else if(value === "laptop" || value === "laptops"){
            window.location.href = "laptop.html";
        }

        else if(value === "furniture"){
            window.location.href = "furniture.html";
        }

        else if(value === "hobbies" || value === "guitar"){
            window.location.href = "hobbies.html";
        }

        else if(value === "fitness" || value === "dumbbell"){
            window.location.href = "fitness.html";
        }

        else{
            alert("No category found");
        }

    }

});