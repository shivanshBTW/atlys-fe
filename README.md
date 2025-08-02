# Atlys Frontend Assignment

This is a frontend application built for the Atlys Frontend Hiring Task. It's a mini frontend app with an authentication flow as per the provided design.

## Features

- **Feed Page**: Serves as the landing page
  - For unauthenticated users, any interaction triggers a sign in/sign up modal
  - After authentication, users can fully interact with the feed
  - Post Editor with publish functionality
  - Interactive feed with posts

- **Authentication**:
  - Sign In page
  - Sign Up page
  - Modal-based authentication for unauthenticated users

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Animations**: CSS Animations

## Test Accounts

The following test accounts are available for testing:

```
demo@example.com / password123
test@user.com / testpass
```

## Getting Started

### Installation

1. Install dependencies:

```
yarn install
```

2. Start the development server:

```
yarn dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Implementation Details

- **State Management**: React Context API for authentication state (Would've used redux if it was more complicated)
- **Responsive Design**: Fully responsive UI
- **Form Handling**: Form submissions with validation
- **Animations**: Smooth transitions and animations using plain tailwind css

## Deployment

The application is deployed at: [https://atlys-shivansh.surge.sh](atlys-shivansh.surge.sh`)

## What was fun/challenging

- Implementing the authentication flow with modals
- Creating smooth animations for better user experience
- Building a responsive design that works well on all devices

## Future Improvements

- Add more interactive features to posts
- Implement persistent storage for posts
- Add more animations and transitions
- Implement dark mode
