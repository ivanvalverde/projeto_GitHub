class UserController {

    //classe não aceita instanciamento de objetos.

    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    /*método estático que realiza a requisição dos dados do usuário da API do Github. Toda vez que a requisição é feita,
    todo o conteúdo da div(userDisplay) é apagado e sobescrito posteriormente com os dados solicitados, caso a requisição
    tenha status diferente de 200, é apagado tudo que foi feito na solicitação anterior e uma mensagem de erro aparece para
    o usuário durante 2 segundos.*/

    static requestUser(url) {
        userDisplay.innerHTML = "";
        let reqUser = new XMLHttpRequest();
        reqUser.open("GET",url);

        reqUser.addEventListener("load", ()=> {
            if(reqUser.status == 200){
                let userDisplay = document.querySelector("#userDisplay");
                let reqObj = JSON.parse(reqUser.responseText);

                let userApi = new User(reqObj.login, reqObj.name, reqObj.avatar_url, reqObj.bio, reqObj.followers, reqObj.following);

                userDisplay.innerHTML = UserView.displayUser(userApi.getUser());
            } else{
                let errorMsg = document.querySelector(".errorMessage");
                let inputField = document.querySelector("#inputUserName");
                errorMsg.classList.remove("errorMessage");
                errorMsg.classList.add("errorMsgVisible");
                setTimeout(()=>{errorMsg.classList.remove("errorMsgVisible"); errorMsg.classList.add("errorMessage");inputField.focus();},2000);
            }
        })

        reqUser.send();
    }


}