var customConfigTemplate = `<!--
  Copyright IBM Corp. 2016, 2018

  This source code is licensed under the Apache-2.0 license found in the
  LICENSE file in the root directory of this source tree.
-->

<div class="bx--form-item">
  <label for="endpoint-public-key" class="bx--label">la cle publique VapIdKey</label>
  <div class="bx--form__helper-text">
    le cle vapid public du point de terminaison
  </div>
  <input id="endpoint-public-key" type="text"
    class="bx--text-input"
    placeholder="********************">
</div>
<div class="bx--form-item">
  <label for="firebase-config" class="bx--label">Firebase config</label>
  <div class="bx--form__helper-text">
    Inserer la configuration generer par la console firebase 
  </div>
  <textarea id="firebase-config" class="bx--text-area"
    rows="4" cols="50" placeholder="{{configPlaceholder}}"></textarea>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn-primary" onclick="applyConfig()">Apply Config</button>
</div>
`;
var configPlaceholder = `
firebaseConfig = {
  apiKey: "********************",
  authDomain: "**********.firebaseapp.com",
  databaseURL: "https://**********.firebaseio.com",
  projectId: "**********",
  storageBucket: "***********.appspot.com",
  messagingSenderId: "********************",
  appId: "********************"
};
`
function renderCustomConfigForm() {
    var configForm = Handlebars.compile(customConfigTemplate);
    var html = configForm({ configPlaceholder: configPlaceholder});
    document.getElementById('custom-config-target').innerHTML = html;
}

//renderCustomConfigForm();

function applyConfig() {
  eval(document.getElementById('firebase-config').value);
  let vapIdKey = document.getElementById('endpoint-public-key').value;
  initializeWithConfig(firebaseConfig, vapIdKey);
}