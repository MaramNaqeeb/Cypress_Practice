import Buzz from "../../support/page-objects/buzz-page-object/buzz";
import Login from "../../support/page-objects/login-logout-page-object/login";

const LOGIN: Login = new Login();
const Buzz_Obj: Buzz = new Buzz();
let filePath: any;
describe("OrangeHRM-create and edit vacancy", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("login.json").as("login");
    cy.get("@login").then((login: any) => {
      LOGIN.loginAdmin(login[0].right_username, login[0].right_password);
    });
cy.fixture("buzz.json").as("buzz")
cy.get("@buzz").then((buzz:any)=>{

    filePath = buzz.filePath;
    cy.writeFile(filePath, "Hello");
  });
})

  it("TCs2: OrangeHRM-edit vacancy", () => {
    cy.readFile(filePath).then((post) => {
      Buzz_Obj.writeBuzzPost(post);
    });
  });
});
