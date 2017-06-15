"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   Copyright 2016-2017 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
const ava_1 = require("ava");
const browser_cookie_1 = require("./browser-cookie");
ava_1.test('hostname() for wx.qq.com', (t) => __awaiter(this, void 0, void 0, function* () {
    const driver = {};
    const browserCookie = new browser_cookie_1.BrowserCookie(driver, 'test/fixture/profile/qq.wechaty.json');
    const hostname = yield browserCookie.hostname();
    t.is(hostname, 'wx.qq.com', 'should get wx.qq.com');
}));
ava_1.test('hostname() for wechat.com', (t) => __awaiter(this, void 0, void 0, function* () {
    const driver = {};
    const browserCookie = new browser_cookie_1.BrowserCookie(driver, 'test/fixture/profile/wechat.wechaty.json');
    const hostname = yield browserCookie.hostname();
    t.is(hostname, 'web.wechat.com', 'should get web.wechat.com');
}));
ava_1.test('hostname() for default', (t) => __awaiter(this, void 0, void 0, function* () {
    const driver = {};
    const browserCookie = new browser_cookie_1.BrowserCookie(driver);
    const hostname = yield browserCookie.hostname();
    t.is(hostname, 'wx.qq.com', 'should get wx.qq.com');
}));
ava_1.test('hostname() for file not exist', (t) => __awaiter(this, void 0, void 0, function* () {
    const driver = {};
    const browserCookie = new browser_cookie_1.BrowserCookie(driver, 'file-not-exist.wechaty.json');
    const hostname = yield browserCookie.hostname();
    t.is(hostname, 'wx.qq.com', 'should get wx.qq.com for non exist file');
}));
//# sourceMappingURL=browser-cookie.spec.js.map