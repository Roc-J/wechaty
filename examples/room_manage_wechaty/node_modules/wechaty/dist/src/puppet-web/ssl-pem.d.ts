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
/**
 *
 * Ssl Key & Cert files.
 *
 * Hardcoded here, NO need to re-config.
 * because there will only be visit from 127.0.0.1
 * so it will not be a security issue.
 *
 * http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/
 * openssl req -x509 -days 3650 -nodes -newkey rsa:2048 -keyout key.pem -out cert.pem
 * openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
 *
 * Reference:
 * What is a Pem file - http://serverfault.com/a/9717
 */
declare const key: string;
declare const cert: string;
export { cert, key };
