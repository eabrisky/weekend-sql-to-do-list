$(document).ready(readyNow);

function readyNow(){
    // console.log('in readyNow');
    
    // C L I C K   L I S T E N E R S

    //POST
    $('#commitTask').on('click', commitTask);

    // DELETE
    $('#taskTableBody').on('click', '.deleteTask', deleteTask);

    // get tasks onto DOM on page load
    getTasks();
} // end readyNow fn



// GET

function getTasks() {
    console.log('in getTasks');
    $.ajax({
      type: 'GET',
      url: '/todo'
    }).then(function(response) {
      console.log(response);
      appendTasks(response);
    }).catch(function(error){
      console.log('did not receive todo table from server,', error);
    });
  }

function appendTasks(tasks) {
    $('#taskTableBody').empty();
  
    for(let i = 0; i < tasks.length; i += 1) {
      let task = tasks[i];
      // For each book, append a new row to our table
      $('#taskTableBody').append(`
        <tr>
          <td>${task.task}</td>
          <td><button class="completeTask" data-id=${task.id}>Done</button></td>
          <td><button class="deleteTask" data-id=${task.id}>Delete</button></td>
        </tr>
      `); // end append
    } // end for loop
  } // end appendTasks fn

// POST

function commitTask() {
  console.log('Commit button clicked. in commitTask');
  let task = {};
  task.task = $('#taskInput').val();
  postTask(task);
} // end commitTask fn

function postTask(committedTask) {
  $.ajax({
    type: 'POST',
    url: '/todo',
    data: committedTask
    }).then(function(response) {
      console.log('Response from server:', response);
      getTasks(); // end .then
    }).catch(function(error) {
      console.log('Error in POST', error);
      alert(`We couldn't commit to this task. Maybe you don't have to do it now!`);
    }); // end .catch
} // end postTask fn

// PUT

// function putTask(){

// } // end putTask fn

// DELETE

function deleteTask(){
    console.log('in deleteTask');
} // end deleteTasks fn