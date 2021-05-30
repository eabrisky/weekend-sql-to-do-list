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

router.put('/:id', (req, res) => {
    const taskId = req.params.id; // data from client-side put
  
    let isItComplete = req.body.completed;
  
    let queryString = ''; // queryString will be one of two arguments for the pool.query fn
  
    if (isItComplete === 'TRUE'){
        queryString = 'UPDATE "todo" SET "completed"=TRUE WHERE "todo".id= $1;'; // $1 comes from url, it is req.params.id
    } // end if

    else {console.log('Could not evaluate req.body.completed. Is .completed connected correctly in client.js?');
    };
  
    pool.query(queryString, [taskId]) // taskID is $1
        .then(response => {
            console.log(response.rowCount);
            res.sendStatus(202); // created
        }) // end .then
        .catch(err => {
            console.log('Server could not update task completion status due to', err);
            res.sendStatus(500); // internal server error
        }); // end .catch
  }) // end .put

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