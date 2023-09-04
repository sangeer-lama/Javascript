function parseQueryParameters(url) {
  const searchParams = new URLSearchParams(url.split("?")[1] || "");
  const queryParams = {};

  for (const [key, value] of searchParams) {
    queryParams[key] = value;
  }

  return queryParams;
}

const url = "https://example.com/path?param1=value1&param2=value2";
const queryParams = parseQueryParameters(url);
console.log(queryParams);
