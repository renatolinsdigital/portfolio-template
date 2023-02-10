

# Free portfolio template

A customizable free template, perfect for creating personal or small business websites. Mainly based on just HTML, CSS, and Javascript, this template provides a hassle-free starting point for website creation. Enjoy!

## What was used

### Stack

* HTML
* CSS
* Javascript

### CSS Frameworks

* Tailwind CSS

### Libraries:

* Swiper

### Favicon

If you want to generate a fav icon, upload a new image to favicon.io. Then download and replace icons in the __fav-icon__ folder

## Structure and organization - TBD

### Folders

__icons__: This folder contains icons, which should be stored in the SVG format.
__vendor__: This folder contains third-party libraries and frameworks.
__scripts__: This folder contains JavaScript files for the website.
__images__: This folder houses all non-icon images for the website.

### Files

__index.html__: The entry point for the site, which includes calls to all other files.
__main.js__: The main JavaScript file for the website, which handles all website behavior and calls other scripts.
__pages.js__: This file contains page templates stored as a JavaScript array. It is also the file where users of the template should make the majority of updates.

## Styling

### Theme

The theme of the website is defined in the __theme.css__ file. The file allows for customization of fonts, colors, and reusable UI elements. The following considerations were made in its design:

* The file does not import any dependencies or use variables from other files, making it easily shareable between sites using the same approach.

* The default font used is the Tailwind default font. If a different font is desired (such as Roboto), it can be easily imported by adding the following line to the file:

```@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');```

And then setting it as the font-family for the html and body elements:

```html, body { font-family: 'Roboto', sans-serif; }```

### Icons

Icons are just regular .svg files with the 'fill' property matching overall color schema

