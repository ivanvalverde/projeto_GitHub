class ReposView {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static displayRepos(repos) {
        return `<div id="reposBrought">
                        <a href="${repos.url}"><img src="Imgs/repositories.png" id="reposImg"></a>
                        <p id="reposName"><strong id="strong">Repository Name:<br><br></strong> ${repos.name}</p>      
                </div>`
    }
}