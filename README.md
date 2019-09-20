# Jerimum Hackerspace website

![Logo Jerimum 🤘🏿](https://jerimumhs.github.io/dist/img/logo.svg "Comunidade Jerimum")

Somos um grupo de pessoas interessadas em usar, remixar e compartilhar tecnologia, aprendizado, diversão e cultura de forma
colaborativa e indiscriminada.

Temos como prioridade estratégica a manutenção de um hackerspace em Natal/RN para concretizar essas aspirações.

Quer falar com a gente? Quer participar? É fácil nos achar. :)

[🚀](https://t.me/JerimumHS)
[🐦](https://twitter.com/JerimumHS)

Como ajudar?

- [traduções](#traduções)

## Como rodar o projeto

Certifique-se que sua versão do node é ">=4 <=9", depois utilize o comando "yarn" para instalar os pacotes do node e "yarn dev" para utilizar o ambiente de desenvolvimento.

## Traduções

Crie um arquivo `.js` com a tradução.

```
Ex.: Japonês -> `jp.js`
```

e cole o seguinte template.

```javascript
export default {
  languageName: "Português",
  boot: [
    "Carregando...",
    "comunidade.h",
    "gente_boa.h",
    "galera_hackuda.h",
    "a_sua_ajuda.h"
  ],
  paragraphOne:
    "Somos um grupo de pessoas interessadas em usar, remixar e compartilhar tecnologia, aprendizado, diversão e cultura de forma colaborativa e indiscriminada.",
  paragraphTwo:
    "Temos como prioridade estratégica a manutenção de um hackerspace em Natal/RN para concretizar essas aspirações.",
  paragraphThree:
    "Quer falar com a gente? Quer participar? É fácil nos achar. :)"
};
```

salve o arquivo e importe no `list.js` presente na pasta.
adicione sua lingua no objeto `languages` e pronto!

Não se esqueça de de fazer a [build](#antes-de-enviar) do código antes de commitar :)

## Antes de Enviar

Após qualquer alteração no código, rode o comando `yarn build` para gerar os arquivos que serão usados no site quando estiver no ar. caso não faça isso não terá o código rodando no site.
