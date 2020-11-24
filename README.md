# Trip Planner

[View my live site here.](https://jade-ux.github.io/MS02-My-Trip-Planner/)

## Purpose

The site allows users to view places of interest near their trip destination and add items to their itinerary.

## Core requirements

-	Users should be able to pick a country within a pre-defined list, search for a city within that country and then pick from a list of pre-defined place types in order to show places of interest near their destination.
-	They can then clicks on the markers to see more information and when they have found a place they want to visit, they should be able to add it to their itinerary.  

## UX

### User story 1

I am planning a holiday and want to see all the attractions near the city I will be staying in. I would like to make a list of places to see so that I can make the most of my time away.

### User story 2

I am travelling for work and want to see what I can do at my destination in my free time. I want to plan some activities around my business commitments. 

### User story 3

I am trying to decide where to travel to and would like to view all the places of interest near cities I am considering. 

## Design

I created wireframes before building the site. This helped me plan how to structure the content, the user journeys and the responsive design.

[See my wireframes here](assets/wireframes/wireframe.pdf)

After beginning the development of the website I reduced the scope of the site to focus on the core requirements only. These requirements were the country, city and activity search, the map and the itinerary creator. 

In future developments I would like to include a distance slider to allow users to change the radius of the search area and return results within their own preferred distance from their destination.

**Colours:** I chose colours from the sea, beach sand and strawberry ice cream which I feel are relaxing colours and I hope users associate these with the feeling of taking a trip away.

**Navigation:** There is no top navigation on the site as it is only a one page site. I have added a ‘Back to top’ link in the footer for mobile users.

**Responsive design:** I have used Bootstrap’s grid layout to break the design down for smaller screens, ensuring content will be visible and easy to navigate on desktop, mobile and screen sizes in between.

## Issues/challenges

### Selecting only one out of three options on the main form

In the first version of the site a user could try to type in the city input field and was not alerted to choose a country first. I have now added functionality that will alert a user if she tries to enter a city without first choosing a country. 

It was also previously possible to select an activity type without first typing in a starting point (country and city). I have now fixed this by adding functionality that will alert the user if she tries to choose an activity before first choosing a city. 

I have also added a focus function to the form functions to show the user which field she should be completing next.

### Reset

In the previous version of the website there was no reset function. I have now added a button that will allow the user to reset the main form options. 

### Itinerary

The user can add the same entry to the itinerary twice. In future developments I would add a function that prevents this and alerts the user when he is trying to add an entry if he has already added it. 

It is also possible to add an entry without a date. I would want to add functionality that stops a user from adding an entry without a date and alerts them to this. 

There is currently an issue with how the data is cleared so that additional entries after the first one added have additional elements added. In future developments I would fix this by ensuring the object created is a new object each time.

## Features

### Existing Features

-	**Select country, city and activities:** This allows the user to select their destination and choose which places of interest to see on the map.
-	**Results table:** This shows the names and a map marker for each of the results of the user’s search, in a table under the map. This allows the user to browse by name and click the marker to view more information.
-	**Map markers:** These show where the places of interest are on the map which is centered on the user’s city of choice.
-	**Info windows:** This allows the user to click on any marker on the map or results table to view more information about the place they are interested in.
-	**Add to itinerary function:** This allows the user to add a place as an entry to their itinerary, along with a date they choose.

### Features Left to Implement

-	**Email itinerary:** Functionality to allow users to email their itinerary to themselves to be added in future developments.
-	**Distance slider:** I would like to allow users to set the distance from their destination within which they would like to search for results.

## Technologies Used

- HTML5: This site was written in HTML5
- CSS3: site styled with CSS3. 
- [Bootstrap](https://getbootstrap.com/)
  - This project uses Bootstrap to speed up the development process. Some Bootstrap elements use jQuery, Popper.js and JavaScript.
-	JavaScript: to create interactive content
-	jQuery: to speed up development
-	Google Maps API 

## Testing

### Testing user stories 

I tested each user story by clicking through each step to make sure I could find the information I would need if I were one of the users.

**Testing functionality:**

-	I ran manual tests on the functionality in this way:
-	Selecting a country and activity without selecting a city: the results were that the results would drop onto the map in the center of the country. In future developments I would force the user to select a city by alerting them when they try to search for activities without first selecting a city.
-	Choosing ‘All’ in the country field and then searching a city – this does allow the user to find any city in the world which is intentional.
-	 Adding items to the itinerary without a date – this is currently possible but in future development I would disable this so that the user would have to add a date and would be alerted if they try to add an entry without one.


### Links

The site was tested for broken links using the [Dead Link Checker](https://www.deadlinkchecker.com/website-dead-link-checker.asp) and no broken links were found.

### Validating CSS

I tested my CSS code using the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) and the result was that no errors were found.

### Validating mark-up

My HTML was tested using the [W3C Markup Validation Service](https://validator.w3.org/) and the only result was a note that ‘type’ is unnecessary to add for the script reference at line 27 but I have left that in for now as it was only a warning.

I tested my JavaScript code using [JS Hint](https://jshint.com/) and the result was that there were no errors. 

### Responsive behaviour

- The site uses Bootstrap's breakpoints to break down content for small, medium and large screens, to provide a good user experience on any device.  

## Deployment

This site is deployed on GitHub pages and I deployed it in the following way:

1. Navigated to my repository on [GitHub here](https://github.com/Jade-ux/MS02-My-Trip-Planner)
2. Clicked 'Settings'
3. Scrolled down to the 'GitHub Pages' section 
4. Under 'Source' I selected 'Master Branch' as that is the branch I want to show.
5. My site was then published

[View my live site here.]( https://jade-ux.github.io/MS02-My-Trip-Planner//)

**If you would like to run my code locally you can clone the site by following these steps:**

[Instructions taken from GitHub Help, you can find out more here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

1. Visit the main page of my repository on [GitHub here.](https://github.com/Jade-ux/MS02-My-Trip-Planner)
2. Click 'Clone or download'
3. Click the icon to the right of the URL. This will allow you to clone the repository using HTTPS.
4. If you would like to clone if using SSH, click 'Use SSH'
5. On your computer open Git Bash
6. Change the directory to the folder where you would like to run the cloned directory
7. Type 'Git clone' and then paste the URL you copied from my repository in GitHub
8. Press enter and your local clone of my site will be created.

## Credits

### Content

-	The site uses the Google Maps API to search countries, cities and places.
-	I used the extensive library of Google documentation to assist with the development of the code for this site.

### Acknowledgements

- Thank you to the Code Institute Tutors for support.
- Thank you to my mentor, Dick Vlaanderen for support and guidance.
