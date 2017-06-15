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
const browser_1 = require("./browser");
ava_1.test.serial('quit()', (t) => __awaiter(this, void 0, void 0, function* () {
    const browser = new browser_1.Browser();
    yield browser.driver.init(); // init driver, not init browser
    t.throws(browser.quit(), Error, 'should throw on an un-inited browser');
    browser.state.target('open');
    browser.state.current('open', false);
    t.notThrows(browser.quit(), 'should not throw exception when call quit() on an `inprocess` `open` state browser');
    browser.state.target('close');
    browser.state.current('close');
    t.throws(browser.quit(), Error, 'should throw exception when call quit() twice on browser');
}));
ava_1.test.serial('init()', (t) => __awaiter(this, void 0, void 0, function* () {
    const browser = new browser_1.Browser();
    browser.state.target('open');
    browser.state.current('open');
    t.throws(browser.init(), Error, 'should throw exception when call init() on an `open` state browser');
    browser.state.current('open', false);
    t.throws(browser.init(), Error, 'should throw exception when call init() on a `open`-`ing` state browser');
    yield browser.quit();
    t.pass('should quited browser');
}));
//# sourceMappingURL=browser.spec.js.map