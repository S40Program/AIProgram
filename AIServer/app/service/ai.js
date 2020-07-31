'use strict';

const Service = require('egg').Service;
const tencentcloud = require("tencentcloud-sdk-nodejs");
const NlpClient = tencentcloud.nlp.v20190408.Client;
const models = tencentcloud.nlp.v20190408.Models;
const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

let cred = new Credential("APPID", "APPIDKey");
let httpProfile = new HttpProfile();

class AiService extends Service {
    async chat(query) {
        httpProfile.endpoint = "nlp.tencentcloudapi.com";
        let clientProfile = new ClientProfile();
        clientProfile.httpProfile = httpProfile;
        let client = new NlpClient(cred, "ap-guangzhou", clientProfile);
        let req = new models.ChatBotRequest();
        let params = JSON.stringify(query);
        req.from_json_string(params);
        // 异步处理
        return new Promise(function(resolve, reject){
            client.ChatBot(req, function (errMsg, response) {
                if (errMsg) {
                    reject(errMsg);
                    return;
                }
                resolve(response.to_json_string());
            });
        });
    }
}

module.exports = AiService;
