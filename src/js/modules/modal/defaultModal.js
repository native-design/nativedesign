'use strict';

import CustomModal from './customModal.js';

import {
    errorLogger
} from './../../logger.js';

export default class extends CustomModal {
    constructor(cfg) {
        // cfg:
        // title
        // subtitle?
        // text
        // actions?
        // class?
        // styles?
        // shade?
        // shadeStyles?
        // animation?
        // events:
        // close?

        if (!cfg.title || !cfg.text) {
            errorLogger('cfg.title and cfg.text cannot be undefined/null/false!', 'new DefaultModal()');
            return;
        }

        let classLists = '';
        if (Array.isArray(cfg.class)) {
            classLists = ' ' + cfg.class.join(' ');
        } else if (typeof cfg.class === 'string') {
            classLists = ' ' + cfg.class;
        }

        let stylesList = '';
        if (typeof cfg.styles === 'object') {
            stylesList += 'style="'
            for (let i in cfg.styles) {
                stylesList += i + ':' + cfg.styles[i] + ';';
            }
            stylesList += '"';
        }

        let template = `
            <div ${ stylesList } class="nd-card nd-modal nd-anim nd-anim-scale-up${ classLists }">
                <div class="nd-card-title">
                    ${ cfg.title }
                </div>
        `;

        if (cfg.subtitle) {
            template += `
                <div class="nd-card-subtitle">
                    ${ cfg.subtitle }
                </div>
            `;
        }

        template += `
            <div class="nd-card-text">
                ${ cfg.text }
            </div>
        `;

        if (cfg.actions) {
            template += `
                <div class="nd-card-actions">
                    ${ cfg.actions }
                </div>
            `
        }

        template += '</div>';

        cfg.template = template;

        super(cfg);

        this.cfg = cfg;
    }
}
