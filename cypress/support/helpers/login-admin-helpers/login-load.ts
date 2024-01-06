// import random from "./randomFunctions";
import login from "../../page-objects/login-logout-page-object/login";

const loginObj: login = new login();
let loginPayLoad:any;

class CommonLoginDataLoad {
  static loginFunction(userName:any,password:any,result:any) {
      loginPayLoad = {
        usernameandpassword: loginObj.loginAdmin(
         userName,
          password
        ),
        validation: loginObj.verifyMessage(result),
      }
      
  }
}

export default CommonLoginDataLoad;
