export const request = ({ url, ...options }) => {
  const onSuccess = (response) => response.json();
  const onError = (error) => Promise.reject(error);
  return fetch(url, { ...options, headers: { 'Content-type': 'application/json' } })
    .then(onSuccess)
    .catch(onError);
};