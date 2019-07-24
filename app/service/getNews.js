const Service = require('egg').Service;

class GetNewsService extends Service {
  async getData(page) {
    const result = await this.app.mysql.select("news",{columns: ['id', 'headline', 'subtitle','time'],limit: 10, // 返回数据量
    offset: (page-1)*10});
    return result;
  }
  async getNewsPage() {
    const result = await this.app.mysql.query("select count(*) from news");
    return result[0]['count(*)'];
  }
  async getNewsDes(id) {
    const result = await this.app.mysql.get("news",{id:id});
    return result;
  }
}

module.exports = GetNewsService;