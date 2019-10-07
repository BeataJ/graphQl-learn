const express = require('express');
const expressGraphQL = require('express-graphql');
app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true
}))
app.listen(5000, () => console.log('server is running port 5000'))