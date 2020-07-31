'use strict';

const Controller = require('egg').Controller;

class AiController extends Controller {
    async chat() {
        const { ctx } = this;
        let query = ctx.query.query;
        // AI处理
        let params = { Query: query };
        let result = await ctx.service.ai.chat(params);//chat定义
        ctx.body = result;
    }
}

module.exports = AiController;
