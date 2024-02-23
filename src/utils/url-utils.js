// Function to parse query parameters from a URL
const parseQueryString = (url) => {
  const queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }

  const params = {};
  const keyValuePairs = queryString.split('&');

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split('=');
    params[key] = decodeURIComponent(value || '');
  });

  return params;
};

const getHostFromUrl = (url) => {
  const regex = /^(?:[^:\n]+:\/\/)?([^:#/\n]*)/;
  const match = url.match(regex);
  const host = match ? match[1] : null;
  return host;
};

export default {
  parseQueryString,
  getHostFromUrl
};
