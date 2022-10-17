# dioBank

## Projeto desenvolvido com os fundamentos de Typescript <br><br>

Este projeto faz parte do módulo básico :seedling: do curso **"Formação FullStack Typescript"** oferecido pela plataforma Digital Innovation One - DIO. Nesta etapa inicial desenvolvemos o escopo básico de um Banco Digital, o dioBank e suas funções fundamentais, como sacar, depositar e validações. 


<br><br> 

### Stack

 - Typescript

<br><br>

 ### Como rodar o projeto :test_tube: <br><br>

1. Clone o repositório;
2. Instale as dependências do projeto
    ```
    npm i -g typescript
    npm i -g ts-node
    npm i -g ts-node-dev
    ```

3. Execute o projeto e divirta-se ;)
    ```
     npm run dev
    ```

<br><br>

### Desafios desta etapa :dart: <br><br>

- [] Implementar os métodos *(deposit)* e saque *(withdraw)* na classe *DioAccount*;
    - Os valores dos saldos devem ser alterados de acordo com o valor informado para depósito;
    - Apenas contas com o *status* ```true``` e saldo *(balance)* maior que o valor solicitado podem fazer saques; <br><br>
    
- [] Implementar o método de empréstimo *(getLoan)* na classe *CompanyAccount*;
    - Os valores do saldo devem ser acrescidos de acordo com o valor informado para empréstimo;
    - Apenas contas com *status* ```true``` podem fazer empréstimo; <br><br>

- [] Criar um novo tipo de conta a partir da *DioAccount*;
    - Esta conta não deve receber novos atributos;
    - A conta deverá ter um método de depósito que acresce 10 a mais ao valor informado para depósito.  *Ex.: um depósito de R$ 100,00 será de R$ 110,00 no final* <br><br>

- [] Todos os atributos de qualquer conta devem ser privados;
- [] OS atributos *name* e *accountNumber* não podem ser alterados internamente ou externamente;
- [] Criar instâncias para cada um dos tipos de conta no *app.ts* e executar os métodos possíveis;