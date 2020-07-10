class UserController {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static requestUser(url) {
        let reqUser = new XMLHttpRequest();
        reqUser.open("GET",url);

        reqUser.addEventListener("load", ()=> {
            let userDisplay = document.querySelector("#userDisplay");
            let reqObj = JSON.parse(reqUser.responseText);

            let userApi = new User(reqObj.login, reqObj.name, reqObj.avatar_url, reqObj.bio, reqObj.followers, reqObj.following);

            userDisplay.innerHTML += UserView.displayUser(userApi.getUser());
        })

        reqUser.send();
    }


}