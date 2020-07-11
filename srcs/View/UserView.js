class UserView {
    constructor(){

        throw new Error("This class does not support object instancing.")
    }

    static displayUser(user) {
        return `<div id="userBrought">
                    <img id="userAvatar" src="${user.picUrl}.jpg">
                    <div id="userInfo">
                            <h2><strong id="strong">Login:</strong> ${user.login}</h2>
                            <p><strong id="strong">Name:</strong> ${user.name}</p>
                            <p id="bio"><strong id="strong">About:</strong> ${user.bio}</p>
                            <p><strong id="strong">Followers:</strong> ${user.followers}</p>
                            <p><strong id="strong">Following:</strong> ${user.following}</p>
            
                    </div>
                </div>`
    }
}