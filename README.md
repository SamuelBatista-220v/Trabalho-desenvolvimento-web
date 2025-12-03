# Trabalho-desenvolvimento-web

Pequeno projeto/front-end de uma floricultura (Belas Flores). Realizei correções e melhorias visuais e funcionais em todo o projeto.

O que foi feito (resumo):
- Melhorias visuais e responsividade no formulário de login (css/login.css)
- Interações com jQuery: mostrar/ocultar senha, animações, loaders e toasts
- Refatoração do `js/main.js`: correções no mapa, sistema de usuários no localStorage, melhorias do carrinho
- Atualização de imagens e correção de caminhos quebrados

Novidades implementadas:
- Página de documentos com visualizador: `docs.html` (Especificação do trabalho.pdf, checklist de inspeção.pdf)
- Miniaturas e hover alternativo para produtos (thumbnails) — cartões e detalhe utilizam várias imagens
- Modal de finalização de compra com resumo e confirmação (substitui alert)

Como testar localmente:
1. Abra `login.html`, `cadastro.html`, `index.html`, `produtos.html`, `detalhe.html` e `carrinho.html` no navegador.
2. Teste o fluxo de cadastro → login → adicionar produtos ao carrinho → finalizar compra.

Dicas para testes locais (recomendado):
- Para evitar problemas de CORS com PDFs/iframes, inicie um servidor HTTP simples na pasta do projeto (ex.: Python):

```powershell
python -m http.server 8000
# Depois abra http://localhost:8000/login.html no navegador
```

O que ainda pode ser feito em próximas iterações:
- Integrar autenticação real com backend (Node/Express ou similar)
- Ativar OAuth para os botões sociais
- Melhorias de acessibilidade avançadas e testes com leitores de tela

Se quiser que eu continue iterando (novo visual, integração OAuth, ou migrar para um backend simples), diga qual etapa prefere priorizar.