


https://github.com/user-attachments/assets/6ca3584a-1907-4ce5-b49c-045430683ec8



# Automating Testing Using Cypress: OrangeHRM Website

## Introduction
Cypress is a powerful end-to-end testing tool designed for modern web applications. This repository demonstrates how to use Cypress to automate key tasks on the OrangeHRM website, a popular HR management system.

---

## Key Features and Benefits of Cypress
- **Real-Time Testing**: Offers instant feedback on the application being tested.
- **Easy Installation**: Requires minimal setup.
- **Interactive Debugging**: Features like Time Travel for easy debugging.
- **Fast Execution**: Runs tests directly in the browser for speed and accuracy.
- **Built-In Waiting**: Automatically waits for elements to load.

---

## Installation and Setup Guide

### Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS version recommended).

### Steps

#### Step 1: Verify Node.js Installation
1. Download and install Node.js.
2. Verify installation by running the following commands in the terminal:
   ```bash
   node -v
   npm -v
   ```

#### Step 2: Create a New Project in VS Code
1. Open Visual Studio Code.
2. Create a new folder for your project (e.g., `cypress-demo`) and open it in VS Code.
3. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

#### Step 3: Install Cypress
1. Install Cypress as a development dependency:
   ```bash
   npm install cypress --save-dev
   ```
2. Verify installation:
   ```bash
   npx cypress --version
   ```

#### Step 4: Open Cypress Test Runner
1. Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```
2. Cypress will create a `cypress` folder in your project directory.

#### Step 5: Create a Test File
1. Navigate to the `cypress/e2e` folder.
2. Create a new test file, e.g., `orangehrm_test.cy.js`.

#### Step 6: Write Your Test Script
Here is an example test script:

```javascript
describe('OrangeHRM Login Test', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

#### Step 7: Run the Test
1. Save the test file.
2. Select the test from the Cypress Test Runner to execute it.

---

## Cypress Code Explanation

### Key Functions
1. **`describe`**: Groups related tests.
   ```javascript
describe('My First Test', () => {...});
   ```
2. **`it`**: Defines a specific test case.
   ```javascript
it('Logs in with valid credentials', () => {...});
   ```
3. **`cy.visit`**: Opens a specific URL.
   ```javascript
cy.visit('https://example.com');
   ```
4. **`cy.get`**: Selects an element based on a CSS selector.
   ```javascript
cy.get('input[name="username"]');
   ```
5. **`cy.type`**: Simulates typing into an input field.
   ```javascript
cy.get('input[name="username"]').type('Admin');
   ```
6. **`cy.click`**: Simulates a click action.
   ```javascript
cy.get('button[type="submit"]').click();
   ```
7. **Assertions**: Verifies that conditions are true.
   ```javascript
cy.url().should('include', '/dashboard');
   ```

---

## Summary
This test suite:
- Automates the login functionality for the OrangeHRM website.
- Validates key actions, including page navigation and interaction with UI elements.

---

## Conclusion
Cypress provides an easy-to-use framework for automating UI tests, ensuring your web application behaves as expected. This repository demonstrates how to test login functionality and interactions on the OrangeHRM platform.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing
Feel free to fork this repository and submit pull requests for improvements or additional features.

---

## Contact
For questions or suggestions, please open an issue in this repository.
