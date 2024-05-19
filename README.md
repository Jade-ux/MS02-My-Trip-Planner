# Trip Planner

<!--[View my live site here.](https://jade-ux.github.io/MS02-My-Trip-Planner/)-->

## Table of contents

1. [**Purpose**](#Purpose)     
2. [**UX**](#UX)
3. [**Design**](#Design) 
4. [**Issues/bugs**](#Issues/bugs)
5. [**Features**](#Features)
6. [**Technologies**](#Technologies)
7. [**Testing**](#Testing)
8. [**Deployment**](#Deployment)
9. [**Credits**](#Credits)


## Purpose

The site allows users to view places of interest near their trip destination and add items to their itinerary.

## Core requirements

-	Users should be able to pick a country within a pre-defined list, search for a city within that country and then pick from a list of pre-defined place types in order to show places of interest near their destination.
-	They can then click on the markers to see more information and when they have found a place they want to visit, they should be able to add it to their itinerary.  

## UX

### User Stories

"**As a user, I want:**"
- *to plan a holiday in one country and city. I want to plan what to do each day, choosing between different activities.*
- *to plan a holiday where I will travel to more than one city. I want to create an itinerary of activities from all the cities I wish to visit.*
- *to choose many different activity types for the city I am planning to visit and add items from each activity type to my itinerary.*

### Design

I created wireframes before building the site. This helped me plan how to structure the content, the user journeys and the responsive design.

[See my wireframes here](assets/wireframes/wireframe.pdf)

After beginning the development of the website I reduced the scope of the site to focus on the core requirements only. These requirements were the country, city and activity search, the map and the itinerary creator. 

In future developments I would like to include a distance slider to allow users to change the radius of the search area and return results within their own preferred distance from their destination.

**Colours:** I chose colours from the sea, beach sand and strawberry ice cream which I feel are relaxing colours and I hope users associate these with the feeling of taking a trip away.

**Icons:** I used icons from [Font Awesome.](https://fontawesome.com/)

**Navigation:** There is no top navigation on the site as it is only a one page site. I have added a ‘Back to top’ link in the footer for mobile users.

**Responsive design:** I have used Bootstrap’s grid layout to break the design down for smaller screens, ensuring content will be visible and easy to navigate on desktop, mobile and screen sizes in between.

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
-   **Back to top floating button** I would like to make the 'Back to top' button floating so that when the user is scrolling on mobile the button is always visible on the side of their screen.

## Technologies

- HTML5: This site was written in HTML5
- CSS3: site styled with CSS3. 
- [Bootstrap](https://getbootstrap.com/): This project uses Bootstrap to speed up the development process. Some Bootstrap elements use jQuery, Popper.js and JavaScript.
-	JavaScript: to create interactive content
-	jQuery: to speed up development
-	Google Maps API 

## Testing

### Testing user stories 

I manually tested each user story by clicking through each step to make sure I could find the information I needed:

1. As a user I should be able to select my country, city and activity to show the markers on the map for my search, then click on markers on the map to show more information and from there add the item to my itinerary. I should be able to change the activity type and add further items to my itinerary. I should be able to add many items to my itinerary and delete items I no longer want on my itinerary.

I tested this in the following way:

- 1.1. I chose a country from the country field
- 1.2. I started typing a city name in the city field and when the city I was looking for displayed in the options below the box I clicked on it to select it. I expected the map's view to change to show the city. When I selected the valid city the map panned and zoomed in to the city which is the expected result.
- 1.3. From the activities drop-down I chose one activity. I expected the markers to drop down onto the map to show all the activities in my chosen category, and for a table under the map to show all the same activities with titles to allow for easier selection. The markers dropped down showing all activities in my chosen category and the results table populated below the map with the same results, showing titles for each.
- 1.4. I clicked on a marker on the map, selected a date and clicked 'Add to itinerary'. I expected the itinerary placeholder image and text to disappear and the event to be added to the itinerary. The placeholder image and text disappeared and the event was added to the itinerary with the title of the place and the date I had chosen, plus a delete button. The result it as expected. 
- 1.5 I added a number of items until the list length was longer than the space allowed. I expected to be able to continue adding items and see a scroll bar appear so that I would be able to scroll through the items. The scroll bar did appear when the items overflowed and I was able to scroll through the list.
- 1.6 I clicked the delete item belonging to an item. Expected result: item would be deleted from the list. Actual result: the item was deleted from the list, therefore the delete functionality is working.
- 1.7. I refreshed the page and the place setter form was cleared. This is the expected result.
- 1.8 I tested adding invalid data to each field or leaving fields blank, please see the [Testing functionality section](#Testing_functionality) for results.

2. As a user who will be travelling to more than one place I should be able to select my country, city and activities and add items to my itinerary as in the user story 1. I should then be able to change my country and city, or change my city only, choose activity types again, and again add new items to the itinerary in addition to the ones that are already there.

I tested this in the following way:

- 2.1. I followed steps 1.1 to 1.6 above.
- 2.2. I then choose a new country from the country select field. Expected result: the city field should clear, the map should pan and zoom to the new country, the activities select field should reset and the markers should be cleared from the map. Actual result: The city field clears, the map pans and zooms to the new country I have set, the activity field resets and the markers are cleared from the map.
- 2.3. I type in the city field and choose a valid city from the autocomplete options shown. The map pans and zooms to the new city, as expected. 
- 2.4. I choose my activity type. Expected result: map icons should drop onto map to show places with the activity types matching the activity type I chose, if places in my chosen activity type exist in the city I have chosen. Actual result: when places matching the activity type I have chosen exist in my chosen city map icons drop onto the map to show each one. When there are no places matching the activity type, an alert pops up informing me that there are no places to show and to pick another city.

3. As a user who is looking for many different activity types I should be able to add items to my itinerary from many different activity types.
- 3.1. I follow the steps 1.1 to 1.6 above.
- 3.2. I then select a new activity from the activity field. Expected result: the markers from the previous activity choice should be cleared and markers for the new activity choice should appear on the map and results table. Actual result: markers from the previous activity are cleared and markers for the new activity type drop onto the map and populate the results table. Items in the itinerary do not clear which meets expectations as I want to add to the items already there.
- 3.3. I now add items to the itinerary in the same way as in step 1.4 above.

### Responsive design

- I have tested the website's design features and the functionality across devices and using Firefox developer tools.

Devices I tested on:

- Desktop - 950px wide and smaller (and real laptop and widescreen)
- Tablets/iPads - 768px - 412px wide
- Mobile phones - 411px - 360px wide (and a real iPhone 6)

I tested on each device in the following way:

- I opened the page and viewed the entire page to check that all features appeared as expected. 
- There were many design bugs in the beginning of my development (as this latest version is for resubmission) on mobile and I fixed each one that I could see, testing again on mobile after all fixes were applied. See the Issues/bugs section for more information on these.
- I accessed each feature, viewing the changes to the page on desktop and the selection of devices above. I checked that I could perform the actions needed on each device. All actions could be performed as expected.

## Testing_functionality:

-	I ran manual tests on the functionality in this way:
-	Selecting a country and then trying to select an activity without first choosing a city. An alert now pops up to let me know that I need to select a city before choosing activities. This is the expected result.
-	I began typing in the cities field without first choosing a country. An alert pops up to let me know I should select a country first before choosing a city. This is the expected result.
- I tried to choose an activity without first choosing a country and city. An alert pops up to let me know I should select a country and city before choosing an activity. This is the expected result.
- I entered data into the place & activities chooser form and then refreshed the browser. The form was cleared when the browser refreshed. This is the expected result.
- I entered invalid data into the city field and then tried to chose an activity. An alert pops up to tell me that the data is not valid. This is the expected result.
- I enter a country, then choose a city, then go back to the country and choose a different country. The city field is then reset which is the expected result.
- I choose a country, city and activities. Then I change the activities type. The map clears of all markers and new markers drop down for the new activity type. This is the expected result.
- Activities: If no results exist for the user's combination of country, city and activity, the user should be alerted to this so that they can choose again. I selected a country, city and activity where no results would exist eg. South Africa + Kruger Park + Spas and Salons. Expected result: user is alerted that there are no results. Actual result: alert pops up informing me that there are no activities of this type for my chosen city and that I should select again. I then close the alert and can choose from the activities select field again.
-	 When adding items to the itinerary - I tried to add an item without a date. When I click 'Add to itinerary' if the date field is blank an alert pops up to let me know I should select a date.
- I tried adding an event with a date and the event was added to the itinerary, at the bottom of the lisst of events.
- I try adding items to the itinerary until the content overflows the block. A scrollbar then appears.
- I clicked the 'Delete' button to the right of the item and the entire item was removed from the itinerary section of the page.

### Issues/bugs

**Selecting only one out of three options on the main form**

In the first version of the site a user could type in the city input field without first entering a country and was not alerted to choose a country first. I have now added functionality that will alert a user if she tries to enter a city without first choosing a country. 

It was also previously possible to select an activity type without first typing in a starting point (country and city). I have now fixed this by adding functionality that will alert the user if she tries to choose an activity before first choosing a city. 

I have also added a focus function to the form functions to show the user which field she should be completing next.

**Entering invalid data into the city field**

Previous version bug: if you had already chosen a country you could enter invalid data into the city field and you would not be notified. I added a test to check if the place is undefined and if it is to alert the user to enter a valid city.

There was still a bug after this that if you had already chosen a country and a valid city and then went back to re-enter data into the city field but entered invalid data, you would not be notified. This is because the place is already set on the map. In future deployments I will add a button after the city field that must be pressed to change the view to the city. On that button's action I can reset the view and add an if statement to check if the city is valid before panning and zooming to the city.

**Google maps autocomplete - invalid data input**

City input box: an autocomplete function sets the city bounds if a user selects a valid city from the autocomplete options.

I added a function that will check if the city is valid and if not, will alert the user to choose another city.

However, if a user has previously chosen a valid city and then goes back to the city field and enters invalid data, they will not be alerted that the new data they have entered is invalid. I considered adding an onchange function to this box but it would have to evaluate at every keystroke and this would cause user issues. The other way to fix it would be to add a button that must be pressed to set the city and adding the autocomplete function to that so that the city is refreshed only when the button is pressed. I will add this in future developments. 

For now, I think that the scenario described above is an edge case and is not affecting user experience to a degree that it needs to be fixed. In fact, in the Google documentation this is not dealt with: [I have referred to Google documentation here](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch).

I have tried to set an if statement based on the place.geometry argument, to alert the user if this is not true. However, this has not worked. This is an open bug but one that is open in the Google documentation example as well. 


**Content hidden below the fold**

- There was an issue that users may not see the results table and therefore not know it is there. I have added code to change the view once all fields in the form are set, if results are present, so that the user sees the map and top of the results table. [The idea was from here](http://jsfiddle.net/nick_craver/ntr5b/)

**Looping causing additional items to be added to the itinerary**

I came across a bug that was resulting in extra items being added to the itinerary when the 'Add to itinerary'button was clicked on the second time or any time after that. It looked like the action was causing the code to loop through the first item before running through the current item and then adding the code for the previous and current items to the itinerary.

This was fixed by moving the function to add the itinerary item out of the buildIWContent() function.

**Reset**

I found that when using the browser Safari, when the page was reloaded the form would not be reset, it would contain the data set before the page was reloaded. I have therefore added the resetForm() to the body element to be run when the page loads. The for is now reset with the page loads.

The date on the Itinerary form was also not emptying when the page was refreshed, therefore I have added the resetItineraryForm() function to the buildIWContent() function to ensure the user sees a blank date field when they open the info window. 

The resetItineraryForm() function is also added to the function that adds the object to the Itinerary, to clear the date field once a user has added an item to the itinerary.

### Links

The site was tested for broken links using the [Dead Link Checker](https://www.deadlinkchecker.com/website-dead-link-checker.asp) and no broken links were found.

### Validating CSS

I tested my CSS code using the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) and the result was that no errors were found. 

### Validating mark-up

My HTML was tested using the [W3C Markup Validation Service](https://validator.w3.org/) and the only two results were:
- ‘type’ is unnecessary to add for the script reference but I have left that in for now as it was only a warning. 
- the results heading h2 is empty, but this will be filled in by the JavaScript code and I have therefore not changed anything there. 

### Validating JavaScript

I tested my JavaScript code using [JS Hint](https://jshint.com/) and the result was that there were no errors. There were a number of warnings relating to variables not defined eg. '$' and 'google', however, these are variables that would be defined in the Google API or in JavaScript and therefore I am satisfied they do not need to be addressed.

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
- Image: the image in the itinerary placeholder block is from [Unsplash](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjdxerBl6ztAhVRQEEAHb3GDe4QFjAAegQIARAD&url=https%3A%2F%2Funsplash.com%2F&usg=AOvVaw07uHYdeyZQMneg6p8JTUC)

### Atribution

- I consulted [Google Documentation](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch) on the places API when writing my code for the mao functionality.
- Creating an object from the DOM elements: I used [this resource when creating an object](https://jsbin.com/fawufajoke/edit?html,css,js,console,output) as a guide.

### Acknowledgements

- Thank you to the Code Institute Tutors for support.
- Thank you to my mentor, Dick Vlaanderen for support and guidance.

