const proxy = [
  {
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
  }
];
module.exports = proxy;
