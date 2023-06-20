const BASE_URL = "http://localhost:8080";
// const BASE_URL = "http://200.13.4.226:8080";

export async function loginApi(_data) {
  console.log(_data);
  const url = BASE_URL + "/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    },
    body: JSON.stringify(_data),
  };
  const response = await fetch(url, options);

  return response.json();
}

export async function registerApi(_data) {
  console.log(_data);
  const url = BASE_URL + "/api/record";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    },
    body: JSON.stringify(_data),
  };
  const response = await fetch(url, options);

  return response.json();
}
