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
import { ScanInfo } from '../config';
import { MsgRawObj } from '../message';
import PuppetWeb from './puppet-web';
export declare const Event: {
    onBrowserDead: (this: PuppetWeb, e: Error) => Promise<void>;
    onServerLogin: (this: PuppetWeb, data: any, attempt?: number) => Promise<void>;
    onServerLogout: (this: PuppetWeb, data: any) => void;
    onServerConnection: (data: any) => void;
    onServerDisconnect: (this: PuppetWeb, data: any) => Promise<void>;
    onServerDing: (this: PuppetWeb, data: any) => void;
    onServerScan: (this: PuppetWeb, data: ScanInfo) => Promise<void>;
    onServerLog: (data: any) => void;
    onServerMessage: (this: PuppetWeb, obj: MsgRawObj) => Promise<void>;
};
export default Event;
