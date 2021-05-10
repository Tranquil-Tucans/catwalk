# catwalk
FEC Hack Reactor Project

File Structure: (add server folder (contains api folder), put src and public in client), (git ignore: modules, api keys, bundle)

**Installation and Start Instructions**

**Package Requirements:** <br/>
Node version - 14.15.1<br/>

**API Token**<br/>
You will need to acquire a Github personal access token in order to run this project successfully.<br/>

Please create a file in the root project directory named ‘.config.js', and paste in the following code:<br/>
module.exports = { TOKEN: [your_token] }<br/>

Replace the [your_token] placeholder with the API token generated, in a string format (i.e. ‘token’).<br/>

**Getting Started:**<br/>
After cloning this repository, navigate to the root directory.<br/>
NPM install<br/>
NPM run start<br/>
NPM run react<br/>
Navigate to http://localhost:3000/ in your browser to view the application.<br/>

**Index**<br/>
Project Overview<br/>
Module Descriptions<br/>
Installation and Start Instructions<br/>
Authors<br/>

**Project Overview**<br/>
Project Catwalk is a redesign of the product detail page for an outdated client-facing retail web-portal. The new user interface allows customers to browse the catalog as well as to view details and specifications, ratings and reviews, and related items for a selected product. <br/>

**Module Descriptions**<br/>
Product Overview<br/>

**Ratings and Reviews**<br/>
The ratings and reviews module is composed of two main components:<br/>
A ratings breakdown module which provides the average rating for a selected product, as well as a slider visualization of ratings given for specific features of a product.<br/>

A display of all the reviews that have been submitted for the product being viewed. Reviews are displayed two at a time, with an option for the user to view more with the “More Reviews” button.<br/>


**Related Items and Outfit**<br/>

The related items & Outfits module is composed of two carousels displaying related items to the current product and a collection of outfits the user has added.<br/>

**Features**<br/>

 - Custom navigation bar that provides the user the ability to quickly scroll through the carousels. Automatically appears when there are scrollable items and reflects user window screen size.
 - Custom navigation buttons to scroll individual cards left or right. Automatically appears when there are scrollable items and reflects user window screen size.
 - Add button for outfit collection. Sticks while scrolling.
 - Action button for related item product cards, brings up a comparison modal for the features of current product displayed vs. related item.
 - Action button for outfit cards to delete from collection.
 - Thumbnail carousel pops out when hovering over the image on each product card.
 - Star rating score displayed in linear gradient.
 - Product Cards are clickable to navigate to the selected product detail page.

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/73146132/115306581-e484d980-a11c-11eb-8120-28186032c525.gif" width="1200" height="700"></div><br/>


<div style="text-align:center"><img src="https://user-images.githubusercontent.com/73146132/115306693-0bdba680-a11d-11eb-9b6e-e6480d3f90e7.gif" width="1200" height="700"></div><br/>

**Authors**<br/>
Mikey Perez - Related Items and Outfit <br/>
Michael Moriarty - Product Overview <br/>
Nancy Yang - Ratings and Reviews Module<br/>
