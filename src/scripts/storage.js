const CACHE_KEY = 'current_base_url';

const checkForStorage = () => {
  return typeof Storage !== 'undefined';
};

const setURL = (url) => {
  if (checkForStorage()) {
    localStorage.setItem(CACHE_KEY, url);
  }
};

const getCurrentURL = () => {
  if (checkForStorage()) {
    return localStorage.getItem(CACHE_KEY) || '';
  } else {
    return '';
  }
};

export { setURL, getCurrentURL };
