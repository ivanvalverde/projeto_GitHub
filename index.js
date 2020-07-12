let inputField = document.querySelector("#inputUserName");
let submitButton = document.querySelector("#submitRequest");
let reposDisplay = document.querySelector("#repositoriesDisplay");


// Associando evento de click no botão para a realização das requisições de forma assíncrona

submitButton.addEventListener("click", ()=> {
    reposDisplay.innerHTML = "";
    let updatedUrl = "https://api.github.com/users/" + inputField.value;
    let updatedUrlRepos = `https://api.github.com/users/${inputField.value}/repos`;

    UserController.requestUser(updatedUrl);
    ReposController.requestRepos(updatedUrlRepos);
})