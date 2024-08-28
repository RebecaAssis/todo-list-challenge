# Desafio de Programação Frontend com Angular: ToDo List CRUD
<div align="center"> 

![Mobile](/src/assets/images/mobile.png)

</div>

## Descrição
Este projeto foi criado com o intuito de compartilhar conhecimento com aqueles que estão iniciando na área. Eu sei o quão importante é encontrar materiais como esse no ínicio da nossa jornada como desenvolvedor. Assim como os projetos e desafios disponibilizados na comunidade me desafiaram e me ajudaram a evoluir, eu espero que este também possa te ajudar. :heart:

O projeto contempla o desenvolvimento de uma simples ToDo List, onde o usuário tem a possibilidade de **criar**, **ler**, **atualizar** e **deletar** os itens da lista, e, você dev :superhero_woman:, poderá por em prática:

:eight_spoked_asterisk: As 4 operações básicas utilizadas no desenvolvimento de uma aplicação: **C**REATE, **R**EAD, **U**PDATE e **D**ELETE <br>
:eight_spoked_asterisk: HTML, CSS (Scss) e Typescript <br>
:eight_spoked_asterisk: Estrutura de dados básica (manipulação de arrays e objetos) <br>
:eight_spoked_asterisk: Desenvolvimento (básico) utilizando Angular framework <br>
:eight_spoked_asterisk: Rotas (básico) <br>
:eight_spoked_asterisk: Compartilhamento de dados entre componentes (**@Input()** e **@Output()**) <br>
:eight_spoked_asterisk: Formulário Reativo (básico) <br>
:eight_spoked_asterisk: Requisições HTTP (básico) <br>
:eight_spoked_asterisk: RxJS (básico) <br>
:eight_spoked_asterisk: Testes unitários <br>

E aí, vamos juntos? :hugs:

### Desafio
Neste desafio, você deverá criar uma aplicação de ToDo List utilizando Angular. O objetivo é desenvolver uma aplicação CRUD (Create, Read, Update, Delete) que permita ao usuário gerenciar suas tarefas de forma prática e eficiente.

#### Requisitos do Desafio:

##### Inserção de Tarefas:

:eight_spoked_asterisk: A aplicação deve possuir dois campos de input, um para o título da tarefa e outro para a descrição. <br>
:eight_spoked_asterisk: O preenchimento do campo de título é obrigatório. O botão de Criar ou Editar só deve ser habilitado quando o título for preenchido.

##### Listagem de Tarefas:

:eight_spoked_asterisk: As tarefas criadas devem ser exibidas em forma de cards, contendo o título e a descrição fornecidos pelo usuário. <br>
:eight_spoked_asterisk: Cada card deve ter um checkbox que permita marcar a tarefa como concluída (done) ou não concluída. <br>
:eight_spoked_asterisk: Ao marcar o checkbox, o estado da tarefa deve ser atualizado visualmente para indicar que está concluída.

##### Edição de Tarefas:

:eight_spoked_asterisk: Cada card deve ter um botão de Editar. <br>
:eight_spoked_asterisk: Ao clicar em Editar, os campos de input devem ser populados com o título e a descrição da tarefa selecionada. <br>
:eight_spoked_asterisk: O botão de criar deve mudar sua função para Editar, permitindo que as modificações sejam salvas.

##### Exclusão de Tarefas:

:eight_spoked_asterisk: Cada card deve ter um botão de Excluir, que ao ser clicado, remove a tarefa da lista.

##### Considerações Finais:

:eight_spoked_asterisk: A aplicação deve ser responsiva, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops. <br>
:eight_spoked_asterisk: O design pode ser simples, mas deve ser claro e funcional. <br>
:eight_spoked_asterisk: Você pode utilizar CSS, SCSS, SASS ou frameworks de UI à sua escolha para estilizar a aplicação. <br>
:eight_spoked_asterisk: O projeto já possui Bootstrap instalado, mas o uso é opcional. Lembre-se, você pode utilizar outros framewoks, como dito acima. <br>
:eight_spoked_asterisk: Certifique-se de seguir as boas práticas de programação e de estruturação de código no Angular.

##### NÍVEL BÁSICO
Não é necessário trabalhar com requisições. Caso ainda não tenha experiência com requisições HTTP,  a atualização da lista da sua ToDo List pode ser realizada utilizando apenas estrutura de dados com dados estáticos no próprio Frontend. Por exemplo: manipulação de arrays e objetos. 

##### NÍVEL INTERMEDIÁRIO
Para quem já possui experiência com requesições HTTP, além de trabalhar com estrutura de dados no front, deverá realizar a integração com uma API fake para gerenciar os dados da sua ToDo List.

