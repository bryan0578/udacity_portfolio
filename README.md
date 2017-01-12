# My Udacity Portfolio
### Scope
The scope of this project was to make a portfolio website to showcase all of my Udacity projects, but also optimize images for speed as well as give it a responsive design so that all the content renders on all devices well, such as mobile phones, tablets, and computers. I used Chrome developer tools to test the portfolio in a normal size browser for desktops, and Apple iPad for tablets, and a Nexus 5 for mobile. 

### Responsive
Bootstrap serves as the framework for a responsive design while task runners such as gulp and grunt handle optimizing and resizing images. 
Using Bootstraps grid-based layout, every section has its own row and columns while classes like img-responsive are used to make sure that images resize depending on the viewport, while media queries are used to make the portfolio further responsive by customizing placement and content depending on the viewport.

### Optimization
The Grunt task runner uses a plugin called responsive-images to make copies of all of the source images and resize them into 4 sizes from small to 2x large. These images are used in the picture elements in the HTML file to show a certain image size depending on the viewport with an img tag fallback for older browsers. The Gulp task runner uses a plugin called imagemin to compress all images and optimize them for the best quality in smaller bytes so that the portfolio loads faster. A vector logo was created and uses an inline SVG for better scalability and is optimized in base 64 to compress it further better optimizing it for page speed.

### Try it out!
#### Step 1.
Download the repository from Github and save the folder on your desktop.
#### Step 2.
Open up terminal on Mac or shell program on Windows and navigate to the repository folder
```
cd Desktop/udacity_portfolio
```
#### Step 3.
Download or check to see if Node is installed. If not you can get it here https://nodejs.org/en/download/ To check if you have node installed type the following command
```
node -v
```

#### Step 4.
Download gulp and the following plugings: gulp-cache, gulp-imagemin, and browser-sync
```
npm install --save-dev gulp
npm install --save-dev gulp-cache
npm install --save-dev gulp-imagemin
npm install --save-dev browser-sync
```
#### Step 5.
Run gulp and your browser will automatically open up the portfolio project.
```
gulp
```
*To see the responsive portfolio rendered for different devices you can scale your browser down or you can use Chrome Developer Tools. 
To open Chrome Developer Tools press* **F12, Ctrl + Shift + I** *on Windows and* **Cmd + Opt + I** *on Mac and press the rectangular icon at the top of the developer tools and you can change devices.*

You can see the live at https://bryan0578.github.io/Udacity-Portfolio/ 


