React-4-FoodOrdering-App
Config Driven UI?
A dynamic UI which is changes based on data known as config driven UI. See if people on different location (As food odering App) see different data(UI).Basically, contoling UI by some configuration provided by backend API.

optional Chaining ?
Define props in React?
Passing arguments inside the component is known as props. Props is a short hand of properties inside component. props as name is not mandatory it is only good proctice used by the community of developers.

 <RestaurantCard restaurantList={restaurantList[0]} />

Can we pass multiple props?
Yes, You can pass.

<RestaurantCard restaurantList={restaurantList[0]} neame="Andrew"/>
what is spread Operator?
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

O/P: 6

why we use map instead of loop?
map is a best way to do functional programming. In industry you will always see map in large scale.

 restaurantList.map(Element => <RestaurantCard {...Element.data} />);

 or

 restaurantList.map(Element =>{
    return <RestaurantCard {...Element.data} />
 });

Virtual DOM?
It is not the only use in React, it is Software Engineering concept. Virtual Dom is a same representation of DOM tree in memory and sync with the real DOM using reconciliation process. Reconciliation uses Diff algorithm to find diff between trees (Real DOM diff Vrtual Dom) and it determines what portion of UI need to be changed or re-render.

why we need unique key for element?
Because, diff algorithm easily identifiy that which react element was their and which new one come, where it will be placed in dom tree. This is what makes react fast. The key only has to be unique among its siblings, not globally unique.

No key <<<<< Index key << uniques key

<div> <div> <div> <div>    <-----  new <div>  React confuse (where to place it) 

<div key="1"> <div key="2"> <div key="3"> <div key="4">       <----- new <div key="5"> (easily identify and render it)

is JSX is mandantory for React?
No, you can create the react element using react.createElement(), but it becomes more difficult to mamnage.

Is ES6 is mandatory for React?
No, You can use pure javaScript code but ES6 provides more features and functional programming concept like map, filter, reduce spread opeator etc which makes the life more easy.

{Title} vs <Title /> vs <Title></Title>
{Title} it shows the error: Functions are not valid as a React child.
<Title /> vs <Title></Title> both works fine.
What is <React.Fragment></React.Fragment> and <></>?
<></> this is a short hand of <React.Fragment></React.Fragment> it will return the empty tag to avoiding the extra element div to rap the react element and it allows to return single parent because jsx supports single parent. Fragments let you group a list of children without adding extra nodes to the DOM.

key is the only attribute that can be passed to Fragment
What is config driven UI?
It is a contract between UI and Fronted. and UI is designed such a way that it chnages according to data produced by the backed.

See if you need show product or services location wise So you can't redesign web site for different city. In order to achive dynamic UI the config driven UI concept is used.
What is React Fiber?
React fiber is a ongoing reimplementation of React's core algorithm. To make react more efficient and Fast.

-------------------------------------******************************-------------------------------------------

JSX:

const element = <h1>Hello, world!</h1>;
This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. 
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. 
React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

````````````````````````````````````````````````````````````````````````````````````````````````````````

React.createElement vs JSX:

We would use React.createElement() instead of JSX when we do not want to set up compilation for our project, which the use of JSX requires!
const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

````````````````````````````````````````````````````````````````````````````````````````````````````````

Benefits of JSX:

JSX has the following advantages:

JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.
JSX also allows React to show more useful error and warning messages.
If one is familiar with HTML, it is quite easy to use JSX when building React application
Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

````````````````````````````````````````````````````````````````````````````````````````````````````````

Behind the scenes of JSX:

Because JSX is not valid JavaScript, browsers can’t read it directly; they do not know what to do with it, so we need a transpiler to translate it to React.createElement() calls. We need transpilers (a compiler that translates one form of syntax into another) like Babel or TypeScript to compile JSX into a browser-compatible version.

This occurs during the build process, so the browser will never know JSX was present in the first place. The browser, in turn, receives a tree of objects that have been described using the React API.

