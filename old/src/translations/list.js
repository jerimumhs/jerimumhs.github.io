import pt from '@translations/pt';
import en from '@translations/en';

import _ from 'lodash';

const lsKey = 'jhs_lang',
      languages = {
        pt,
        en
      },
      langKeys = Object.keys(languages);

let language = localStorage.getItem(lsKey) || navigator.language.split('-')[0].toLowerCase(),
    fallbackLang = 'pt';

let list = function() {
  let lang = [];

  for (let key of Object.keys(languages)) {
    lang.push({
      name: key,
      data: languages[key]
    });
  }

  return lang;
}();

function translate(key, forceLanguage) {
  let lang = languages[forceLanguage || language];

  if (!lang) {
    lang = languages[fallbackLang];
  }

  return _.get(lang, key) || key;
}

function setLang(lang) {
  if (!languages[lang]) {
    throw new Error('Language does not exists, please use an available language!');

    return;
  }

  language = lang;
  localStorage.setItem(lsKey, language);

  return lang;  
}

// EXPORTS
export default list;
export {
  languages,
  translate,
  setLang,
  langKeys
};
