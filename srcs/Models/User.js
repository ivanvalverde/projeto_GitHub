class User {

    //método aceita instância de objetos.

    constructor(login, name, picUrl, bio, followers, following){
        this._login = login;
        this._name = name;
        this._picUrl = picUrl;
        this._bio = bio;
        this._followers = followers;
        this._following = following;
    }

    //método retorna um novo objeto(proteção de dados) com as informações do respectivo objeto.

    getUser() {
        return {
            login: this._login,
            name: this._name,
            picUrl: this._picUrl,
            bio: this._bio,
            followers: this._followers,
            following: this._following
        };
    }
}