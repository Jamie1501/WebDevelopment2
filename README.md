# WebDevelopment2
1.Clone the repository
git clone https://github.com/Jamie1501/WebDevelopment2.git or download the zip file
2.create a .env file and add 
ACCESS_TOKEN_SECRET = AccessCookieToken
PORT = 3000
Admin1 Password = AdminPassword1 
3.Type 'npm install' in the terminal
4.Run the applicaton by typing the following in the terminal:
node index
5.Now the user can view the website in the browser by following this url:
http://localhost:3000
6.Log In details:
Username: Admin1
Password: AdminPassword1

Username: Admin2
Password: AdminPassword2

# List implemented features
About Us / Home
This page is considered to be the welcome page of the application

Lunch Menu
The feature of this page is to display all dishes in the lunch menu.

Dinner Menu
The feature of this page is to display all dishes in the dinner menu.

Log In
This page allows staff to log in to their account then it grants them admin access to the site

Admin About Us Home
This page keeps regular users and admin pages separate to make sure its easier to follow and understand

Admin Dinner Menu
This allows an admin to see all the dinner recipes even the ones that arent available atm so they can make them available

Admin Lunch Menu
This allows an admin to see all the lunch recipes even the ones that arent available atm so they can make them available

New Recipe
This feature allows a logged in user to create a new recipe to be displayed to all the users of website

Admin Edit
This feature allows staff to edit a specific recipe and update the changes.

Admin Delete
This feature allows staff to remove a specific recipe from the site.

Logout
This feature Logs out the current staff from the application , now the user would not have authorisation to access staff functions.

# Justification for any changes from development plan
Originally planned to have a welcome and an about us page however after consideration merging them together into 1 makes it a lot easier to use and less cluttered
Removed the forgot password functions and there was no use for them
Changed the layout of all pages to be horizontal as opposed to vertical as it makes it a lot easier to follow and for mobile users it is resizeable on many different devices.
Originally planned to use the basic font however i watched a video on using google fonts and implimeneted one that i thought was easy to read and helped draw more attention to the horizontal layout

# Link to the live version/deployed site
The deployed site is having issues with not recognising the secret token and therefore you cannot log in a video will be uploaded as well.

https://webdevelopmentcoursework2.herokuapp.com/