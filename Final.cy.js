describe('OrangeHRM Automation', () => {
    it('Performs login and navigates to Leave List', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-layout-blob').click();
        cy.get('.oxd-input--focus').click();
        cy.get('.oxd-input--focus').type('Admin');
        cy.get('.oxd-input--focus').click();
        cy.get('.oxd-form-row:nth-child(3) .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-form').submit();
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
        cy.get('.oxd-select-text--focus > .oxd-select-text-input').click();
        cy.get('.oxd-select-text--focus > .oxd-select-text-input').click();
        cy.get('.oxd-input--focus').click();
        cy.get('.oxd-autocomplete-text-input > input').click();
        cy.get('.oxd-autocomplete-text-input > input').type('Maruf');
        cy.get('.oxd-input--focus').click();
        cy.get('.oxd-autocomplete-text-input > input').click();
        cy.get('.oxd-autocomplete-text-input > input').type('{backspace}');
        cy.get('.oxd-autocomplete-text-input > input').type('');
        cy.get('.oxd-input--focus').click();
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.get('.oxd-input--focus').type('{backspace}');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser/61');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        cy.url().should('contains', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/85');
        cy.get('.oxd-button--secondary:nth-child(2)').click();
        cy.get('.orangehrm-horizontal-padding > .oxd-form').submit();
        
        
    });
  });
  