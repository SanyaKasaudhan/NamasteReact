## Namaste React Course by Akshay Saini
# _Chapter 02 - Igniting our App_


## Q: What is `NPM`?
A: It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 
- `npm` alternative is `yarn`

### How to initialize `npm`?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q: What is `Parcel/Webpack`? Why do we need it?
A: Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.
### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```

## Q: What is `.parcel-cache`
A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q: What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## Q: What is difference between `dependencies` vs `devDependencies`?
A: Dependencies should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
DevDependencies should contain modules/packages a developer needs during development.
such as, parcel, webpack, vite, mocha.
These packages are necessary only while you are developing your project, not necessary on production.
To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```


## Q: What is Tree Shaking?
A: Tree shaking is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Q: What is Hot Module Replacement?
A: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## Q: List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
A: 5 superpowers of Parcel:
* HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
* File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* Minification - Minification is the process of minimizing code and markup in your web pages and script files.
* Image optimization
* Caching while development


## Q: What is `.gitignore`? What should we add and not add into it?
A: The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
package-lock.json should not add into your .gitignore file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## Q: What is the difference between `package.json` and `package-lock.json`
A: `package.json`:
* this file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs wll be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version.
* **^** : “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present , that means only the version specified in `package.json` file is used in the development.


## Q: Why should I not modify `package-lock.json`?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
Don't push `node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Q: What is the `dist` folder?
A: The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Q: What is `browserslist`?
A: Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
-------------------------*************************----------------------------------------


React - Igniting Our APP
What is NPM?
NPM is world's largest software registry. It is open source and used by developers to borrow or share packages.

Bundlers:
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. It produces the minified and super optimised code for the production build for the server.

What is Parcel/Webpack? Why do we need it?
Parcel and Webpack both are bundlers.

Parcel
The zero configuration build tool
Initial build is slow but speed improves for subsequent bundles
Customization is minumum
Low community and uses
Webpack
Configuration Required
Initial bundle speed is fast
Customization is higly available
High community and widely used for enterprise application
what is .parcel-cache?
.parcel-cache is file which is auto genearted by parcel during building of the application. it is used by the watcher algorithm for subsequent chnages. So that hot module replacement take place and build time minimised for subsequent builds.

What is npx ?
Node Package Execute Run packages without downloading using npx.

- What is difference between dependencies vs devDependencies.
devDependencies is the dependencies which are only be used for development environment.

dependencies dependencies contains those packages information which are used for development as well as for production.

package.json
 "devDependencies": {
    "parcel": "^2.8.2",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "browserslist":[
    "last 2 versions"
  ]
}
What is Tree Shaking?
Removel of dead, unused and unwanted code is known as Tree Shaking. it removes the unused code from the packages installed and produces the only useful production code.

What is Hot Module Replacement?
When you make a change, Parcel automatically updates your code in the browser – no page reload necessary! It uses file watcher algorithm (C++) and track the changes and also maintain .parcel-cache. and Hot Reaload.

List of superpowers of Parcel?
HMR - HOT Module Replacement
Bundling
Minifying & Cleaning the code
Manage dev and production builds
Tree Shaking
Manage Port Number
Consistent Hashing algorithm
Proved http and https in dev
Image & media file optimization(compression)
What is .gitignore? What should we add and not add into it?
.gitignore is a file containing the file which is auto generated on server. As node_modules``.parcel-cache,dist.

File pushed to git:

source code files
package.json
package-lock.json
What is the difference between package.json and package-lock.json
package.json is the configuration which npm needs to run itself. Contains info about main, scripts, author, isc, etc.

package-lock.json an important file which contains exact version of packages being used at production. To avoid uncertainities wherein the version used at devopment differs from that at production, package-lock.json locks the exact version of packages. Keeps a snapshot of which version your project is using.

Never ever put package-lock.json in .gitignore It Also stores hash of modules to maintain integrity. package-lock.json insure that the version used at production is same as that used at development.

Why should I not modify package-lock.json?
its works in my local environment but not in production, if you modify the packages-lock.json it's made difference between local and dev environment.

What is node_modules ? Is it a good idea to push that on git?
It's world's heaviest element 😀. And auto generated by packages.json and package-lock.json So, no need to push it on Git.

What is the dist folder?
Dist floder contains the minified and optimised files which generated by Parcel for every subsequent build and is used for HMR.

- What is browserlists
A node package which comes along the way with Parcel and is responsible to make our app compatible with older browsers.

It provides the ability to write customized queries for including support for various browsers and make our app accessible to a larger audience.

  "browserslist":[
    "last 2 versions"
  ]
}
or

  "browserslist":[
    "last 2 versions of chrome",
  ]
}
Note: It's not mean that it only run in chrome.
But it assures that it defenetely run in the chrome.
Browserlists

Project Work:
intialize npm into your repo
  npm init 
install react and react-dom
  npm install react
  npm install react-dom 
remove CDN links of react
install parcel (as devDependencies)
  npm install -D parcel 
ignite your app with parcel
  npx parcel index.html
  
  <execute using npm> parcel <entypoint of APP>
add scripts for “start” and “build” with parcel commands
package.json
 "scripts": {
    "start": "parcel index.html",
    "build":"parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
Now, for staring & building use following command:

Before Script	After Script
npx parcel index.htm	npm run start OR npm start
npx parcel build index.html	npm run build or npm build
add .gitignore file
  npm init 
add browserlists
build a production version of your code using `parcel build
  npx parcel build index.html 