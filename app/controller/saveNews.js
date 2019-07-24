const Controller = require('../core/base_controller');
class SaveNewsController extends Controller {
  async addData() {
    const {headline,subtitle,content,author}=this.ctx.request.body;
    const result = await this.ctx.service.saveNews.saveData(headline,subtitle,content,author);
    if(typeof result==="object"&&result.affectedRows === 1){
      this.success();
    }else{
      this.fail();
    }
  }
  async updateNews() {
    const {headline,subtitle,content,author,id}=this.ctx.request.body;
    const result = await this.ctx.service.saveNews.updateNews(headline,subtitle,content,author,id);
    if(typeof result==="object"&&result.affectedRows === 1){
      this.success();
    }else{
      this.fail();
    }
  }
  async deleteNews() {
    const {id}=this.ctx.request.body;
    const result = await this.ctx.service.saveNews.deleteNews(id);
    if(typeof result==="object"&&result.affectedRows === 1){
      this.success();
    }else{
      this.fail();
    }
  }
}

module.exports = SaveNewsController;
