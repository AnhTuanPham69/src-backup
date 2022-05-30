/* eslint-disable */
import moment from 'moment';
import i18next from 'i18next';

// export const formatUnixToDate = unit => moment.unix(unit).format();

export const upperFirstChar = (text) => {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};

export const lowerFirstChar = (text) => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};

export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const formatDateTime = (text) => {
  return text
    ? moment(text).format('DD/MM/YY, hh:mma')
    : moment().format('DD/MM/YY, hh:mma');
};

export const formatDate = (text, type = 'DD/MMM/YYYY') => {
  return text ? moment(text).format(type) : moment().format(type);
};

export const formatTime = (text) => {
  return text ? moment(text).format('hh:mma') : null;
};

export const numberWithCommas = (number) => {
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const encodeJsonToURI = (params) => {
  return Object.keys(params)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const stringToSlug = (e) => {
  let str = e;
  str = unidecode(str).toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};
export const makeActionName = (text) => {
  return lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      '',
    ),
  );
};

export const formatMoney = (number) => {
  if (number > 99999) {
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier == 0) {
      return number;
    }
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;

    return scaled.toFixed(2) + suffix;
  } else {
    return number;
  }
};

export const inputNumberFormatter = () => {
  return {
    formatter: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: (value) => value.replace(/\\s?|(,*)/g, ''),
    ruleType: 'number',
  };
};
