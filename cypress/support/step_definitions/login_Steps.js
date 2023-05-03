import { Given,Then,When } from "@badeball/cypress-cucumber-preprocessor";

const url="https://www.saucedemo.com";
Given('I am on the Sauce Demo Login Page',()=>{
    cy.visit(url);

}
)
When('I fill the account information for account {string} into the Username field and the Password field',(username)=>{
    cy.get("#user-name").type(username); 
    cy.get("#password").type("secret_sauce");

}
)
When('I click the Login Button',()=>{
    cy.get("#login-button").click();

}
)
Then('I am redirected to the Sauce Demo Main Page',()=>{
    cy.url("https://www.saucedemo.com/inventory.html").should("exist");

}
)
When('I verify the App Logo exists',()=>{
    cy.get(".app_logo").should('exist',"Swag Labs");

}
)
When('I verify the Error Message contains the text {string}',(error)=>{
    cy.get('[data-test="error"]').contains(error);

}
)

