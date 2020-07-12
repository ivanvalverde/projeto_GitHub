class Repos {

    //método aceita instância de objetos.

    constructor(name, url){
        this._name = name;
        this._url = url;
    }

    //método retorna um novo objeto(proteção de dados) com as informações do respectivo objeto.

    getRepos() {
        return {
            name: this._name,
            url: this._url
        };
    }
}