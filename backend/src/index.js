const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

/*
*rota recurso
*/

/**
 * metodos  http:
 * 
 * get:buscar info no back
 * post: criar uma info no back
 * put: alterar uma info no back
 * delete: deletar uma info no back
 * 
 */
/**
 * Tipos de parametros
 * 
 * Query Params: parametros nomeados enviados na rota apos "?"(filtros/paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */
 
