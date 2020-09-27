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
Armazena clientes relacionados à NC
```
Id int IDENTITY(1,1) NOT NULL
Nome nvarchar NULL
```

### Produto
Armazena produtos relacionados à NC
```
Id int IDENTITY(1,1) NOT NULL
Descricao nvarchar NOT NULL
UnidadeMedida nvarchar NOT NULL
```

### Problema
Armazena problemas relacionado à NC
```
Id int IDENTITY(1,1) NOT NULL
Descricao nvarchar NOT NULL
```

### NaoConformidade
Armazena NC
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
* components - para cada entidade, foi criado um componente para as ações Criar (create), Ler (read), Atualizar (update) e Apagar (delete)
```
ng generate component classe-acao
Ex.: ng generate component cliente-read
```
 - views - Componente para "Apresentação" da entidade: opcão para um novo registro da entidade e a leitura (read) na mesma.
 - models - Modelo das Entidades utilizadas: Cliente, NãoConformidade, Problema e Produto.
 - services - Para cada entidade, foi criado um servico para comunicação com a API: getAll, getById, Post, Put, Delete. 
```
ng generate service entidade
Ex.: ng generate service cliente
```
A comunicação com a API é feita através dos caminhos:
```
baseURL = `${environment.mainUrlAPI}entidade`
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
 - data
    - DataContext: através dele podemos acessar os métodos create, read, update, delete e outros metodos de interação com o banco de dados.
    - IRepository: interface que contém a assinatura de metodos padrões (Add, Update, Delete, SaveChanges) e referentes a cada modelo.
    - Repositoy: classe que implementa a interface IRepository.
 - Controllers: responsável por responder as requisições em nossa API.
 - models: modelo da aplicação, que seriam as referências as tabelas que temos no banco de dados.
 - Migrations: guarda informações das migrações qua são feitas. Através do comando abaixo, EF Core "liga" as informações contidas na pasta models com as contidas no DbContext e  cria um esquema da nossa base de dados: banco e tabelas, criando um histórico dentro desta pasta.
Com o próximo comando, o EF cria/atualiza o banco de dados a partir da migração.
```
dotnet ef migrations add Nome-Tabela
dotnet ef database update
```

Depois de pronta, para testar a API, foi utilizado o Postamn. O objetivo é fazer requisições HTTP e avaliar se as repostas (retornos) foram dentro do esperado.

## Executando a aplicação no VSCode
Para que a aplicação seja executada, deve-se abrir o terminal e executar os seguintes comandos:
- dentro de \backend: 
```
dotnet watch run
```
- dentro de \frontend: 
```
npm update (caso necessite baixar/atualizar alguma dependencia do projeto, esse comendo deve ser executado).
```
- dentro de \frontend:
```
npm start
```

## Retornos
Retorno das requisições feitas através do Postan

### Obter Cliente
- GetAll: obtem todos os Clientes cadastrados
```` json
url = http://localhost:5000/cliente
method = GET
{
    "id": 
    "nome":       
}
````
- GetById: obtem determinado Cliente pelo Id
```` json
url = http://localhost:5000/cliente/id
method = GET
{
    "id": 
    "nome":       
}
````

### Obter Produto
- GetAll: obtem todos os Produtos cadastrados
```` json
url = http://localhost:5000/produto
method = GET
{
    "id": 
    "descricao":
    "unidadeMedida":     
}
````
- GetById: obtem determinado Produto pelo Id
```` json
url = http://localhost:5000/produto/id
method = GET
{
    "id": 
    "descricao":
    "unidadeMedida":     
}
````

### Obter Problema
- GetAll: obtem todos os Problemas cadastrados
```` json
url = http://localhost:5000/problema
method = GET
{
    "id": 
    "descricao":       
}
````
- GetById: obtem determinado Problema pelo Id
```` json
url = http://localhost:5000/problema/id
method = GET
{
    "id": 
    "descricao":       
}
````

### Obter NC
- GetAll: obtem todos as NC cadastradas, trazendo o Cliente, o Produto e o Problema vinculados.
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
- GetById: obtem determinada NC pelo Id
```` json
url = http://localhost:5000/naoconformidade/i
method = GET
{
    "id":
    "quantidade":
    "dataAbertura":
    "clienteId":
    "produtoId":
    "problemaId":
    "cliente": {},
    "produto": {},
    "problema": {}
}
````
