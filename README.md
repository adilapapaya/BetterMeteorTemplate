A better starting template for Meteor.js

## The Setup
_Note: app-name corresponds to the name of your app_

###### Create the app
```bash
meteor create app-name
cd app-name
rm app-name* 
```

###### Optional: Remove all Meteor's templates.
Note: If you remove these files, nothing will show up when you first run Meteor -- you will need to initialize your app with the various html, js, and css files first with actual `code stuff and word things;`.
```bash
rm app-name* 
```
###### Now create the appropriate directories
```bash
mkdir client server public lib 
```

###### Optional: Initialize the main.* files.
```bash
mkfile b main.{css,js,html}
```

###### Finally, include the packages you want to use.
(You may need to wait a few seconds after entering each of these.)
```bash
meteor add bootstrap
meteor add npm
meteor add d3
```

## Why?
The typical Meteor.js template is a nice start but I've found that I then end up spending the next 5 minutes undoing their defaults and then adding/organizing things to better align with Meteor.js best practices and what I'm actually using Meteor for. A brief summary of the thought process is listed below.

###### Directory Structure
Per the docs, 
* /server: Code in the /server directory only runs on the server. 
* /client: Code in the /client directory only runs on the client
* /lib: Files in /lib are loaded before anything else.
* /public: Used to store your static assets (fonts,images, etc).

That's why we created those folders after initializing the app.

The main.* files get loaded last so we also create those files. You can always skip that step or just leave those files blank and the world will not explode. 

##### Packages
I always load bootstrap, npm and d3. If any of these packages are server-side packages, you'll also see a `packages` folder pop up in your app directory. 




 