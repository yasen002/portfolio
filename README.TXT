
---------------------------PORTFOLIO TODO LIST---------------------------
*: file
-: do....

SET UP WORKFLOW

dist
  *index.html
    -write basic !html with live server
scss
  *main.scss
    -npm init,  npm i node-sass 
    -in package.json, chage "test" to "sass":"node-sass -w scss/ -o dist/css/ recursive" means: node-sass is going
     watch 'scss' file, and it is going to output all the files inside 'scss' folder to dist/css folder

git 
  *gitignore 
    -touch .gitignore  crete gitignore folder, and write 'node_modules' in the file


#2
-create basic htmls header and main tags 
-font awsome CDN
-\*box sizing border box
-define basic font styles for body tag
-define basic heading font styles
-easeOut mixin
-background-opacity mixin
-images mixin
-background mixin @if $show-home-image    .overlay method  psuedo after element
_*config.scss  @import '_config'


#3
-*manue.scss 
-*mian.js
    -slelect dom elements 
    -add classed to menu

#5
-set text color
-@function set-text-color