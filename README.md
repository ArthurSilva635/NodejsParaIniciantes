# Guia Para Iniciantes em Node.js


## O que é Node.js?

Muitos iniciantes em Node tem a dúvida de o quê exatamente ele é, e a descrição em [nodejs.org](http://nodejs.org/) definitivamente não ajuda.

Uma coisa importante de se perceber é que o Node não é um servidor web. Por ele próprio, não se tem nada. Ele não funciona como o Apache. Não existe um arquivo de configuração onde você o aponta para seus arquivos html. Se você quer que o Node seja um servidor HTTP, você tem que escrever um servidor HTTP (com a ajuda das bibliotecas incluídas). O Node.js é somente outra forma de executar código em seu computador. Ele é simplesmente um *JavaScript runtime* (ambiente de execução de código JavaScript).

## Instalando o Node.js

Node.js é muito simples de ser instalado. Se você estiver usando Windows ou Mac, os instaladores estão disponíveis na [página de download](http://nodejs.org/download).

## Já tenho o Node instalado, e agora o que fazer?

Uma vez instalado, agora você tem acesso a um novo comando chamado `node`. Você pode usar o comando `node` de duas formas diferentes. A primeira é sem argumentos. Isto irá abrir um shell interativo (REPL: read-eval-print-loop), onde você pode executar código JavaScript puro.

## Fazendo Algo Útil - Servidor HTTP

Como disse anteriormente, o Node não faz nada por si só. Um dos módulos embutidos tornam a criação de [servidores HTTP](http://nodejs.org/api/http.html#http_http_createserver_requestlistener) simples muito fácil, que é o [exemplo na página inicial do Node.js](http://nodejs.org/).

`my-web-server.js`
```js

var http = require('http');

http.createServer(function ( req, res ) { // req = requisição, res = resposta
	
	res.writeHead( 200, { 'Content-Type': 'text/plain' } );
	res.end( 'Hello World\n' );
}).listen( 8080 );

console.log( 'Servidor rodando na porta 8080' );

```

Quando eu digo básico, quero dizer básico mesmo. Este não é um servidor HTTP completo. Ele não pode servir qualquer arquivo HTML ou de imagem. De fato, não importa sua requisição, ela vai retornar 'Hello World'. No entanto, você pode rodar isto e verá em seu navegador no endereço `http://localhost:8080` o texto "Hello World".

```sh

$ node my-web-server.js

```

Você pode ter percebido uma coisa diferente agora. Sua aplicação node.js não fechou. Isto acontece pois você criou um servidor e sua aplicação node vai continuar rodando e respondendo as requisições até que você mesmo mate o processo.

Se você quiser ter um servidor web completo, você terá que fazer este trabalho. Você deve checar o que foi requisitado, ler os arquivos apropriados e enviar o conteúdo de volta. Pessoas já fizeram este trabalho duro para você.

## Fazendo Algo Útil - Express

[Express](http://expressjs.com/) é um framework que torna a criação de sites normais muito simples. A primeira coisa que você tem que fazer é instalá-lo. Juntamente com o comando `node`, você também tem acesso a um comando chamado `npm`. Esta ferramenta permite que você acesse uma enorme coleção de módulos criados pela comunidade, e um deles é o Express.

```sh

$ cd /my/app/location
$ npm install express

```

Quando você instala um módulo, ele vai ser colado em uma pasta chamada *node_modules* dentro do diretório da sua aplicação. Você pode agora requisitar (*require*) este módulo como um módulo embutido. Vamos criar um arquivo estático básico usando o Express.

`my-static-file-server.js`
```js

var express = require('express');
	app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

```
```sh

$ node my-static-file-server.js

```

Agora você tem um servidor de arquivos estáticos bastante eficiente. Tudo que você colocar dentro da pasta `/public` poderá ser requisitado pelo seu navegador e será mostrado. HTML, imagens, enfim, tudo. Por exemplo, se você colocar uma imagem chamada `my-image.png` dentro da pasta `public`, você pode acessá-la usando seu navegador no endereço `http://localhost:8080/my-image.png`. Claro que o Express tem vários outros recursos, mas você pode olhá-los a medida que continua desenvolvendo.

## NPM

Nós usamos um pouco o [NPM](https://npmjs.org/) nas seções anteriores, mas eu quero enfatizar o quão importante esta ferramenta se faz no desenvolvimento para Node.js. Existem milhares de módulos disponíveis que resolvem quase todos os problemas típicos que você encontra. Lembre-se de checar o NPM antes de re-inventar a roda. Não é inédito para uma aplicação Node ter dezenas de dependências.

No exemplo anterior nós instalamos o Express manualmente. Se você tiver muitas dependências, essa não será uma forma muito interessante de instalá-las. É por isso que o NPM faz uso do arquivo `package.json`.

`package.json`.
```js

{
	"name" : "MyStaticServer",
	"version" : "0.0.1",
	"dependencies" : {
		"express" : "3.3.x"
	}
}

```

Um arquivo [`package.json`](https://npmjs.org/doc/files/package.json.html) contém um resumo da sua aplicação. Existem vários campos disponíveis, sendo este apenas o mínimo. A seção *dependencies* (dependências) descreve o nome e a versão dos módulos que você gostaria de instalar. Neste caso eu vou aceitar qualquer versão do Express 3.3. Você pode listar quantas dependências quiser nesta seção. 

Agora, ao invés de instalar cada dependência em separado, nós podemos rodar um simples comando e instalar todas elas.

```sh

$ npm install

```

Quando você roda este comando, o npm vai verificar na pasta atual pelo arquivo `package.json`. Se ele encontrar um, então irá instalar cada dependência listada.



## Resumo

Esperamos que este tutorial tenha feito a ponte entre a parte de fazer o download do Node.js e construir sua primeira ferramenta. O Node.js é uma tecnologia extremamenta poderosa e flexível que pode resolver uma vastidão de tipos de problemas.

Eu quero que cada um de vocês se lembre que o Node.js é somente limitado pela sua imaginação. As bibliotecas de seu núcleo foram cuidadosamente projetadas para fornecer as peças do quebra-cabeça necessárias para se construir qualquer fotografia. Combine-as com módulos disponíveis no NPM e será incrível o quão rápido você poderá começar a construir aplicações muito complexas e atraentes.
