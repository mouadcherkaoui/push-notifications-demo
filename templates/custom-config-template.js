var customConfigTemplate = `<!--
  Copyright IBM Corp. 2016, 2018

  This source code is licensed under the Apache-2.0 license found in the
  LICENSE file in the root directory of this source tree.
-->

<div class="bx--form-item">
  <label for="endpoint-public-key" class="bx--label">Identifier</label>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
  <input id="endpoint-public-key" type="text"
    class="bx--text-input"
    placeholder="my laptop">
</div>
<div class="bx--form-item">
  <label for="firebase-config" class="bx--label">Firebase config</label>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
  <textarea id="firebase-config" class="bx--text-area"
    rows="4" cols="50" placeholder="put you config object here"></textarea>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button">Submit</button>
</div>`;

function renderCustomConfigForm() {
    var configForm = Handlebars.compile(customConfigTemplate);
    var html = configForm({});
    document.getElementById('custom-config-target').innerHTML = html;
}

//renderCustomConfigForm();

