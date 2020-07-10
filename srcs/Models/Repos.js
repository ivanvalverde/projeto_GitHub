class Repos {
    constructor(name, url){
        this._name = name;
        this._url = url;
    }

    getRepos() {
        return {
            name: this._name,
            url: this._url
        };
    }
}