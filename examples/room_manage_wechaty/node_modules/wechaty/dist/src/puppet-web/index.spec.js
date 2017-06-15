"use strict";
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
const index_1 = require("./index");
ava_1.test('PuppetWeb Module Exports', t => {
    t.truthy(index_1.PuppetWeb, 'should export PuppetWeb');
    t.truthy(index_1.Event, 'should export Event');
    t.truthy(index_1.Watchdog, 'should export Watchdog');
    t.truthy(index_1.Server, 'should export Server');
    t.truthy(index_1.Browser, 'should export Browser');
    t.truthy(index_1.Bridge, 'should export Bridge');
});
//# sourceMappingURL=index.spec.js.map