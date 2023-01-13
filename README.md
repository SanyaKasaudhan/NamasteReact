# NamasteReact

Class Summary Chapter-01 Inception (24/12/2022)
Chapter-01 (Inception) was the first session of the Namaste React Live course. The whole class was excited about the beginning of a great course. We started learning react from scratch. Environment setup was clearly explained. Started with creating a simple Hello world program . First, using only html, then we tried to implement the same through javascript. Finally, we created a simple hello world program using React. Everything was done without installing any package. Unlike other courses which starts with create-react-app as first session, we tried writing the react code from zero. It was a true inception session for tranforming from ZERO to HERO in React.

## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


## Q: Difference between a Library and Framework?
A: A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.


## Q: What is CDN? Why do we use it?
A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: Why is React known as React?
A: React is named React because of its ability to react to changes in data.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.


## Q: What is crossorigin in script tag?
A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().


## Q: What is difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.
Development build is several times (maybe 3-5x) slower than the production build.


## Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

What is Emmet?

A. Emmet is a built-in feature in Visual Studio Code. You don’t have to install any extensions for emmet support. Emmet prevents you from writing the entire code by yourself by providing Emmet abbreviation. Emmet is enabled by default in html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less and stylus files, and also in languages that inherits from any of the above like handlebars and PHP.

````````````````````````````````````````````````````````````````````````````````````````````````````````

Difference between a Library and Framework?

A. The technical difference between a framework and library lies in a term called inversion of control.

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

````````````````````````````````````````````````````````````````````````````````````````````````````````

What is CDN? Why do we use it?

A. A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed. By caching content physically close to where a user is and reducing the distance it has to travel, latency is reduced. This process also decreases stress on origin servers by distributing the load geographically across multiple servers.

````````````````````````````````````````````````````````````````````````````````````````````````````````

Why is React known as React?

A. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.

The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

````````````````````````````````````````````````````````````````````````````````````````````````````````

What is crossorigin in script tag?

A. The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

What is difference between React and ReactDOM

A. React and ReactDOM were only recently split into two different libraries.
As the name implies, ReactDOM is the glue between React and the DOM. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.

````````````````````````````````````````````````````````````````````````````````````````````````````````

What is difference between react.development.js and react.production.js files via CDN?

A. react.development.js file is only meant for development, and not suitable for production. Minified and optimized production versions of React are in react.production.js file.

````````````````````````````````````````````````````````````````````````````````````````````````````````

 What is async and defer?

 A. defer: The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
 Deferred scripts keep their relative order, just like regular scripts.
    async: The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.
The async attribute means that a script is completely independent:
The browser doesn’t block on async scripts (like defer).
Other scripts don’t wait for async scripts, and async scripts don’t wait for them.

````````````````````````````````````````````````````````````````````````````````````````````````````````
