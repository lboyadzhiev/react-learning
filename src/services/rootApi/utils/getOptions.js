export const getOptions = (method = 'get', body) => {
  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }

  return options;
};
