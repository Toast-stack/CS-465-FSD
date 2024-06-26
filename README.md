# CS-465-FSD
CS-465 Full Stack Development With MEAN


# Architecture

## *Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*
    In this project, I used Express HTML, JavaScript, and Single-page application. The front end of the website used a mixture of HTML and JavaScript. JavaScript was used for the website routes, controllers, models, and the main application file which exports the Express App. The Single Page Applications were useful as they only operate on a single page as the name suggests and it also provides an admin site that helps with maintenance and updates.

## *Why did the backend use a NoSQL MongoDB database?*
    The Project used a NoSQL MongoDB database to hold an amount of limited information, those being the trip listing information as well as the user data used for logging into the admin site.

# Functionality

## *How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?*
    One of the main differences between JavaScript and JSON is that JSON is mainly used to store data. another being is that JSON can't have functions unlike how JavaScript objects can include functions. Another difference is that JavaScript objects can only be used with other sources of JavaScript whereas JSON can be used with different programming languages.
    
## *Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*
    One of the best examples I can think of is how we replaced some of the static HTML pages with templates using handlebars, This was important because it allowed for the structure of a page to be reused while being able to change the contents that are displayed on it. Another important thing I did during this project was securing the data and the ability to edit it behind an admin user. without this, all of the information could easily be changed or deleted by a potential bad actor.

# Testing

## *Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*
    One of the best ways that I found to do this during the development of this project is to use Postman to test my endpoints such as Adding, Updating, or Getting the data on our website. Using Postman was useful as it provided an easy and convenient interface that gave us all of the information we needed as well as allowed us to input the generated JWT token for authentication purposes for adding and editing the trips in our database.

# Reflection

## *How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*
    I found this course to be interesting and provided me with a new set of skills, I don't know if I would pursue a career in Full-stack development but it was an interesting exploration into how else I can use the skills I've been developing during the time at SNHU and how if I ever felt so inclined in the future I could use these skills in a professional setting in addition to the other skills I have. I found that the modules we developed were interesting and provided me with a new appreciation for how websites are built and how the people that maintain them have a harder job than what I once thought.
