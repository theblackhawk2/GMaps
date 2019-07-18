# GMaps
This is my project pitch

## UX

The aim of this project is to provide a webpage for users wanting to plan their vacations by giving them the possibility to choose places where they would like to go, and giving them comprehensive results.  

Therefore, through this project we tried to answer the following user stories :

* As a tourist, i need to find places near me, in order for me to have a good meal.
* As a lost person , i need to find a place nearby in order for  me to have a place to spend the night.
* As a group of people, we need to find a good bar nearby, to have a good time.

 [Section wireframes, mokckups]
 
 ## Features

 ### Existing features
 
The main features of this project are : 

* Feature 1 - Allow users to select the type of accomodation they are looking for choosing between Restaurant, Bar and Hotel
* Feature 2 - Allow users to access their geolocation by clicking in the Address input, and visualise it with a marker on a map.
* Feature 3 - Allow users to base their searches on another location, by navigating through the map and clicking on the desired destination.
* Feature 4 - Allow users to filter their search results with a radius so that they could only choose places nearby.
* Feature 5 - Allow users to specify keywords (optional) if they want to refine their search results
* Feature 6 - Allow users to search for places, with repect to the search constraints defined above, and visualise them as Red markers on the map.
* Feature 7 - Allow users to view the name of the desired place (once the request has been made) by clicking on the corresponding marker.

### Features Left to Implement

* A User guide, in sildes format,to show the full use case for the user.
* Adding feedback and comments section to give the user an idea on the quality of service in the choosen place.

## Technologies Used

- [HTML5](https://www.w3.org/TR/html52/)
  - A markup language used to organize elements in a web page.
- [CSS3](https://devdocs.io/css/)
  - A language to style the webpage layout.
- [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/)
  - A frontend library to organize content in a grid system.
- [Javascript](https://devdocs.io/javascript/)
  - A programming languages to make dynamic content
- [Jquery 3.1.1](https://jquery.com)
  - A Javascript library that simplifies DOM Manipulation
- [Google Maps API](https://developers.google.com/maps/)
  - An API from google that gives us all tools needed for geolocation,distance and place search manipulation.
  
## Testing

I tested my webpage in different locations, and in mozilla / google chrome / opera browsers and there is no actual bug. the 3 user stories are similar in the testing process, through the following example .

* the User selects one of 3 choices : Restaurant | Bar | Hotel by a click.
* If the user wants the search to be centered around him, he clicks on the Address input, a popup message appears on the screen asking if he wants to share his position. He clicks yes.
* Otherwise, he drags the map with the mouse looking for the position, once he decides he clicks one time on it.
* A readable address is filled in the address field, that corresponds to the user choice.
* The user inputs a radius ( in meters ), in the field below. Only numbers are accepted.
* The users inputs a keyword of his choice.
* As a final step he clicks on the Search button and visualises the places on the map ( on the left ).

Attention : Zooming in / out can be done by the mouse scroll and double clicking on the map.

## Deployment

The application is easily deployable on any computer having a recent browser. The development version and deployed version were both done on the master branch because there is only one version of the application and i was the only one developping it.

To run the code clone the project using :

```
git clone  http://github.com/alexsoulis/GMaps.git
```
In the folder, open the index.html in the browser and it's done !



