📘 Angular + WordPress API (Standalone v19)

Projeto desenvolvido com Angular Standalone (v19) consumindo dados da WordPress REST API, exibindo posts com:

✅ Título (linkável para o post original)

✅ Imagem destacada

✅ Descrição (excerpt ou resumo do conteúdo)

✅ Layout moderno e responsivo

✅ Estilização com Flexbox e Google Fonts

🚀 Tecnologias Utilizadas

Angular 19 (Standalone Components)

Angular Router

HttpClient

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

A aplicação consome os posts através da REST API padrão do WordPress:

https://seusite.com/wp-json/wp/v2/posts?_embed&per_page=20
Parâmetros utilizados:

_embed → Permite acessar a imagem destacada

per_page=20 → Define quantidade de posts retornados

🧠 Arquitetura
🔹 AppComponent

Responsável apenas por renderizar o <router-outlet>.

🔹 HomeComponent

Responsável por:

Buscar os posts via WpService

Renderizar título, imagem e descrição

Aplicar layout responsivo

🔹 WpService

Responsável por:

Realizar requisições HTTP à API do WordPress

Retornar os dados para o componente

🎨 Layout e Estilização

O layout utiliza:

display: flex

Cards com sombra suave

Hover effects

Responsividade com media queries

Tipografia moderna com Google Fonts

Estrutura visual:

[Título Linkável]

[Imagem]   [Descrição do Post]

Em dispositivos móveis:

[Título]
[Imagem]
[Descrição]
📱 Responsividade

Breakpoints aplicados:

1024px (tablet grande)

768px (tablet)

480px (mobile)

O layout muda automaticamente para coluna em telas menores.

🛠 Como Rodar o Projeto

Instalar dependências:

npm install

Rodar o servidor:

ng serve

Acessar no navegador:

http://localhost:4200
