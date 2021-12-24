const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// only one endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
    

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});