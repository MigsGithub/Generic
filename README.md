# Generic




<!-- For reference, will remove once we complete project -->

# MVP Library
Developers: Ferdinand Aguwa, Madison Calvo, Miguel Maldonado, Mario Hernandez, Nathaniel Scott

# User Story: 

Given the user wants to access their personal library, the user can have a personal authentication to load their current reads, as well as check out any books to put into their library and check it back into the shared library once the user has completed reading the book.

# Technologies:

Materialize, Bootstrap, JQuery, Sequelize, Passport

# Database:

Two tables:
	Users and MVP_Library.
User table is going to track user information such as Name, Read List, password, index, Personal Library.
MVP_Library is going to be a list of books that’s available for all users to Check out a book from. 
Each user will be able to check out a book, and it will ideally show who has that book checked out and for how long (minutes, then hours, then days). 
