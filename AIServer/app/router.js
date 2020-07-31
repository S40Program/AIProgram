'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 人工智能小程序的路由
  router.get('/chat', controller.ai.chat);

}; 
