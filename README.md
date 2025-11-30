# Seminário de Inglês

Site educativo simples e performático, feito com HTML, CSS e JavaScript puro. Tema escuro com paleta roxo/rosa, conteúdo organizado em seções: Modal Verbs, Pronouns, Numbers e Linking Words.

## Participantes

| Matrícula | Nome                           |
| --------- | ------------------------------ |
| 06009810  | Maicon Galdino Cunha           |
| 06013890  | Guilherme Henrique Quintanilha |
| 06015459  | Hugo dos Reis Corrêa Lima      |
| 06014670  | Vitor Alexandre Rocha de Souza |

## Recursos

- Estrutura semântica: `header`, `main`, `section`, `footer`.
- Navegação com rolagem suave e destaque da seção ativa.
- Animação leve de entrada das seções (respeita `prefers-reduced-motion`).
- Layout responsivo, tipografia legível e boa hierarquia visual.
- Tabelas estilizadas e cartões para cada tema.

## Como executar

1. Baixe/clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador.
   - Não há dependências nem build. Funciona 100% com arquivos estáticos.

### Rodar com Python (opcional)

Se preferir um servidor local:

1. No terminal, dentro da pasta do projeto, execute:

   ```bash
   python -m http.server 8000
   ```

2. Acesse `http://localhost:8000/` no navegador.

## Estrutura de arquivos

- `index.html`: marcação semântica, cabeçalho com menu e seções de conteúdo.
- Inclui seção `Participantes` com tabela de matrícula e nome.
- `style.css`: tema escuro, paleta roxo/rosa, responsivo e estilos de tabelas/cards.
- `script.js`: interações (rolagem suave, animações e destaque do menu).

## Personalização

- Cores principais podem ser ajustadas em `:root` no `style.css`:
  - `--primary` (roxo) e `--accent` (rosa).
- Conteúdo das seções pode ser editado diretamente em `index.html`.

## Acessibilidade

- Links de navegação com alvo claro e `scroll-margin-top` para cabeçalho fixo.
- Observa a preferência do usuário para reduzir movimento.
- Contraste adequado para leitura em tema escuro.

## Licença

Projeto educacional livre para uso e adaptação.
