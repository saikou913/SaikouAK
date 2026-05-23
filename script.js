const memberBtn = document.getElementById("memberBtn");
const members = document.getElementById("members");

memberBtn.addEventListener("click", () => {

    members.classList.toggle("hidden");

    if(!members.classList.contains("hidden")){

        members.scrollIntoView({
            behavior:"smooth"
        });

    }

});