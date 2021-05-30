const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo" ORDER BY "id";';
    pool.query(queryText).then(result => {
      res.send(result.rows); // Sends back the results' rows as an object
    }) // end .then
    .catch(error => {
      console.log('could not return todo table', error);
      res.sendStatus(500); // internal server error
    }); // end .catch
  }); // end .get

// POST

router.post('/',  (req, res) => {

    let newTask = req.body;

    console.log('New task', newTask, 'being added...');
  
    let queryText = `INSERT INTO "todo" ("task")
                     VALUES ($1);`; // only submitting task name, id and completed status will be auto-generated in Postico

    pool.query(queryText, [newTask.task])
      .then(result => {
        res.sendStatus(201); // created
      }) // end .then
      .catch(error => {
        console.log('Error adding new task', error);
        res.sendStatus(500); // internal server error
      }); // end .catch
  }); // end .post

// PUT



// DELETE

router.delete('/:id', (req, res) => {
    const itemToDelete = req.params.id;
    const queryString = `DELETE FROM "todo" WHERE "todo".id = $1;`;
    pool.query(queryString, [itemToDelete]) // end .query
        .then(response => {
            console.log(`Removed task with id ${itemToDelete}.`);
            res.sendStatus(200); // OK
        }) // end .then
        .catch(err => {
            console.log('ERROR ON SERVER DELETING TASK', err);
            res.sendStatus(500); // Internal server error
        }); // end .catch
  }); // end .delete

module.exports = router;