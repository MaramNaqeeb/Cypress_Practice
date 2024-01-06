class Buzz {
  element = {
    postInput: () => cy.get(".oxd-buzz-post-input"),
    submitButton: () => cy.get('[type="submit"]'),
    postContent: () => cy.get(".orangehrm-buzz-post-body"),
  };
  buzzPostInput(postContent: any) {
    this.element.postInput().type(postContent);
  }
  submitBuzzPost() {
    this.element.submitButton().click();
  }
  buzzPostContent(postContent: any) {
    this.element.postContent().eq(0).should("contain", postContent);
  }
  writeBuzzPost(postContent: any) {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz"
    );
    this.buzzPostInput(postContent);
    this.submitBuzzPost();

    this.buzzPostContent(postContent);
  }
}
export default Buzz;
