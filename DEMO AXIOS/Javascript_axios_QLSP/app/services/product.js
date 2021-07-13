const updateProduct = function (idUpdate, prod) {
  return axios({
    url: "https://60bd865bace4d50017aab191.mockapi.io/Product/" + idUpdate,
    method: "PUT",
    data: prod,
  });
};

const creatAPIProduct = function (prod) {
  return axios({
    url: "https://60bd865bace4d50017aab191.mockapi.io/Product",
    method: "POST",
    data: prod,
  });
};

const getAPIValuetoUpdate = function (id) {
  return axios({
    url: "https://60bd865bace4d50017aab191.mockapi.io/Product/" + id,
    method: "GET",
  });
};

const deleAPIProduct = function (id) {
  return axios({
    url: "https://60bd865bace4d50017aab191.mockapi.io/Product/" + id,
    method: "DELETE",
  });
};

const getAllProduct = function () {
  return axios({
    url: "https://60bd865bace4d50017aab191.mockapi.io/Product",
    method: "GET",
    data: null,
  });
};
