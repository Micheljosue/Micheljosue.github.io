// Question 1
let reponse1 = null;

function setReponse1(val) {
    reponse1 = val;
    document.getElementById("result1").textContent = correction1();
}

function correction1() {
    if (reponse1 === "vrai") {
        return "✔️ Correct ! Les plantes produisent leur propre nourriture grâce à la photosynthèse.";
    } else if (reponse1 === "faux") {
        return "❌ Incorrect. Les plantes fabriquent leur nourriture grâce à la photosynthèse.";
    } else {
        return "";
    }
}

// Question 2
let reponse2 = null;

function setReponse2(val) {
    reponse2 = val;
    document.getElementById("result2").textContent = correction2();
}

function correction2() {
    if (reponse2 === "vrai") {
        return "✔️ Correct ! Le sang transporte l’oxygène dans tout le corps.";
    } else if (reponse2 === "faux") {
        return "❌ Incorrect. Le sang transporte bien l’oxygène grâce aux globules rouges.";
    } else {
        return "";
    }
}