In addition, when we write modern JavaScript, especially some of the features introduced in ECMAScript 6, some older browsers can’t make sense of these features. We need to use a transpiler to convert ES6 to ES5.

That’s exactly how it works with JSX as well. Consider this example:

import React from 'react'
function Greet(){
  return <h1>Hello World!</h1>
}
JavaScript
This is a simple component that renders “Hello World” in the browser, and it returns what appears to be HTML, but it isn’t. The h1 tag rendered by the Greet component is a pure JavaScript function call to React.createElement().

The above example would compile into this before being used by the browser.

import React from 'react'
function Greet() {
  return React.createElement("h1", {}, "Hello, World!")
}
JavaScript
Notice how in the JSX example above, we didn’t exactly reference the instance of React we imported, but, when compiled, it calls the React.createElement() function. So we need to have React in scope for JavaScript to know what to do with the compiled code.

The createElement() function accepts three parameters and returns a React element:

React.createElement(
  type,
  [props],
  [...children]
)
JavaScript
It is not required to use JSX while writing React, but it makes the development and debugging process easier for developers.

Let’s make a React component using JSX and see how it translates to regular JavaScript function calls.

import React from 'react'

  function App (){
    return (
      <div>
    <p>This is a list</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </div>
  );
};
JavaScript
The compiled code should look like this:

import React from 'react'

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "This is a list"),
    React.createElement(
    "ul",
    null,
    React.createElement("li", null, "List item 1"),
    React.createElement("li", null, "List item 2")));
  }
JavaScript
This is also how you would write React without JSX. With a bit of nesting, we can see that it is beginning to get unreadable and ugly. Not only does it look difficult to code, but it also looks difficult to maintain. That’s where JSX comes in, combining the beauty of HTML and the power of JavaScript.

React.createElement() function in the example above would return an object like this:

{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
      "children": [
        {
          "type": "p",
          "key": null,
          "ref": null,
          "props": {
            "children": "This is a list"
          },
          "_owner": null
        },
        {
          "type": "ul",
          "key": null,
          "ref": null,
          "props": {
            "children": [
              {
                "type": "li",
                "props": {
                  "children": "List item 1"
                },
                // truncated for brevity
              },
              {
                "type": "li",
                "props": {
                  "children": "List item 2"
                },
                // truncated for brevity
              }
            ]
          },
          "_owner": null
        }
      ]
    },
    "_owner": null
}
JavaScript
These objects are known as React elements, but they are just plain JavaScript objects. They describe what you want to see on the screen. They represent HTML elements, and they do not live on the page (the “real” DOM)—they live on the virtual DOM. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM.

````````````````````````````````````````````````````````````````````````````````````````````````````````


babel and parcel role in JSX:

Because JSX is not valid JavaScript, browsers can’t read it directly; they do not know what to do with it, so we need a transpiler to translate it to React.createElement() calls. We need transpilers (a compiler that translates one form of syntax into another) like Babel or TypeScript to compile JSX into a browser-compatible version. Parcel has babel as dependency which helps to convert JSX to browser readable javascript code.

````````````````````````````````````````````````````````````````````````````````````````````````````````

Components in React:

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 

````````````````````````````````````````````````````````````````````````````````````````````````````````

Functional components in React:

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 

````````````````````````````````````````````````````````````````````````````````````````````````````````

Component Composition in React:

In React, we can make components more generic by accepting props, which are to React components what parameters are to functions.

Component composition is the name for passing components as props to other components, thus creating new components with other components.

````````````````````````````````````````````````````````````````````````````````````````````````````````

## Q: Is `JSX` mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```


## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React lement. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```


## Q: What is `Reconciliation` in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.


## Q: What is `React Fiber`?
A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance


## Q: Why do we need `keys` in React?
A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```


## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


## Q: What is `props in React`? Ways to.
A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?
A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.


## Q: Difference between `Virtual DOM` and `Real DOM`?
A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the Ul of your application | It is only a virtual representation of the DOM |
