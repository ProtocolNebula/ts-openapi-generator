const jsonServer = require('json-server');
const routes = require('./routes.json');
const noStoreMiddleware = require('./no-store.middleware');
// const cors = require('cors');

const server = jsonServer.create({
  noCors: true,
  readOnly: true,
});
const router = jsonServer.router('./db.json');
const defaiultMiddlewares = jsonServer.defaults();

server.use(defaiultMiddlewares);
// server.use(cors());
server.use(noStoreMiddleware);
server.use(jsonServer.rewriter(routes));
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running at', 'http://localhost:3000');
});
