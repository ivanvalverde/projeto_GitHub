let inputField = document.querySelector("#inputUserName");
let submitButton = document.querySelector("#submitRequest");
let reposDisplay = document.querySelector("#repositoriesDisplay");

submitButton.addEventListener("click", ()=> {
    reposDisplay.innerHTML = "";
    let updatedUrl = "https://api.github.com/users/" + inputField.value;
    let updatedUrlRepos = `https://api.github.com/users/${inputField.value}/repos`;
    console.log(updatedUrlRepos);

    UserController.requestUser(updatedUrl);
    ReposController.requestRepos(updatedUrlRepos);
})