const Service = require('egg').Service;

class LoginService extends Service {
  async getUserMatch(user,password) {
    const user = await this.app.mysql.get("users",{user,password});
    let result=0;
    if(user){
      result=1
    }
    return result;
  }
}

module.exports = LoginService;