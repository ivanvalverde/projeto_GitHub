class UserView {

    //classe não aceita instanciamento de objetos.

    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    //método estático que retorna os dados do usuário solicitado já formatados e estilizados diretamente no HTML.

    static displayUser(user) {
        return `<div id="userBrought">
                    <img id="userAvatar" src="${user.picUrl}.jpg">
                    <div id="userInfo">
                            <h2><strong id="strong">Login:</strong> ${user.login}</h2>
                            <p><strong id="strong">Name:</strong> ${user.name}</p>
                            <p id="bio"><strong id="strong">About:</strong> ${user.bio}</p>
                            <p><strong id="strong"><a class="followingFollowers" href="https://github.com/${user.login}?tab=followers">Followers:</a></strong> ${user.followers}</p>
                            <p><strong id="strong"><a class="followingFollowers" href="https://github.com/${user.login}?tab=following">Following:</a></strong> ${user.following}</p>
            
                    </div>
                </div>`
    }
}