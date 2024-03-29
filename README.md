

# Free portfolio template

A customizable free template, perfect for creating personal or small business websites. Mainly based on just HTML, CSS, and Javascript, this template provides a hassle-free starting point for a personal website creation. Enjoy!

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

If you want to generate a fav icon, upload a new image to __favicon.io__. Then download and replace icons in the __fav-icon__ folder

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

* The default font used in this project is the Tailwind's default font. If a different font is desired, it can be easily imported within __theme.css__ by adding an import line such as this one:

```@import url('https://fonts.googleapis.com/css2?family=[FONT_NAME]&display=swap');```

And then, we can set default font-family on the same file:

```html, body { font-family: '[FONT_NAME]', sans-serif; }```

### Icons

In this project, icons take the form of standard .svg files, offering us scalable vector-based images that perfectly suit our needs.

### How Tailwind CSS is used within this project

Incorporating Tailwind CSS into this project will significantly reduce our reliance on custom CSS. While basic CSS suffices for smaller projects, Tailwind provides an array of pre-designed utility classes, streamlining common styling tasks like crafting adaptable containers, aligning elements precisely, and implementing padding with ease. The default Tailwind font-family will automatically be considered for our <html> element, but rest assured, we can effortlessly customize fonts as stated in this same documentation.

### Routing

This website template is designed using the concept of Single Page Application (SPA), where the content is dynamically loaded through JavaScript. The routing system is responsible for fetching the data from the data folder and injecting it into the appropriate page templates. Due to this approach, the initial server request does not have access to the inner pages, hence a redirect to the index.html file is necessary to handle the routing and display the content correctly. A redirect script for Netlify servers is provided in the [routing](routing.md) documentation. If you plan on hosting the website on a different service, it's important to familiarize yourself with their server rules and set up the necessary redirect accordingly.

### Customizing the Template for Your Own Use

This website template is free for you to download, modify, and use for your own website. While I (Renato Lins) ask that my name is credited somewhere on the website, this is not a requirement. To update the website, you can make changes to the following without affecting the website's structure:

* Header logo and text (found in index.html)
* Footer information, icons, and links (found in index.html)
* Page content stored in the data folder for each individual page
* Homepage image (stored in the images folder and defined in main.css)

### General tips

* Compress your images to reduce their file size and improve your website's loading speed. Services like iloveimg.com can help you optimize your images without sacrificing quality
* Whenever possible, use .svg icons instead of other file formats. SVGs are scalable and won't lose quality even on high-resolution monitors
* Make sure to include a favorite icon for your website. A well-designed icon can make your site more recognizable and add a professional touch. You can easily generate a favicon using services like favicon.io
* This project utilizes Prettier for maintaining consistent code formatting. To ensure the tool works correctly, please refrain from deleting the .vscode folder and install the Prettier extension as a plugin for Visual Studio Code
* The goal of this website template is to be both simple and professional in design. While the site is well-constructed, there are several ways it could be improved. For instance, using Typescript instead of Javascript, or utilizing Sass instead of plain CSS could provide additional benefits. Additionally, the project currently lacks a bundling (build) configuration. If you wish to improve your website's score in services such as Google PageSpeed Insights, it is recommended to consider bundlers such as Vite. This can help to optimize your website's loading speed and overall performance, resulting in a better user experience.

Feel free to make the necessary adjustments to fit your needs!



