class ReposView {

    //classe não aceita instanciamento de objetos.

    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    //método estático que retorna os repositórios já formatados e estilizados diretamente no HTML.

    static displayRepos(repos) {
        return `<div id="reposBrought">
                        <a href="${repos.url}" id="hoverImg"><img src="Imgs/repositories.png" id="reposImg">
                        <img src="Imgs/repositoriesHover.png" id="reposImgHover" class="Imghover">
                        </a>
                        <p id="reposName"><strong id="strong">Repository Name:<br><br></strong> ${repos.name}</p>      
                </div>`
    }
}