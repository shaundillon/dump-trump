import fetch from 'unfetch';

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw res;
  }
}


export function request(url, body) {
  return new Promise(function(resolve, reject) {
    fetch(url, body)
        .then(checkStatus)
        .then(res => resolve(res))
        .catch(err => reject(err));
  });
}
