const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./server/database.json');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';
const expiresIn = '1h';

const createToken = payload => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

const verifyToken = token => {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err,
  );
}

const isAuthenticated = ({ email, password }) => {
  return (
    JSON.parse(
      fs.readFileSync('./server/users.json', 'UTF-8'),
    ).users.findIndex(
      user => user.email === email && user.password === password,
    ) !== -1
  );
}

server.post('/auth/register', (req, res) => {
  console.log('register endpoint called; request body:');

  const { email, password, name, cpf } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = 'Email e a senha já cadastrados';
    console.log(message);
    res.status(status).json({ status, bar: message });
    return;
  }

  fs.readFile('./server/users.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    var data = JSON.parse(data.toString());

    const LIST_ITEM_ID = data.users[data.users.length - 1].id;
    console.log(LIST_ITEM_ID);

    data.users.push({
      id: LIST_ITEM_ID + 1,
      name,
      cpf,
      email,
      password,
    }); 

    const writeData = fs.writeFile(
      './server/users.json',
      JSON.stringify(data),
      (err) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
        }
      },
    );
  });

  const ACCESS_TOKEN = createToken({ email, password });
  console.log(`Access Token:${ACCESS_TOKEN}`);
  res.status(200).json({ ACCESS_TOKEN });
});

server.post('/auth/login', (req, res) => {
  console.log('login endpoint called; request body:');

  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Email ou senha incorretos';
    res.status(status).json({ status, message });
    return;
  }

  const ACCESS_TOKEN = createToken({ email, password });
  console.log(`Access Token:${ACCESS_TOKEN}`);
  res.status(200).json({ ACCESS_TOKEN });
});

server.post('/auth/login', (req, res) => {
  console.log('login endpoint called; request body:');

  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Email ou senha incorretos';
    res.status(status).json({ status, message });
    return;
  }

  const ACCESS_TOKEN = createToken({ email, password });
  console.log(`Access Token:${ACCESS_TOKEN}`);
  res.status(200).json({ ACCESS_TOKEN });
});

server.use('/auth/login/users', (req, res) => {
  const data = JSON.parse(
    fs.readFileSync('./server/users.json', 'UTF-8')
  )
  res.status(200).json(data.users);
 });

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
  
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(
      req.headers.authorization.split(' ')[1],
    );

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = 'Access token not provided';

      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error access token is revoked';
  
    res.status(status).json({ status, message });
  }
});


server.use(router);

server.listen(8000, () => {
  console.log('Run Auth API Server');

  console.log('http://localhost:8000/auth/login');
  console.log('http://localhost:8000/auth/register');
  console.log('http://localhost:8000/auth/login/shopping');
  console.log('http://localhost:8000/auth/login/users');
});
