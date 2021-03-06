const modalTemplate = `<div data-modal id="{{id}}" class="bx--modal " role="dialog" aria-modal="true"
aria-labelledby="modal-lokx1olb9q-label" aria-describedby="modal-lokx1olb9q-heading" tabindex="-1">
<div class="bx--modal-container">
    <div class="bx--modal-header">
        <p class="bx--modal-header__label bx--type-delta" id="modal-lokx1olb9q-label">Optional label</p>
        <p class="bx--modal-header__heading bx--type-beta" id="modal-lokx1olb9q-heading">Modal heading</p>
        <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal">
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;"
                xmlns="http://www.w3.org/2000/svg" class="bx--modal-close__icon" width="16" height="16"
                viewBox="0 0 16 16" aria-hidden="true">
                <path d="M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3 4.7 12 8 8.7 11.3 12 12 11.3 8.7 8z">
                </path>
            </svg>
        </button>
    </div>


    <div class="bx--modal-content" id="modal-content-target">
        <!--
          Copyright IBM Corp. 2016, 2018
        
          This source code is licensed under the Apache-2.0 license found in the
          LICENSE file in the root directory of this source tree.
        -->
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
        <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
        <button class="bx--btn bx--btn--primary" type="button" data-modal-primary-focus onclick="eval('{{primary_action}}')">Primary button</button>
    </div>
</div>
<!-- Note: focusable span allows for focus wrap feature within Modals -->
<span tabindex="0"></span>
</div> `;

function renderModal(target, data) {
    var modal = Handlebars.compile(modalTemplate);
    var html = modal(data);
    document.getElementById(target).innerHTML = html;
}

renderSubscriptionForm();
