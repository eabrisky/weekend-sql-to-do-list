$(document).ready(readyNow);

function readyNow(){
    // console.log('in readyNow');
    
    // C L I C K   L I S T E N E R S

    //POST
    $('#commitTask').on('click', commitTask);

    // PUT
    $('#taskTableBody').on('click', '#completeTask', completeTask);

    // DELETE
    $('#taskTableBody').on('click', '#deleteTask', deletenator);

    // get tasks onto DOM on page load
    getTasks();
} // end readyNow fn



// GET

function getTasks() {
    console.log('in getTasks');
    $.ajax({
      method: 'GET',
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
      
      let toggle;

      if (task.completed === true){
       toggle = 'textMuted';
      } // end if

      $('#taskTableBody').append(`
        <tr class = ${toggle}>
          <td>${task.task}</td>
          <td><button class="button centerStuff" id="completeTask" data-id=${task.id}>Done</button></td>
          <td><button class="button centerStuff" id="deleteTask" data-id=${task.id}>Delete</button></td>
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
    method: 'POST',
    url: '/todo',
    data: committedTask // end 
    }).then(function(response) {
      console.log('Response from server:', response);
      getTasks(); // end .then
    }).catch(function(error) {
      console.log('Error in POST', error);
      alert(`We couldn't commit to this task. Maybe you don't have to do it now!`);
    }); // end .catch
} // end postTask fn

// PUT

function completeTask(){
  // console.log('in completeTask');
  handleCompleteTask($(this).data("id"), "TRUE");
  $(this).closest('[type=checkbox]').attr('checked', true);
  $(this).closest('tr').addClass("textMuted");
} // end completeTask fn

function handleCompleteTask(taskId, isComplete){
  console.log('in handleCompleteTask');
  $.ajax({
    method: 'PUT',
    url: `/todo/${taskId}`,
    data: {
      completed: isComplete
    } // end data object
  })
  .then(response => {
    console.log('COMPLETED!!');
    alert(`WOW I THOUGHT YOU'D NEVER GET THAT DONE!`);
    getTasks();
  }) // end .then
  .catch(err => {
    console.log('Could not mark complete due to:', err);
    alert('Unable to mark as completed. You sure you finished this task? 🧐');
  }); // end .catch
} // end handleCompleteTask fn

// DELETE

function deleteTask(taskId){
    // console.log('in deleteTask');
  $.ajax({
    method: 'DELETE',
    url: `/todo/${taskId}`
  }) // end method/url object
  .then(response => {
    console.log(`So we just gon' act like this task never happened? 🤨`);
    getTasks();
  }) // end .then
  .catch(err => {
    console.log(`I couldn't get rid of this task because`, err);
    alert('R E C O N S I D E R');
  }) // end .catch
} // end deleteTasks fn

function deletenator(){
  deleteTask($(this).data("id")); // argument is this specific button's associated data's id
} // end deleteTask fn