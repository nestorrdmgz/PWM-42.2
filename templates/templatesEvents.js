document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector(".header_profile_button");
    var container = document.getElementById("option-container");
    button.onclick = function (e) {
        e.stopPropagation();
        container.classList.toggle("options--active");
    };
    container.onclick = function (e) {
        e.stopPropagation();
    };
    window.onclick = function () {
        container.classList.remove("options--active");
    };
    var input = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < input.length; i++) {
        input[i].onclick = function () {
            var isChecked = false;
            for (var j = 0; j < input.length; j++) {
                if (input[j].checked) {
                    isChecked = true;
                    break;
                }
            }
            if (isChecked) {
                button.classList.add("button--highlight");
            } else {
                button.classList.remove("button--highlight");
            }
        };
    }
});

function toggleMenu(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function irAPaginaDeInicio() {
    window.location.href = "../homepage/homepage.html";
}