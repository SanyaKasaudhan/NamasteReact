●  What is `NPM`?

A. npm is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. 

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `Parcel/Webpack`? Why do we need it?

A. Firstly, we should know, a module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser.
Once such thing is parcel, a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `.parcel-cache`

A. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `npx` ?

A. Sometimes you might want to take a look at a specific package and try out some commands. But you cannot do that without installing the dependencies in your local node_modules folder.

That’s where npx comes in. A few of the use cases that make npx extremely helpful.

1. Run a locally installed package easily
2. Execute packages that are not previously installed

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is difference between `dependencies` vs `devDependencies`

A. The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is Tree Shaking?

A. “Tree-shaking” is a must-have performance optimization when bundling JavaScript. Tree-shaking means removing unreachable code (also known as dead code) from a bundle.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is Hot Module Replacement?

A. Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

Retain application state which is lost during a full reload.
Save valuable development time by only updating what's changed.
Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

A. Minify, Bundle, image optimization, cleaning our code, zero config
minification: Minification improve loading time of the web page. It also decreases the size of a file and it can be used for any interpreted language. Ordering matters in case of Bundling, but it does not matter in case of Minification.
For Minification of a javascript file we do the following things:

Remove the white spaces from file(s).
Remove line breaks to shorten file size.
Remove final semicolon.
Renaming local variable name and provide it a short name

zero config: It offers blazing-fast performance utilizing multicore processing and requires zero configuration. The parcel does many tasks for your development process like minifying your files so that their size will be reduced in order to make your application faster and easy to deploy.

cleaning our code: Cleaning our code or Tree shaking is removing unwanted code(like console logs) while code build which is easily handled by parcel itself during code bundling.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `.gitignore`? What should we add and not add into it?

A. A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected
We should add files that we don't want git to track like node_modules.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is the difference between `package.json` and `package-lock.json`

A. package.json:

This is a file usually found in packages. It contains meta-information about the package like versioning information, what the package is about, dependencies of the package, how to set up the package and so much more.
Properties of package.json:

name: The name of your package.

description: The purpose of your package.

main: The path to the default file which Node.js uses as a starting point for your package. In cases where your package is required without a path to a file (like this: require('package-name')), the main file is used.

scripts: It contains a list of custom scripts which can be run with npm.

dependencies: It contains dependencies which would be required by your package to work.

devDependencies: It contains dependencies which are not required for your package to be used during production.
You'd also notice the caret symbol (^) used in front of the dependencies' version numbers. This symbol signifies to npm that higher major versions of this package can be installed.

package-lock.json:

The common method of starting a package is npm init. After doing this, a package.json file is created. But when you install a package, you'd notice the package-lock.json file (usually very long) automatically created.
You'll find this file a bit similar to package.json - holding some information about your file, but there's more to it. Remember the caret symbol in package.json dependencies? You could manually remove that symbol when you install a dependency, but that would be stressful.

With package-lock.json, the versions of all dependencies your package would need are locked (-lock). This means when you run npm install on another system, npm checks this file to install the exact versions of the dependencies. If this file is absent, npm would then work with the caret symbol.

This means that you should also commit package-lock.json to your source control.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● Why should I not modify `package-lock.json`?

A. It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `node_modules` ? Is it a good idea to push that on git?

A. You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path). The node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).

This folder should not be pushed to git because there's no reason to store copies of all your dependent modules in your own GitHub project. The exact version you were using is known and stored in your package.json or package-lock.json so at any time you or anyone else using your project can download your code and then fetch all the other dependent modules from their original source.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is the `dist` folder?

A. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● What is `browserlists`

A. Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

````````````````````````````````````````````````````````````````````````````````````````````````````````

● difference between vite, parcel, webpack

A. Because Webpack is a bundler-based build tool, it must crawl, process, and concatenate the whole JavaScript file to deliver your application. This applies to both your application code and your dependencies.

The entire JavaScript bundle will then be rebuilt by Webpack when you save a file, which is why, even with HMR turned on, changes can take up to ten seconds to appear in the browser. Working on massive JavaScript applications will lead to a poor developer experience due to Webpack’s delayed feedback loop.
    While a bundler-based workflow like Webpack will have to process your entire JavaScript modules before a single browser request, Vite only processes your dependency modules before a single browser request.
        Parcel is a zero configuration web application bundler that is fast and easy to use.

````````````````````````````````````````````````````````````````````````````````````````````````````````
## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

---------------------------******************************__________________________________________________
React-3-Laying-the-foundation
Does Parcel removes console.log()?
No, Parcel doesn't remove console.log(). For removing console.log() from the production build install babel-plugin-transform-remove-console plugin and configure this plugin in our project.

npm install babel-plugin-transform-remove-console --save-dev
And create a .babelrc file and configure:

{
  "plugins": [ 
      ["transform-remove-console", 
        { "exclude": [ "error", "warn"] }
      ] ]
}
More About Plugin

What is key in React?
When we have the sibling elements then, React need to identify which items in the list are changed, updated, or deleted for modifying Browser DOM. the key is pass as a props in the elements.

const heading1 = React.createElement(
   "h1",
   {
     Key: "Unique_Key"
     id: "title",
     className:"heading1",
   },
   "Hello React from Ignite"
);

<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li> (Helps to update BDOM here)
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
It Reconciliation Concept behind the seens read about it

Note:
id (HTML) & key(React) both are different things. key is unique for every element.

how does React.createElement() Works?
React.createElement() is written by the facebook developers and at the end of day it returns an object.

`React.createElement()` => object => HTML + update BrowserDOM 
But for enterprise application we can't use react.createElement() it will meshup our code. we use something know as JSX.

what is JSX?
JSX is a html like syntax it's not pure HTML.It was developed by Facebook as a way to make it easier for developers to build user interfaces (UI) using React, a JavaScript library for building user interfaces.

const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
JSX elements can also include JavaScript expressions, using curly braces.

const age = 24;
const element = <h1>Rahul is now, {age},year old</h1>;

what is babel?
Babel is a tool that is commonly used to transpile JSX code into regular JavaScript. When you write JSX in a React app, you typically write your code in a file with a .jsx extension. When you run your app, Babel transpiles the JSX code into regular JavaScript that can be run in a web browser.

JSX ->Uses React.createElement() -> object -> HTML + update BDOM
Note:
Babel already comes with Parcel there is no need any installation and configuration.

Node_module also have package-lock.json to manage the versions of all Node_module package itself.

what is component?
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

The component name should start with captial letter this normal convention(best practice) not mandantory.

*** React-element ***

const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

*** Functional component ***

const Welcome = () => {
  return <h1>Welcome to React world</h1>;
};

*** Component Composition***

const HeaderComponent = function(){
  return (
    <div>
      {heading}                            
      <Welcome />  
      {Welcome()}
      {console.log(1+2)}
      <h1>Hello from Functional component</h1>
      <h2>heading 2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Welcome />);
root.render(<HeaderComponent />);
Power of JSX what if someone able to run JavaScript code in your system.
He will able get more informatiom of your system like, your ip-address, passwords, and can hack your system. but JSX is secure in this matter.