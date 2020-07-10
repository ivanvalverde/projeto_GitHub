class UserView {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static displayUser(user) {
        return `<div>
                        <h2><strong>Login:</strong> ${user.login}</h2>
                        <p><strong>Name:</strong> ${user.name}</p>

                        <img id="userAvatar" src="${user.picUrl}.jpg">

                        <p><strong>About:</strong> ${user.bio}</p>
                        <p><strong>Followers:</strong> ${user.followers}</p>
                        <p><strong>Following:</strong> ${user.following}</p>
        
                </div>`
    }
}