### Clonando a estrutura do desafio
O projeto possui 3 branchs:

* **Branch 'main':** possui uma ToDo List já implementada por mim, que pode ser utilizada como um guia ou como uma "resposta" do desafio, caso você tenha dúvidas.
* **Branch 'basic-challenge':** é branch destinada para Nível Básico. Essa branch possui uma estrutura básica do projeto com os principais arquivos e alguns componentes básicos já criados.
* **Branch 'itermediate-challenge':** é a branch destinada para Nível Intermediário. Diferente da branch para nível básico, esta branch possui apenas o módulo principal e a API fake, a qual será utilizada para integração. O desevolvedor será o responsável por contruir os serviços, as rotas, todos os compontentes, além de realizar as integrações.


1. **Clone o repositório:**
Para clonar o repositório, utilize o comando:

```
git clone https://github.com/seu-usuario/todo-list-challenge.git
```

2. **Crie um Novo Repositório no GitHub:**
Crie um novo repositório no seu GitHub, onde você irá armazenar/disponibilizar o seu projeto.
Documentação do GitHub: https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories

3. **Mude para a branch desejada do desafio:**
```
git checkout <branch-name>

Ex: git checkout basic-challenge

```

4. **Remova o Link com o Repositório Original: Para garantir que o repositório local não tenha mais o link com o seu repositório original:**
```
git remote remove origin
```

5. **Adicione o Novo Repositório como Remoto:**
Após clonar a branch desejada, a pessoa precisa adicionar o repositório que você criou como um remoto no repositório local:
```
git remote add origin https://github.com/<seu-usuario>/<seu-repositorio>.git

```
4. **Verifique o Remoto Adicionado:**
Verifique se o remoto foi adicionado corretamente com o comando:
```
git remote -v
```
5. **Subir a Branch para o Novo Repositório:**
Para subir a branch que você clonou para o seu novo repositório, utilize:
```
git push -u origin <branch-name>
```
**Obs:** Você também está livre para criar a sua estutura do projeto totalmente do zero! 

## Configurações do projeto
-  [Angular CLI](https://github.com/angular/angular-cli) versão 13.1.2.
- Bootstrap 5.3.3

* **Instale o projeto:** ```npm install```
* **Execute o projeto:** ```ng serve```
* **Abra o projeto no seu navegador:** http://localhost:4200/

#### Fake API
Neste projeto eu simulando uma REST API utilizando JSON Server. 

* **Instale o JSON Server:** ```npm install -g json-server```
* **Execute o JSON Server:** ```json-server --watch db.json```
* **Acesse no seu navegador:** http://localhost:3000/todos

**Endpoints**
* GET: http://localhost:3000/todos
* POST: http://localhost:3000/todos/:id
* PUT: http://localhost:3000/todos/:id
* DELETE: http://localhost:3000/todos/:id


## Para saber mais
* **GitHub**: Criando e gerenciando repositórios -  https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories
* **HTML:** https://www.w3schools.com/html/
* **CSS:** https://www.w3schools.com/css/default.asp
* **Arrays:** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
* **Objetos:** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
* **Documentação Angular:** https://v13.angular.io/start <br>
Esse tutorial :point_up_2: da própria documentação do Angular tem meu coração :heart:
* **Compartilhando dados entre componentes utilizando **@Input()** e **@Output**:** https://v13.angular.io/guide/inputs-outputs
* **Rotas:** https://v13.angular.io/guide/router
* **Formulários Reativos:** https://v13.angular.io/guide/reactive-forms
* **Comunicando com serviços backend utilizando HTTP Client:** https://v13.angular.io/guide/http
* **RxJS:** https://rxjs.dev/guide/overview
* **Operadores RxJS:** https://rxjs.dev/guide/operators
* **Observables no Angular:** https://medium.com/@lquocnam/a-comprehensive-guide-to-angular-observables-bde5542346fc
* **Jasmine:** https://jasmine.github.io/tutorials/your_first_suite
* **Tutorial testes unitários com Jasmine e Karma:** https://medium.com/@washinuchiha/teste-unit%C3%A1rios-do-zero-com-angular-14-jasmine-e-karma-8cdccc638e4a

Obrigada por chegar até aqui! <br>
Lembre-se: divulgue seus projetos e matenha o seu GitHub atualizado. Para quem ainda não possui experiência na área, é uma excelente forma de conhecerem o seu trabalho. <br>
Sucesso na sua jornada. :star_struck: :rocket: 

Ah, se tiver dúvidas ou quiser bater um papo sobre Desenvolvimento Frontend, me chama no LikedIn. Vou ficar feliz em ajudar. :wink: <br>
https://www.linkedin.com/in/rebeca-oliveira-assis/

