[x] Create a front end experience that allows a user to create a Task.
[x] When the Task is created, it should be stored inside of a database (SQL)
[x] Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
[x] Each Task should have an option to 'Complete' or 'Delete'.
[] When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
[x] Whether or not a Task is complete should also be stored in the database.
[x] Deleting a Task should remove it both from the front end as well as the Database.

[x] create files
    [x] skeleton
        [x] server
            [x] server.js
            [x] modules
                [x] pool.js
            [x] public
                [x] favicon.ico
                [x] index.html
                [x] scripts
                    [x] client.js
                [x] styles
                    [x] style.css
                [x] vendors
                    [x] jquery.js
                    [x]bootstrap.css
                    [x]bootstrap-map.css
            [x] routes
                [x]todo.router.js
        [x] database.sql (empty)
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

[x] get npm server up and running
    [x] npm init/install
    [x] express
    [x] exports and requires
    [x] routes skeleton?
        [x] get
        [x] post

[x] TEST FUNCTIONALITY

[x] create db in sql
    [x] db name "weekend-to-do-app"
    [x] create table
    [x] define table rows
    [x] update database.sql file

[x] connect db and server
    [x] pool
    [x] db routes
        [] put
        [x] delete 

[x] TEST FUNCTIONALITY

[] styling
    [x] background color of the page
    [] font family and size
    [] text color & or background color of tasks *to show whether or not they have been completed*

[] CHECK INSTRUCTIONS.MD FOR FURTHER CHECKLIST ITEMS TO ADD