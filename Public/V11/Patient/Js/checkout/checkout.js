document.addEventListener("DOMContentLoaded", () => {

    
    const params = new URLSearchParams(window.location.search);
    const doctorId = params.get("id");

   
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

   
    const selectedDoctor = doctors.find(doc => doc.id == doctorId);

    if (!selectedDoctor) return;
    document.querySelector(".booking-doc-img img").src = selectedDoctor.img;

    document.querySelector(".booking-info h4 a").textContent = selectedDoctor.name;

    document.querySelector(".average-rating").textContent = selectedDoctor.rating;
    document.querySelector(".img-fluid1").src = selectedDoctor.img2;
	document.querySelector(".doctor-speciality").textContent = selectedDoctor.speciality;
	document.querySelector(".doctor-degree").textContent = selectedDoctor.degree;
    document.querySelector(".booking-doctor-location").innerHTML =
        ` ${selectedDoctor.location}`;
});