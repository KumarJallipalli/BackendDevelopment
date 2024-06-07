/**
What is ExpressJS..?
        - ExpressJS is a Fast, unopinionated, minimalist web framework for Node.js that helps us to make web applications

What are Ports..?
        - `ports` → logical endpoints of a network connection
        - ports are used to exchange information between a web server & a web client


Creating an Express Application
        - `npm init` → This utility will walk you through creating a package.json file.
            - Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.
        - `npm install express` → Install express framework
        - Embedded the code from offical page to create a simplest Express app
        - `node index.js` → starts the server & listens continuosly on the specified port for any connections/requests


NOTE:
        `npm init` → creates package.json
        `npm install <package-name>` → creates node_modules && package-lock.json



- The `var app = express()` statement creates a new express application
    - `express()` is the execution of createApplication() from express.js module & returns an Object called `app`
    - But this `app` is returned as a function from createApplication
    - Then how come this became an Object..?
        - using the merge-descriptors libraries `mixin` function, which assigns the methods defined in `proto`, it became an Object
        - But still it’s `type of` is a function but behaves like an Object

`app.listen()` → listens to all the incoming connections/requests on specified port 
        - Port → It specifies the port on which we want our app to listen.
        - Callback (Optional) → gets executed, once your app starts listening to the specified port.

`app.get()` → Routes HTTP GET requests to the specified path with the specified callback functions.
        - It basically handles the GET request on the specified path by executing the callback fn
        - path → The path for which the middleware function is invoked
        - CB → gets executed, once a GET request is sent to specified path



What is middleware functions..?

    - `Middleware functions` → functions that have access to the request object (`req`), the response object (`res`), and the `next` function
        - The `req` object represents the HTTP request
        - The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.
        - The `next` function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.


What is middleware..?
    - `Middleware` → A request handler that allows you to intercept and manipulate requests and responses before they reach route handlers
    - They are the functions that are invoked by the Express.js routing layer



What is dotenv package..?
- Dotenv is a zero-dependency module that loads environment variables from a `.env` file into **`process.env`**
- The `process.env` Obj→ hosts all the environment variables that were set at the moment the process was started.
- `npm install dotenv` → installs dotenv package
    - `require('dotenv').config()` → Imports the dotenv module
    - `console.log(process.env)` → prints the `process.env` obj

NOTE:
    This `process.env` is very usefull during production deployment where the mentioned port is NOT available to use in the deploying machine
    Then, the deployment process itself will dynamically change the port number according to the availabilty
*/