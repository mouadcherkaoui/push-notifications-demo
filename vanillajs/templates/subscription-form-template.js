var subscriptionTemplate = `<!--
  Copyright IBM Corp. 2016, 2018

  This source code is licensed under the Apache-2.0 license found in the
  LICENSE file in the root directory of this source tree.
-->

<div class="bx--form-item">
  <label for="subscription-identifier" class="bx--label">Identifier</label>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
  <input id="subscription-identifier" type="text"
    class="bx--text-input"
    placeholder="my laptop">
</div>
<div class="bx--form-item">
  <label for="subscription-description" class="bx--label">Description</label>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
  <textarea id="subscription-description" class="bx--text-area"
    rows="4" cols="50" placeholder="description about the subscription"></textarea>
</div>
<div class="bx--form-item">
  <div
    class="bx--select">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input__wrapper">
      <select  id="select-id"
        class="bx--select-input ">

        <option class="bx--select-option" value=""  disabled selected hidden>Choose a Topic </option>  
        <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>          <optgroup class="bx--select-optgroup" label="Category 1">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>          <optgroup class="bx--select-optgroup" label="Category 2">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--select__arrow" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M5 6L0 1 0.7 0.3 5 4.6 9.3 0.3 10 1z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button" onclick="subscribeClient()">Submit</button>
</div>`

function renderSubscriptionForm() {
  var subscriptionForm = Handlebars.compile(subscriptionTemplate);
  var html = subscriptionForm({});

  renderModal('modal-target', { id: 'modal-lokx1olb9q', primary_action: 'subscribeClient()', html_content: html});
  
  document.getElementById('modal-content-target').innerHTML = html;
}