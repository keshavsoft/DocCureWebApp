let StartFunc = async () => {
    const response = await fetch("doctors.json");

    const doctorsData = await response.json();



    localStorage.setItem("doctors", JSON.stringify(doctorsData));
};

export { StartFunc };