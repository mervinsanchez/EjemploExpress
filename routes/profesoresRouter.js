const express = require('express');
const bodyParser = require('body-parser');

const profesoresRouter = express.Router();

profesoresRouter.use(bodyParser.json());

profesoresRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    .get((req, res, next) => {

        var o = {} // empty Object
        var key = 'Orientation Sensor';
        o[key] = []; // empty Array, which you can push() values into

        var data = {
            sampleTime: '1450632410296',
            data: '76.36731:3.4651554:0.5665419'
        };
        var data2 = {
            sampleTime: '1450632410296',
            data: '78.15431:0.5247617:-0.20050584'
        };
        o[key].push(data);
        o[key].push(data2);
        // res.end('Este metodo retornara la lista de profesores' );
        res.json(o);
    })
    .post((req, res, next) => {
        res.end('Se agregare el estudiante ' + req.body.name + ' que vive en : ' + req.body.address);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('el metodo PUT no es soportado en  /profesores');
    })
    .delete((req, res, next) => {
        res.end('Eliminando todos los profesores');
    });

profesoresRouter.route('/:profesorId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })
    .get((req, res, next) => {
        res.end('Envia todos los detalles del profesor con id: ' + req.params.estudianteId);
    })
    .post((req, res, next) => {
        res.end('la operacion POST no es soportada en  /profesores/');
    })

module.exports = profesoresRouter;