# Charging Station Management System

This project is a comprehensive application for managing charging stations, built using React and Material-UI (MUI). The application includes features for user authentication, viewing charging station statuses, managing devices, and handling operations related to electric vehicle packs (e-packs) and drivers. The application supports different user roles, including user, operator, and driver, each with specific functionalities and access levels.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, you need to have Node.js and npm installed on your machine.

1. Clone the repository:

2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To run the application locally:

```sh
npm start
```

## Features
- User Authentication: Secure login and signup functionality, including password reset and email verification.
- Role-Based Access Control: Customizable access for users, operators, and drivers, ensuring the right functionalities are available based on the user's role.
- Charging Station Management: View and manage the status and details of various charging stations.
- Map View: Interactive map for locating and visualizing the distribution of charging stations.
- Device Management: Add and manage devices associated with charging stations.
- Operations Management: Handle tasks such as selecting and moving e-packs, and assigning drivers to specific tasks.
- Token Validation: Automatic JWT token validation and user session management.
- Google reCAPTCHA Integration: Enhances security for form submissions.
## How It Works
- Token Management
  The application uses JWT tokens for managing user sessions and authentication. Tokens are stored in session storage and decrypted using crypto-js to ensure secure handling of user information.

- Role-Based Navigation
  The application checks the user's role (user, operator, or driver) stored in the JWT token and navigates them to the appropriate dashboard. For instance, users and operators are directed to the map view, while drivers have access to driver-specific functionalities.

- Protected Routes
  Protected routes ensure that only authenticated users can access certain parts of the application. Based on the user's role, the app provides access to different sets of routes and components.

- Google reCAPTCHA Integration
  Google reCAPTCHA is integrated into the application to enhance security, particularly for forms that require user input. This helps prevent automated bots from abusing the forms.

