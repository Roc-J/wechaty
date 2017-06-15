/// <reference types="node" />
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
import { EventEmitter } from 'events';
import { StateSwitch } from 'state-switch';
import { Sayable } from './config';
import Contact from './contact';
import { Message, MediaMessage } from './message';
import Room from './room';
/**
 * Abstract Puppet Class
 */
export declare abstract class Puppet extends EventEmitter implements Sayable {
    userId: string | null;
    user: Contact | null;
    abstract getContact(id: string): Promise<any>;
    state: StateSwitch<"live", "dead">;
    constructor();
    abstract init(): Promise<void>;
    abstract self(): Contact;
    abstract send(message: Message | MediaMessage): Promise<boolean>;
    abstract say(content: string): Promise<boolean>;
    abstract reset(reason?: string): void;
    abstract logout(): Promise<void>;
    abstract quit(): Promise<void>;
    abstract ding(): Promise<string>;
    /**
     * FriendRequest
     */
    abstract friendRequestSend(contact: Contact, hello?: string): Promise<any>;
    abstract friendRequestAccept(contact: Contact, ticket: string): Promise<any>;
    /**
     * Room
     */
    abstract roomAdd(room: Room, contact: Contact): Promise<number>;
    abstract roomDel(room: Room, contact: Contact): Promise<number>;
    abstract roomTopic(room: Room, topic: string): Promise<string>;
    abstract roomCreate(contactList: Contact[], topic?: string): Promise<Room>;
    abstract roomFind(filterFunc: string): Promise<Room[]>;
    /**
     * Contact
     */
    abstract contactFind(filterFunc: string): Promise<Contact[]>;
    abstract contactAlias(contact: Contact, alias: string | null): Promise<boolean>;
}
export default Puppet;
