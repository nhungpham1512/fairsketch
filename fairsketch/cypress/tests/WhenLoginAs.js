import Login from '../tasks/Login';



let login = new Login();

describe('when login as admin', () => {
    it('when login as admin should login successfully', () => {
          
        login.login();   

    });
});