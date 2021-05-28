* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

[] create files
    [] skeleton
        [] server
            [] server.js
            [] modules
                [] pool.js
            [] public
                [] favicon.ico
                [] index.html
                [] scripts
                    [] client.js
                [] styles
                    [] style.css
                [] vendors
                    [] jquery.js
                    []bootstrap.css
                    []bootstrap-map.css
            [] routes
                []todo.router.js
        [] database.sql (empty)
        [x].gitignore
            [x] # OSX files
                .DS_Store

                # Node modules
                node_modules/

                # Logs
                logs
                *.log
                npm-debug.log*

[] create wireframe of DOM
    [] jamboard?
    [] google service?

[] build html off of wireframe
    [] id's and classes

[] get npm server up and running
    [] npm init/install
    [] express
    [] exports and requires
    [] routes skeleton?
        [] get
        [] post

[] TEST FUNCTIONALITY

[] create db in sql
    [] db name "weekend-to-do-app"
    [] create table
    [] define table rows
    [] update database.sql file

[] connect db and server
    [] pool
    [] db routes
        [] put
        [] delete 

[] TEST FUNCTIONALITY

[] styling
    [] background color of the page
    [] font family and size
    [] text color & or background color of tasks *to show whether or not they have been completed*

[] CHECK INSTRUCTIONS.MD FOR FURTHER CHECKLIST ITEMS TO ADD