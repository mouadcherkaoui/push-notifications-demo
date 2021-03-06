var subscriptionItemTemplate =    
`{{#tokens}}
    <tr>
        <!-- expand icon td -->
        <td>
            <!-- truncated new markup -->
            {{identifier}}
        </td>
        <!-- expand icon td -->
        <td>
            <!-- truncated new markup -->
            <p>{{token}}
            <button data-copy-btn class="bx--copy-btn" type="button" tabindex="0" onclick="copyToken('{{token}}')">
                <span class="bx--assistive-text bx--copy-btn__feedback">Copied!</span>
                <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--snippet__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M14,5v9H5V5h9m0-1H5A1,1,0,0,0,4,5v9a1,1,0,0,0,1,1h9a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z"></path><path d="M2,9H1V2A1,1,0,0,1,2,1H9V2H2Z"></path></svg>
            </button></p> 
        </td>
        <!-- expand icon td -->
        <td>
            <!-- truncated new markup -->
            {{description}}
        </td>
        <!-- expand icon td -->
        <td>
            <button
            class="bx--btn bx--btn--danger bx--btn--sm"
            type="button">
            </button>        
        </td>
    
    </tr>
    {{/tokens}}`;

function copyToken(token){
    navigator.clipboard.writeText(token);
}