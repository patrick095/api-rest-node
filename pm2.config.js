module.exports = {
    apps : [
        {
          name: "api-rest-node",
          script: "./src/index.js",
          watch: true,
          env: {
              "PORT": 3001,
              "MONGODB_URL": "mongodb+srv://admin:VSK33cm@2hkgAZL@cluster0.jiyct.mongodb.net/api-rest-node?retryWrites=true&w=majority"
          },
          env_production: {
              "PORT": 3000,
              "MONGODB_URL": "mongodb+srv://admin:VSK33cm@2hkgAZL@cluster0.jiyct.mongodb.net/api-rest-node?retryWrites=true&w=majority",
          }
        }
    ]
  }