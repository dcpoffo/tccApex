# Sistema para Cadastros de Não Conformidades

### Aplicação desenvolvida para avaliação do curso de Formação C#
### Instrutor: Diego Cugiki - Apex Ensino

## A Aplicação
Esta aplicação tem por objetivo realizar um cadastro de Não Conformidades, usando as base Cliente, Produto e Problema. Estas bases armazenam e disponibilizam informações para o 
cadastro de uma Não Conformidade. 
Para realizar este cadastro, a aplicação possui um front-end e um backend

### front-end (\frontend)
Aplicação principal, desenvolvida em Angular (Framework JavaScript mantido pela Google) utilizando a IDE VSCode.

### back-end (\backend)
API desenvolvida em .Net Core (Framework da Microsoft), para comunicação entre o Banco de Dados SQLServer e a aplicação principal.

## Bases Utilizadas
### Cliente
Armazena clientes relacionados à Não Conformidade

### Produto
Armazena produtos relacionados à Não Conformidade

### Problema
Armazena problemas relacionado à Não Conformidade

### NaoConformidade
Armazena Não Conformidades

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



