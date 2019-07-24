const Controller = require('../core/base_controller');
class GetNewsController extends Controller {
  async getData() {
    let page= this.ctx.query.page
    const result = await this.ctx.service.getNews.getData(page);
    if(typeof result==="object"){
      this.success(result);
    }else{
      this.fail();
    }
  }
  async getNewsPage() {
    const result = await this.ctx.service.getNews.getNewsPage();
    console.log(result)
    if(typeof result==="number"){
      this.success(result);
    }else{
      this.fail();
    }
  }
  async getNewsDes() {
    let id = this.ctx.query.id;
    const result = await this.ctx.service.getNews.getNewsDes(id);
    if(typeof result==="object"){
      this.success(result);
    }else{
      this.fail();
    }
  }
}

module.exports = GetNewsController;
