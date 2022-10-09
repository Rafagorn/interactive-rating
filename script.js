let gratings = document.querySelector(".gratings");
let rating = document.querySelector(".rating");
let submit = document.querySelector(".submit");
let qualification = document.getElementById("qualification");
let boton = document.querySelectorAll(".boton");

submit.addEventListener("click", () => {
        rating.classList.add("inactive");
        gratings.classList.remove("inactive");
});


boton.forEach((qualify) => {
    qualify.addEventListener("click", () => {
        qualification.innerHTML = qualify.innerHTML
    })
})

