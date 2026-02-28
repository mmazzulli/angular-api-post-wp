📘 Angular 19 + WordPress REST API

Projeto desenvolvido com Angular 19 (Standalone Components) consumindo dados da WordPress REST API, exibindo posts com layout moderno e responsivo.

🚀 Funcionalidades

✔ Listagem de posts via API
✔ Título linkável para o post original
✔ Imagem destacada
✔ Exibição de resumo (excerpt ou conteúdo resumido)
✔ Layout moderno com Flexbox
✔ Design responsivo (mobile, tablet e desktop)


🛠 Tecnologias Utilizadas

Angular 19 (Standalone)
Angular Router
Angular HttpClient
WordPress REST API
CSS3 (Flexbox)
Google Fonts (Poppins)

📂 Estrutura do Projeto
src/
 └── app/
     ├── pages/
     │    └── home/
     │         ├── home.component.ts
     │         ├── home.component.html
     │         └── home.component.css
     ├── services/
     │    └── wp.service.ts
     ├── app.component.ts
     ├── app.routes.ts
     └── app.config.ts
🔌 Integração com WordPress

A aplicação consome os posts através da API padrão do WordPress:

https://seusite.com/wp-json/wp/v2/posts?_embed&per_page=20
Parâmetros utilizados:

_embed → Permite acessar a imagem destacada

per_page=20 → Define a quantidade de posts retornados


🧠 Arquitetura
AppComponent
Responsável apenas por renderizar o <router-outlet>.
HomeComponent
Busca os posts via WpService
Renderiza título, imagem e descrição
Aplica layout responsivo
WpService
Realiza requisições HTTP
Retorna os dados da API para o componente


🎨 Layout

Estrutura visual:
[Título Linkável]
[Imagem]   
[Descrição do Post]

Em telas menores:

[Título]
[Imagem]
[Descrição]


📱 Responsividade

Breakpoints utilizados:
1024px (tablet grande)
768px (tablet)
480px (mobile)

▶ Como Rodar o Projeto

Instalar dependências:
npm install
Rodar servidor de desenvolvimento:

ng serve
Abrir no navegador:
http://localhost:4200

👨‍💻 Autor
Projeto desenvolvido como estudo prático de integração Angular + WordPress API.
