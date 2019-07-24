const Service = require('egg').Service;

class SaveNewsService extends Service {
  async saveData(headline,subtitle,content,author) {
    let date = new Date();
    let time = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,0)}-${date.getDate().toString().padStart(2,0)}`
    const result = await this.app.mysql.insert("news",{headline,subtitle,content,author,time});
    return result;
  }
  async updateNews(headline,subtitle,content,author,id) {
    let date = new Date();
    let time = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,0)}-${date.getDate().toString().padStart(2,0)}`
    const result = await this.app.mysql.update("news",{headline,subtitle,content,author,time,id});
    return result;
  }
  async deleteNews(id) {
    const result = await this.app.mysql.delete("news",{id});
    return result;
  }
}

module.exports = SaveNewsService;