'use strict';

import {
    errorLogger
} from './../../logger.js';

export default class {
    constructor(cfg) {
        // cfg:
        // template
        // shade?
        // shadeStyles?
        // events:
        // close?

        if (!cfg.template) {
            errorLogger('cfg.template cannot be undefined/null/false!', 'new CustomModal()');
            return;
        }

        this.cfg = cfg;
        this.el = document.createElement('div');
        this.el.innerHTML = cfg.template;
        this.el.classList.add('nd-shade', 'nd-anim', 'nd-anim-fadein');

        if (typeof cfg.shadeStyles === 'object') {
            for (let i in cfg.shadeStyles) {
                this.el.style[i] = cfg.shadeStyles[i];
            }
        }

        const closeBtns = this.el.querySelectorAll('.nd-modal-closebtn');
        for (let i = 0; i < closeBtns.length; i++) {
            closeBtns[i].addEventListener('click', () => {
                this.close();
            })
        }

        if (cfg.shade) {
            this.el.classList.add('nd-shade-bg');
        }

        let shadeClass = cfg.shadeClass;
        if (shadeClass) {
            if (typeof shadeClass === 'string') {
                shadeClass = shadeClass.split(' ');
            }
            
            this.el.classList.add(...shadeClass);
        }
    }

    open() {
        document.body.appendChild(this.el);
    }

    close() {
        this.el.classList.remove('nd-anim-fadein');
        this.el.classList.add('nd-anim-fadeout');
        this.el.addEventListener('animationend', function() {
            this.remove();
        })
    }
}
