
function showClaim(_claimId) {

      //if (_claimId == undefined || _claimId.length == 0) {
       if(_claimId.values().next().done){
            return;
      } else {

            const {
                  claimID,
                  providerID,
                  memberID, tos, ...rest
            } = _claimId[0];

            let v_html_claim = `
    <div>
                <table>
                        <tr>
                              <td>Claim#</td>
                              <td class="color">${claimID}</td>
                        </tr>
                        <tr>
                              <td>Provider#</td>
                              <td class="color">${providerID}</td>
                        </tr>
                        <tr>
                              <td>Memberm#</td>
                              <td class="color">${memberID}</td>
                        </tr>  
                        <tr>
                              <td>Claim#</td>
                              <td class="color">111333</td>
                        </tr>
                        <tr>
                              <td>Claim#</td>
                              <td class="color">111333</td>
                        </tr>        
                    </table>
          </div>
          <div>
                <table>
                        <tr>
                              <td>TOS</td>
                              <td class="color">${tos}</td>
                        </tr>
                        <tr>
                              <td>Claim#</td>
                              <td>111333</td>
                        </tr>
                        <tr>
                              <td>Claim#</td>
                              <td>111333</td>
                        </tr>
                        <tr>
                              <td>Claim#</td>
                              <td>111333</td>
                        </tr>
                        <tr>
                              <td>Claim#</td>
                              <td>111333</td>
                        </tr>        
                    </table>
          </div>
          <div>
                  <table>
                          <tr>
                                <td>Claim#</td>
                                <td class="color">111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td class="color">111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td class="color">111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td class="color">111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td class="color">111333</td>
                          </tr>        
                      </table>
            </div>
            <div>
                  <table>
                          <tr>
                                <td>Claim#</td>
                                <td>111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td>111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td>111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td>111333</td>
                          </tr>
                          <tr>
                                <td>Claim#</td>
                                <td>111333</td>
                          </tr>        
                      </table>
            </div>

            <!-- Other size -->

         
    `;

            const v_claim_l = document.querySelector("#v-claim-l");
            v_claim_l.innerHTML = v_html_claim;

            //Just to test
            const v_claim_r = document.querySelector("#v-claim-r");
            v_claim_r.innerHTML = v_html_claim;

      }
}
