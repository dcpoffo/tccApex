# Sistema para Cadastros de Não Conformidades

### Aplicação desenvolvida para avaliação do curso de Formação C#
### Instrutor: Diego Cugiki - Apex Ensino

## A Aplicação
Esta aplicação tem por objetivo realizar um cadastro de Não Conformidades (lê-se NC). 
NC são problemas que podem acontecer com algum produto em alguma empresa. Trabalho em uma empresa na qual produz condutores elétricos. Esses condutores possuem determinadas característica como diâmetro, cor, quantidade embalada, etc. Quando alguma dessas características ficam fora do especificado, geram uma NC. Essa NC pode ser interna (identificada ma empresa) ou externa (identificada no cliente). 
Por exemplo: o diâmetro espeficificado do cabo é de 2,00mm (+-0,1) e o cliente identificou 2,30mm. Se o cliente não conseguir usar esse cabo, ele identifica como uma NC e será tratada como um NCE (Externa).
Outro exemplo: ao ser confeccionado (processo de extrusão) o cabo, ele raspou em algum lugar, ocasionando falhas na superfície (capa). Isso gera uma NCI (Interna).

## Bases Utilizadas
Para cadastrar NC, serão usandas as base Cliente, Produto, Problema e NaoConformidade. Estas bases armazenam e disponibilizam informações para o cadastro de uma NC. Cada base é usada como Classe para o desenvolvimento da aplicação.
### Cliente
Armazena clientes relacionados à Não Conformidade
```
Id int IDENTITY(1,1) NOT NULL
Nome nvarchar NULL
```
### Produto
Armazena produtos relacionados à Não Conformidade
```
Id int IDENTITY(1,1) NOT NULL
Descricao nvarchar NOT NULL
UnidadeMedida nvarchar NOT NULL
```
### Problema
Armazena problemas relacionado à Não Conformidade
```
Id int IDENTITY(1,1) NOT NULL
Descricao nvarchar NOT NULL
```
### NaoConformidade
Armazena Não Conformidades
```
Id int IDENTITY(1,1) NOT NULL
Quantidade float NOT NULL
DataAbertura datetime NOT NULL
ClienteId int NOT NULL
ProdutoId int NOT NULl
ProblemaId int NOT NULL
```

## Estrutura do Projeto
Aplicação principal, desenvolvida em Angular utilizando a IDE VSCode. Para o design das interfaces, foi utilizado Angular Material.
O projeto foi desenvolvido com a seguinte estrutura:

### front-end (\frontend)
```
ng new frontend
```
#### Estrutura do frontend
* components - para cada classe, foi criado um componente para as ações Criar (create), Ler (read), Atualizar (update) e Apagar (delete)
```
ng generate component classe-acao
Ex.: ng generate component cliente-read
```
* views - Componente para "Apresentação" da Classe: opcão para um novo registro da classe e a leitura (read) na mesma.

* models - Modelo das classes utilizadas: Cliente, NãoConformidade, Problema e Produto.

* services - Para cada classe, foi criado um servico para comunicação com a API: getAll, getById, Post, Put, Delete. 
```
ng generate service classe
Ex.: ng generate service cliente
```
A comunicação com a API é feita através dos caminhos:
```
baseURL = `${environment.mainUrlAPI}classe`
mainUrlAPI: 'http://localhost:5000/'
Ex.:
getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseURL).pipe(
    map((obj) => obj),
    catchError((e) => this.errorHandler(e))
);
```

### back-end (\backend)
API desenvolvida em .Net Core para comunicação entre o Banco de Dados SQLServer e a aplicação principal.
```
dotnet new webapi
```
#### Estrutura do backend
* data

* Controllers

* models

* Migrations



## Executando a aplicação
Para que a aplicação seja executada, deve-se executar os seguintes comandos:
- dentro de \backend: 
```
dotnet watch run
```
- dentro de \frontend: 
```
npm update (este comando é opcional, caso necessite baixar/atualizar alguma dependencia do projeto)
```
- dentro de \frontend: 
```
npm start
```

## Retornos
### Obter Cliente
```` json
url = http://localhost:5000/cliente
method = GET
{
    "id": 
    "nome":       
}
````
### Obter Produto
```` json
url = http://localhost:5000/produto
method = GET
{
    "id": 
    "descricao":
    "unidadeMedida":     
}
````
### Obter Problema
```` json
url = http://localhost:5000/problema
method = GET
{
    "id": 
    "descricao":       
}
````
### Obter Problema
```` json
url = http://localhost:5000/problema
method = GET
{
    "id": 
    "descricao":       
}
````
### Obter Não Conformidades
```` json
url = http://localhost:5000/naoconformidade
method = GET
{
    "id":
    "quantidade":
    "dataAbertura":
    "clienteId":
    "produtoId":
    "problemaId":
    "cliente": {
        "id":
        "nome":
    },
    "produto": {
        "id":
        "descricao":
        "unidadeMedida":
    },
    "problema": {
        "id":
        "descricao":
    }
}
````



