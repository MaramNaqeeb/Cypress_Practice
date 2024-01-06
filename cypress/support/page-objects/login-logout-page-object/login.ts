import { enumMessages } from "../../enums";
class login {
  elements = {
    userName: () => cy.getByCy("sername"),
    password: () => cy.getByCy("assword"),
    loginBTN: () => cy.get("[type=submit]"),
    invalidCredentials: () => cy.get(".oxd-alert-content > .oxd-text"),
    required: () => cy.get(".oxd-input-field-error-message"),
    dashboard: () => cy.get(".oxd-topbar-header-breadcrumb-module"),
  };
  requiredUserName(): any {
    cy.get(".oxd-form-row").eq(0);
    return cy.get(
      ".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
    );
  }
  requiredPassword(): any {
    cy.get(".oxd-form-row").eq(1);
    return cy.get(
      ".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
    );
  }

  assertMessage = [
    {
      msg: enumMessages.msg1,
      elem: this.elements.invalidCredentials,
    },
    {
      msg: enumMessages.msg2,
      elem: this.elements.required,
    },
    {
      msg: enumMessages.msg3,
      elem: this.elements.dashboard,
    },
  ];

  // functions used in the spec
  loginAdmin(userName: string, password: string) {
    cy.visit("/")

    this.elements.userName().type(userName),
      this.elements.password().type(password),
      this.elements.loginBTN().click({ force: true });
  }
  verifyMessage(message: string) {
    this.assertMessage
      .find(({ msg }) => msg === message)
      ?.elem()
      .should("contain", message);
  }
  verifyHiddenPassword() {
    this.elements.password().should("have.attr", "type", "password");
  }
  requiredAfterUserName() {
    this.requiredUserName().prevAll().should("contain", "Username");
  }
  requiredAfterPassword() {
    this.requiredPassword().prevAll().should("contain", "Password");
  }
}

export default login;
