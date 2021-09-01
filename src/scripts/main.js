import { getCurrentURL, setURL } from './storage';
import { addItemEndpoint } from '../template/template-creator';

const mainPage = () => {
  renderURL();
  const btnChangeURL = document.querySelector('#btn-changeURL');
  btnChangeURL.addEventListener('click', () => {
    const url = window.prompt('Enter your base URL');
    if (url) {
      setURL(url);
      renderURL();
    }
  });

  const btnAddEndpoint = document.querySelector('#btn-addEndpoint');
  const listEndpoint = document.querySelector('.list-endpoint');
  btnAddEndpoint.addEventListener('click', () => {
    listEndpoint.innerHTML += addItemEndpoint();

    const endpoints = document.querySelectorAll('.endpoint');
    endpoints.forEach((endpointInput) => {
      endpointInput.addEventListener('input', (e) => {
        endpointInput.setAttribute('value', e.target.value);
      });
      endpointInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
          const parentInput = endpointInput.parentElement.parentElement.parentNode;
          const resultIndex = parentInput.querySelector('.result pre');
          try {
            resultIndex.innerHTML = 'Loading...';
            const response = await hitEndpoint(endpointInput.value);
            resultIndex.innerHTML = JSON.stringify(response, undefined, 2);
          } catch (error) {
            resultIndex.innerText = error;
          }
        }
      });
    });
  });
};

const renderURL = () => {
  const baseUrlHTML = document.querySelector('#base-url');
  baseUrlHTML.innerHTML = getCurrentURL();
};

const hitEndpoint = async (endpoint) => {
  const response = await fetch(`${getCurrentURL()}/${endpoint}`);
  const data = await response.json();

  return data;
};

export default mainPage;
