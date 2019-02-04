# Assignment Tracker

This is a simple assignment tracker. The inspiration came from the fact
that I currently use a basic spreadsheet in Google Docs, so this will be useful for
the remainder of the course. In addition, it covers all the necessary components to
implement what we've learned so far without venturing too far outside of the class
scope.

### Links
* [GitHub Client Repository](https://github.com/jgalla/assignment-tracker-client)
* [GitHub API Repository](https://github.com/jgalla/assignment-tracker-api)
* [Deployed Client](https://jgalla.github.io/assignment-tracker-client/)
* [Deployed API](https://assignment-tracker-api.herokuapp.com/)

### Wireframes
![wireframe](https://i.imgur.com/eG1lagS.jpg)

### User Stories
* As a user, I want to log assignments received from GA.
* As a user, I want to have the option to set due-dates for each assignment.
* As a user, I want to update assignments with partially complete status.
* As a user, I want to mark assignments complete and note whether or not a PR was made.
* As a user, I want to view overall assigmnet status.

### Entity Relationship Diagram (ERD)
![ERD](https://i.imgur.com/ENVZRke.jpg)

### Technologies Used
* HTML
* CSS
* JavaScript
* jQuery
* Ajax
* Bootstrap
* Ruby on Rails
* Git
* Heroku

### Development Process
* Layout Back-end
  - Create GitHub repository for API
  - Setup API from template
  - Commit to GitHub and deply to Heroku
* Layout Front-end
  - Create GitHub repository
  - Setup browser template
  - Commit to GitHub
* Setup Back-end
  - Scaffold resources and test using curl scripts
  - Setup relationship between User and Assignment tables
  - Test using curl scripts
* Setup Front-end
  - Test sign-up, sign-in, change-password and sign-out using curl scripts
  - Create basic front-end components for auth and test in browser
  - Create basic front-end components for resources and test in browser
* Testing
  - Component testing and end-to-end user testing
* Styling

### Unsolved Problems and Furure Work
* Use handlebars to generate inline assignment delete button and inline status change
* Change new assignment to not require link and validate link format if provided
* Sort assignments and add button to show only open or only closed
* Allow for multiple assignment tables for organization
* Assignment ID number should start over for each user
