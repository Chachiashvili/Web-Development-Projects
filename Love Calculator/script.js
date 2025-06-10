function calculateLove() {
    const firstName = document.getElementById("firstName").value.trim();
    const secondName = document.getElementById("secondName").value.trim();
    const result = document.getElementById("result");

    if (firstName === "" || secondName === "") {
        result.textContent = "Please enter both names!";
        result.style.color = "red";
        return;
    }


    const combinedNames = firstName.toLowerCase() + secondName.toLowerCase();
    let loveScore = 0;

    for (let i = 0; i < combinedNames.length; i++) {
        loveScore += combinedNames.charCodeAt(i);
    }

    const finalPercentage = (loveScore % 100) + 1; 

    result.textContent = `❤️ The love between ${firstName} and ${secondName} is ${finalPercentage}% ❤️`;
    result.style.color = "deeppink";
}

function reloadd() {
    window.location.reload();
}
