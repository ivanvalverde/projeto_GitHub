class ReposView {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static displayRepos(repos) {
        return `<div>
                        <a href="${repos.url}"><img src="Imgs/repositories.png" style="width: 10%; height:10%;"></a>
                        <p><strong>Repository Name:</strong> ${repos.name}</p>      
                </div>`
    }
}