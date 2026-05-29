let StartFunc = () => {
    
        const template = document.getElementById("doctorTemplate");
	    const container = document.getElementById("doctorContainer");

		const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
		container.innerHTML = "";

		doctors.forEach(doc => {

			const clone = template.content.cloneNode(true);

			clone.querySelector(".doctor-img-src").src = doc.img;
			clone.querySelector(".doctor-name").textContent = doc.name;
			clone.querySelector(".doctor-degree").textContent = doc.degree;
			clone.querySelector(".doctor-speciality").textContent = doc.speciality;
			clone.querySelector(".doctor-location").append(doc.location);
			clone.querySelector(".doctor-rating").textContent = doc.rating;
			clone.querySelector(".img-fluid1").src = doc.img2;

			const bookBtn = clone.querySelector(".BookAppointmentClass");
			bookBtn.href = `booking.html?id=${doc.id}`;

			container.appendChild(clone);
		});
	};

export { StartFunc };