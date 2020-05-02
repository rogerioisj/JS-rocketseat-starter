<h1>Exercícios: Módulo 02</h1>

<h2>1º exercício</h2>

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadradovermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deveaparecer na tela.

<h2>2º exercício</h2>

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima dealgum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```
function getRandomColor() {
var letters = "0123456789ABCDEF";
var color = "#";
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;}
var newColor = getRandomColor(); // #E943F0
```
<h2>3º exercício</h2>

A partir do seguinte vetor:
```
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista (``` <ul> ```) no HTML com os itens da seguinte forma:

<ul>
  <li>Diego</li>
  <li>Gabriel</li>
  <li>Lucas</li>
</ul>

<h2>4º exercício</h2>

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
```
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aosdemais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
