# verFides project on Web Starter Kit



## Browser Support

* Chrome
* Edge
* Firefox
* Safari
* Internet Explorer


## Commands

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a [browsersync](https://browsersync.io/) script will be automatically generated, which will take care of precaching your sites' resources.


```sh
$ gulp dev
```

Same as 'gulp' command but without starting the local server.


### Serve the Fully Built & Optimized Site

```sh
$ gulp production
```

`gulp production` task creates the `production/` folder in the root of the project with **assets files only**. It will **help you** to **create clear** instances of code for the **production** or **further implementation**.


### Structure

```
├── assets          #Folder with files after compiling
├── src             #Folder with sources
├── tasks           #Folder with tasks for gulpfile
├── LICENSE
├── README.md
├── gulp-config.js  #Config for gulp
├── gulpfile.js     #File with gulp tasks
├── index.html      #Main application
└── package.json    #File with dependencies

```

`Tasks` - folder for gulpfile tasks.
In `package.json` you can find all the dependencies.
In `src` folder you can find all sources for the project (images, sass , javascript files).

### `src` folder structure

```
├── images                      #Folder for storing images
├── js                          #Folder for storing js files
   ├── modules                  #Folder for storing js modules
   ├── app.js                   #Main js file
├── scss
   ├── abstracts                #Folder for storing scss files
      ├── _functions.scss       #Sass functions
      ├── _helpers.scss         #Sass helpers
      ├── _mixins.scss          #Sass mixins
      ├── _variables.scss       #Sass variables that we can use in our scss files
   ├── base                     #Folder for storing base styles
      ├── _forms.scss           #Sass styles for forms      
      ├── _main.scss            #Main scss file for base styles      
      ├── _reset.scss           #Sass reset
      ├── _typography.scss      #Sass styles for text      
   ├── components               #Global Reusable Presentational Components
   ├── layout                   #Global layout
   ├── pages                    #Global styles for pages
   ├── style.scss               #Main scss file (can be used for importing another files)
#This `templates` folder will be created if you choose a Pug option using jcn
├── templates                   #Folder with pug templates
   ├── layouts                  #Folder with pug layouts
      ├── default.pug           #Example of the pug layout
   ├── mixins                   #Folder with pug mixins
      ├── article.pug           #Example of the pug mixin
   ├── views                    #Folder with pug pages
      ├── blog.pug              #Example of a blog page
      ├── index.pug             #Example of a index page
├── vendor_entries              #Folder for vendor entries(plugins)
  ├── vendor.js                 #File for plugins js 
  ├── vendor.scss               #File for plugins styles

```

Use `images` folder to add your graphic files, `modules` to add your javascript modules (don't forget to include it in app.js), `scss` folder to add your styles for the project. You can create, delete files and folders in `scss`, but don't forget to include them in `style.scss` file .

Use `vendor_entries` to include plugins into your project.


### Tasks

|Task                               | Description                                                                                                                                                                                                                                               |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| browser-sync-server | Browsersync can watch your files as you work. Changes you make will either be injected into the page (CSS & images) or will cause all browsers to do a full-page refresh.                      |
| build-custom-js                         | Compiles all custom js from `src/js`.                                                                                                      |
| build-js-vendors               | minifies and сompiles all vendor js from `src/vendor_entries`.                                                                                                |
| build-sass-production               | Compiles and minifies all custom scss from `src/scss` to `production`   folder.                                                                                               |
| build-sass                   | Compiles all custom scss from `src/scss` to `assets/css`   folder.  |
| build-styles-vendors                 | Compiles and minifies all plugins  scss from `src/vendor_entries` to `production`   folder.                                                                                                                                                                            |
| clean-production                | `production` folder removing.                                                                                                                           |
| copy-folders           | Need to copy all folders from sources to assets.                       |
| templates           | Compiles all pug files into html files.                       |
| html-hint           | Need to hint html files.                    |
| es-lint           | Need to lint js files.                      |
| image-clean           | Removing images.                    |
| image-min           | We use this to minify images.                    |
| watch           | Task for watching all the changes.                   |
| compile-sass-files           | Compiles all custom scss files listed in the `gulp-config.js` to `assets/css`   folder                   |
