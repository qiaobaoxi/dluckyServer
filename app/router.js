'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.redirect('/', '/public/index.html', 302);
  router.post('/login', controller.login.index);
  router.post('/saveNews', controller.saveNews.addData);
  router.post('/updateNews', controller.saveNews.updateNews);
  router.post('/deleteNews', controller.saveNews.deleteNews);
  router.get('/getNewsList', controller.getNews.getData);
  router.get('/getNewsDes', controller.getNews.getNewsDes);
  router.get('/getNewsPage', controller.getNews.getNewsPage);
};
