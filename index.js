let inputField = document.querySelector("#inputUserName");
let submitButton = document.querySelector("#submitRequest");

submitButton.addEventListener("click", ()=> {
    let updatedUrl = "https://api.github.com/users/" + inputField.value;
    let updatedUrlRepos = `https://api.github.com/users/${inputField.value}/repos`;
    console.log(updatedUrlRepos);

    UserController.requestUser(updatedUrl);
    ReposController.requestRepos(updatedUrlRepos);
})