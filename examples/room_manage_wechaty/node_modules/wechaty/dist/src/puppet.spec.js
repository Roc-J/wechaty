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
const puppet_web_1 = require("./puppet-web");
ava_1.test('Puppet smoke testing', t => {
    const p = new puppet_web_1.default();
    t.is(p.state.target(), 'dead', 'should be dead target state after instanciate');
    t.is(p.state.current(), 'dead', 'should be dead current state after instanciate');
    p.state.target('live');
    p.state.current('live', false);
    t.is(p.state.target(), 'live', 'should be live target state after set');
    t.is(p.state.current(), 'live', 'should be live current state after set');
    t.is(p.state.inprocess(), true, 'should be inprocess current state after set');
});
//# sourceMappingURL=puppet.spec.js.map