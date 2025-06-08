const first_name = document.querySelector(".first-name");
const last_name = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".btn");

function isValidEmail(email)
{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

button.addEventListener("click", (e) =>{
    e.preventDefault();
    if(first_name.firstElementChild.value === "")
    {
        first_name.firstElementChild.classList.add("error");
        first_name.lastElementChild.style.display = "block";
    }
    else
    {
        first_name.firstElementChild.classList.remove("error");
        first_name.lastElementChild.style.display = "none";
    }

    if(last_name.firstElementChild.value === "")
    {
        last_name.firstElementChild.classList.add("error");
        last_name.lastElementChild.style.display = "block";
    }
    else
    {
        last_name.firstElementChild.classList.remove("error");
        last_name.lastElementChild.style.display = "none";
    }

    if(!isValidEmail(email.firstElementChild.value))
    {
        email.firstElementChild.classList.add("error");
        email.lastElementChild.style.display = "block";
    }
    else
    {
        email.firstElementChild.classList.remove("error");
        email.lastElementChild.style.display = "none";
    }

    if(password.firstElementChild.value === "")
    {
        password.firstElementChild.classList.add("error");
        password.lastElementChild.style.display = "block";
    }
    else
    {
        password.firstElementChild.classList.remove("error");
        password.lastElementChild.style.display = "none";
    }
})
