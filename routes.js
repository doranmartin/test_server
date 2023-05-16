const requestListener = (req, res) => {
  console.log(req.url, req.method, req.headers)
};

module.exports = requestListener;
