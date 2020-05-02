var inputElement = document.querySelector('#form input');
var listElement = document.querySelector('#lista ul')
var usuario;

function pesquisaUsuario(usuario) {
    usuario = inputElement.value;
    renderLoading();
    axios.get('https://api.github.com/users/' + usuario + '/repos')
        .then(function (response) {
            console.log("Sucesso!");
            var repos = response.data;
            geraLista(repos);
            console.log("Erro na exibicao");
        })
        .catch(function (error) {
            console.warn("Falha");
            alert("Usuario nao foi encontrado")
        });
}

function geraLista(repositorios) {
    listElement.innerHTML = '';
    repositorios.forEach(repositorio => {
        var itemElement = document.createElement('li');
        itemElement.setAttribute('id', repositorio.name);

        var linkElement = document.querySelector('#' + repositorio.name + ' li');
        linkElement = document.createElement('a');
        linkElement.setAttribute('href', repositorio.html_url);
        var linkText = document.createTextNode(repositorio.name);

        linkElement.appendChild(linkText);
        itemElement.appendChild(linkElement);
        listElement.appendChild(itemElement);

    });
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }
