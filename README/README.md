# Real Estate Loans App

## Project Description

My project will make tracking new deals for real estate loans easier. The interface will allow a user, such as a broker or a developer to post a new deal they need financing for and keep track of it. As a part of one of my stretch goals, the client, such as a bank or a private credit fund, will then be able to see the deals in their pipeline once the broker has granted them access to the deal. 

My idea for the Real Estate Loans App comes from my experience in real estate finance. Whilst working in the industry, we would have a pipeline with a plethora of potential deals which became hard to track from the various email threads and Drop Box links. My app will help users organize the deals in their pipeline and eventually will be a platform where brokers can post deals for clients to see.

## Interact Here

Deployed Website: https://deal-tracker-app-a9526f2b0208.herokuapp.com/auth

GitHub Repository: https://github.com/bschlo/real-estate-loans-app

### How to Use

Load In

![Load In](<Screenshot 2024-12-02 at 2.56.13 PM.png>)

Sign Up

![Sign-Up](image.png)

Sign In

![Sign-In](image-1.png)

Welcome Page

![Welcome Page](image-2.png)

My Deals

![My Deals](image-3.png)

Create A New Deal

![Create A New Deal](image-4.png)

View A Deal ![View A Deal](image-5.png)

Edit A Deal

![Edit A Deal](image-7.png)

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

![ERD](image-9.png)

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



## Timeline

| **Day**      | **Task**                                                                                                   |
|--------------|-----------------------------------------------------------------------------------------------------------|
| **Friday**   | Create and present the proposal. Create the database and implement authentication.                        |
| **Monday**   | Complete authentication and implement the sign-up and sign-in functionality with styling. Deploy the app. |
| **Tuesday**  | Start homepage styling and create a navigation bar. Add a "Create New Deal" link on the homepage and a    |
|              | view for the new deal form.                                                                               |
| **Wednesday**| Create the POST route for adding new deals. Ensure HTML is polished and the product is functional.        |
| **Thursday** | Implement update and delete functionality for each deal.                                                 |
| **Friday**   | Finalize the MVP and style the project.                                                                   |
| **Monday**   | Check for bugs and continue styling.                                                                      |
| **Tuesday**  | Presentation Day.                                                                                        |
  
