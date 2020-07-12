class ReposController {

    //classe não aceita instanciamento de objetos.

    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    /*método estático que realiza a requisição dos repositórios do usuário da API do Github. 
    A requisição só é realizada se seu status for 200(bem-sucedido).*/

    static requestRepos(url) {
        let reqRepos = new XMLHttpRequest();
        reqRepos.open("GET",url);

        reqRepos.addEventListener("load", ()=> {
            if(reqRepos.status == 200){
                let reposDisplay = document.querySelector("#repositoriesDisplay");
                let reqArrObj = JSON.parse(reqRepos.responseText);

                for(let i=0; i < reqArrObj.length; i++){
                    let reposApi = new Repos(reqArrObj[i].name, reqArrObj[i].html_url);
                    reposDisplay.innerHTML += ReposView.displayRepos(reposApi.getRepos());
                }
            }
        })

        reqRepos.send();
    }
}