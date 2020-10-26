'use strict';

import CustomModal from './customModal.js';
import DefaultModal from './defaultModal.js';

export default {
    open(cfg) {
        const mod = new DefaultModal(cfg);
        mod.open();
        return mod;
    },
    openCustom(cfg) {
        const mod = new CustomModal(cfg);
        mod.open();
        return mod;
    },
    CustomModal,
    DefaultModal
}
