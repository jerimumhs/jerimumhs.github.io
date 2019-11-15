# Jerimum Hackerspace website

![Logo Jerimum 🤘🏿](https://raw.githubusercontent.com/jerimumhs/jerimumhs.github.io/feature/vue/public/icon.png "Comunidade Jerimum")

Somos um grupo de pessoas interessadas em usar, remixar e compartilhar tecnologia, aprendizado, diversão e cultura de forma
colaborativa e indiscriminada.

Temos como prioridade estratégica a manutenção de um hackerspace em Natal/RN para concretizar essas aspirações.

Quer falar com a gente? Quer participar? É fácil nos achar. :)

[🚀](https://t.me/JerimumHS)
[🐦](https://twitter.com/JerimumHS)

Como ajudar?

- [traduções](#traduções)

## Como rodar o projeto

> é necessário ter instalado na sua máquina o [node](https://nodejs.org/en/download/) e [npm](https://docs.npmjs.com/cli/install)

Basta rodar o comando (atalho para o `npm install`)
```
make install
```

e logo após (atalho para o `npm run serve`)
```
make serve
```

## Traduções
> As traduções se encontram na [pasta de locales](https://github.com/jerimumhs/jerimumhs.github.io/tree/feature/vue/src/locales)

Crie um arquivo `.json` com a tradução desejada.
```
Ex.: Japonês -> `jp.json`
```

e cole o seguinte template fazendo as alterações desejadas.

```javascript
{
  "languageName": "Portugês",
  "boot": [
    "Carregando...",
    "comunidade.h",
    "gente_boa.h",
    "galera_hackuda.h",
    "a_sua_ajuda.h"
  ],
  "paragraphOne": "Somos um grupo de pessoas interessadas em usar, remixar e compartilhar tecnologia, aprendizado, diversão e cultura de forma colaborativa e indiscriminada.",
  "paragraphTwo": "Temos como prioridade estratégica a manutenção de um hackerspace em Natal/RN para concretizar essas aspirações.",
  "paragraphThree": "Quer falar com a gente? Quer participar? É fácil nos achar. :)"
}
```

Basta salvar o arquivo que ele será carregado automaticamente como uma tradução disponível.
