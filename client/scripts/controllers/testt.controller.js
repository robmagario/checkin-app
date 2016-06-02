import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class TesttCtrl extends Controller {
    constructor() {
        super(...arguments);
        console.log('test');
        this.helpers({
            data() {
                return Chats.find();
            }
        });
    }

    showNewChatModal() {
        this.NewChat.showModal();
    }

    remove(chat) {
        this.callMethod('removeChat', chat._id);
    }
}

TesttCtrl.$inject = ['NewChat'];
