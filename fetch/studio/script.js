//TODO: Add Your Code Below

window.addEventListener("load", () => {

    let fetchData = async () => {
        let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await response.json();

        let sortData = data.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

        const container = document.getElementById("container");

        for (let i = 0; i < sortData.length; i++) {
            let skills = sortData[i].skills.join(", ");
            let active = sortData[i].active;
            let activeColor = "";

            if (active) {
                activeColor = "color: green";
            }

            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${i+1}. ${sortData[i].firstName} ${sortData[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${sortData[i].hoursInSpace}</li>
                        <li style="${activeColor}">Active: ${sortData[i].active}</li>
                        <li>Skills: ${skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${sortData[i].picture}">
                </div>
            `;
        }

        container.innerHTML += `Total number of astronauts: ${sortData.length}`;

    }

    fetchData();

})