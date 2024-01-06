class Logout{
elements={
    logoutDropdown: () => cy.get(".oxd-userdropdown-tab"),
    logoutBtn: () => cy.contains("Logout"),
}
logout() {
    this.elements.logoutDropdown().click();
    this.elements.logoutBtn().click({ multiple: true });
  }
}
export default Logout