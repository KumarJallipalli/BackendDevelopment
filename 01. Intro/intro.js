/**
 * 
Two Major components in Backend
        1. A Programming Language 
        2. DB

What will we deal in backend..?
        We will always deal with data in backend.
        And data can be in any one of the 3 forms
            1. data → login strings, Objects..
            2. file 
            3. third party API 


What is Listening
    - WKT, an User/Client sends request to server & Server sends responses
    - But What does sending a request mean..?
    - entering (http://google.com) in the search bar is also a sending request & google server send us a response with google home page
    - Simillarly, any webpsite will have different pages like
        - / → home page
        - /about → about page
        - /contact→ contact page
    - And user can send request to any one of the pages to access & server must be available to listen to these incoming request & send a response back accordingly

`listen` refers to **the process where a server waits for incoming connections/requests from clients**. 
        - Server needs to listen to any/all incoming request to the whole website [ Not just for the homepage ]
        - This is a crucial step in establishing communication between the server and the clients over a network.


What are Requests..?
        - `request` is **a message sent to a server to retrieve information or perform a task**
        - The aim of the request is to access a resource on the server.
        - Clients send requests to servers, specifying actions and data
            - The specifying actions are of different types like
                - one request may simply ask for data from server
                - one request wants to update the data in the server
                - one request wants to delete the data from the server
        - Ex: When a user enters a URL into a web browser or clicks on a hyperlink, the browser sends a web request to the website's server.

NOTE:💡 
    These listenings on the website for any incoming request & sending responses is done using a Framework called `Express`
*/