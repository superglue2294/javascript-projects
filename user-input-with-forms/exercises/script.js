//Code Your Solution Below

window.addEventListener("load", () => {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", e => {
        const testName = document.getElementById("testName");
        const testDate = document.getElementById("testDate");
        const boosterCount = document.getElementById("boosterCount");
        if (testName === "" || testDate === "" || boosterCount === "") {
            e.preventDefault();
        }
    })

})