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
var bridge_1 = require("./bridge");
exports.Bridge = bridge_1.Bridge;
var browser_1 = require("./browser");
exports.Browser = browser_1.Browser;
var event_1 = require("./event");
exports.Event = event_1.Event;
var friend_request_1 = require("./friend-request");
exports.FriendRequest = friend_request_1.PuppetWebFriendRequest;
var server_1 = require("./server");
exports.Server = server_1.Server;
var watchdog_1 = require("./watchdog");
exports.Watchdog = watchdog_1.Watchdog;
const puppet_web_1 = require("./puppet-web");
exports.PuppetWeb = puppet_web_1.default;
exports.default = puppet_web_1.default;
//# sourceMappingURL=index.js.map