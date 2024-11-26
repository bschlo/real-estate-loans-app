## Project Choice: 

Real Estate Loans App

## Project Description:

My project will make tracking new deals for real estate loans easier. The interface will allow a user, such as a broker or a developer to post a new deal they need financing for and keep track of it. As a part of one of my stretch goals, the client, such as a bank or a private credit fund, will then be able to see the deals in their pipeline and the deal's respective information and files. 

My idea for the Real Estate Loans App comes my experience in real estate finance. Whilst working in the industry, we would have a pipeline with a plethora of potential deals and at one point it was up to 100+ deals. But there were no applications to track each deal, its information, and the deal materials. The only way to see this information was communicating with brokers or developers through email and then downloading zip files onto my desktop. Many brokers or developers would also use DropBox links or other data sites to download this information, however I found that there were too many data sites and it was tedious to track.

## Wire Frames:

### Sign-In:
![Sign-In Wire Frame](<Screenshot 2024-11-21 at 2.56.27 PM.png>)

### Sign-Up

![Sign-Up Wire Frame](<Screenshot 2024-11-21 at 2.57.23 PM.png>)

### Home Page

![Home Page Wire Frame](<Screenshot 2024-11-21 at 2.58.27 PM.png>)

### My Deals

![My Deals Wire Frame](<Screenshot 2024-11-21 at 2.59.30 PM.png>)

### Each Deal

![Each Deal Wire Frame](<Screenshot 2024-11-21 at 3.00.07 PM.png>)


## User Stories: 

MVP Goals

- As a user, I would like to be able to easily sign up for an account and sign in to the app.
- As a user, I would like to see a nav bar indicating all the pages I can select and when selected, take me to that page.
- As a user, I would like to create, update, and delete deals.
- As a user, I would like to display all of my deals on my home page with a picture of the deal.
- As a user, I would like to click into each deal and see all of the deal information.
- As a user, I would like to sign out of my session.

Stretch Goals

- As a user, I would like to be able to see my profile, update it, and delete it.
- As a user, I would like to show the date and time that the deal posting was created.
- As a user, I would like to implement role based authorization.
- As a user, I would like to filter deals by a certain criteria that I select.
- As a user, I would like to search deals that other users have posted. 

## ERD

![ERD](<Screenshot 2024-11-22 at 2.41.02 PM.png>)

## Restful Routes

### Sign-Up Route:

| Action  | Route     | HTTP Verb |
|---------|-----------|-----------|
| Index   | /sign-up  | GET       |
| Create  | /sign-up  | POST      |

### Sign-In: 

| Action  | Route     | HTTP Verb |
|---------|-----------|-----------|
| Index   | /sign-in  | GET       |
| Create  | /sign-in  | POST      |

### Sign-Out: 

| Action  | Route      | HTTP Verb |
|---------|------------|-----------|
| Index   | /sign-out  | GET       |


### Deal Routes: 

| Action  | Route                          | HTTP Verb |
|---------|--------------------------------|-----------|
| Index   | /deal                          | GET       |
| New     | /deal/new                      | GET       |
| Create  | /deal                          | POST      |
| Show    | /deal/:dealId                  | GET       |
| Edit    | /deal/:dealId/edit             | GET       |
| Update  | /deal/:dealId                  | PUT       |
| Delete  | /deal/:dealId                  | DELETE    |



## Timeline: 

| Day       |   | Task                                                            | 
|-----------|---|----------------------------------------------------------------- |
| Friday    |   | Create and present proposal. Create database and implement auth.                                      |
| Monday    |   | Complete auth and implement the sign-up and sign in functionality and styling. Deploy app.                              |          
| Tuesday   |   | Start on homepage styling and creating a nav bar. Create a 'create new deal' link on homepage and view for a new deal form.|       
| Wednesday |   | Make post route for creating the new deal. Ensure HTML is buffed and the product is functional.
| Thursday  |   | Make an update and delete functionality for each deal.                                 |          
| Friday    |   | Finalize MVP and style the project.                                                   |          
| Monday    |   | Check for bugs and continue styling.                                               |          
| Tuesday   |   | Presentation Day.                                                |                                                      
