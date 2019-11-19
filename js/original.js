/***     CLAIM VALIDATION MODULE                     ***/
/*                                                    */
/* Version  Re-Write 1.0                              */
/* Version before JQuery with Bootstrap 2.0           */
/* New Version: Javascript ES6 and Plain CSS          */
/* By: Denis Sanchez Leyva. 11/16/2019                */
/*                                                    */
/* ************************************************** */





const data_Source = [];
let pos = 0;
     
function init() {
    
      
     getClaims();
      
     /* UI */
      const lbMsj = document.querySelector("#msj");
    
      let claimId = document.querySelector("#claimID");
      claimId.addEventListener('keypress', (e) => e.code == 'Enter' ? fnSearch() : '', false);

      let btn_search = document.querySelector("#btn-search");

      btn_search.addEventListener('click', fnSearch, false);
      const multiplesClaimsNumber = document.querySelector("#multiplesClaimsNumber");
      function fnSearch() {

            claimId = document.querySelector('#claimID');
            if (claimId.value === '' || claimId.value === undefined) {
                  lbMsj.innerHTML = '';
                  return;
            }

            const _fClaim = data_Source.filter(claim => claim.claimID === claimId.value);

            let recno = 0;   
            recno = _fClaim.length;


            if (recno > 1) {
                  multiplesClaimsNumber.style.visibility = 'Visible';
                  multiplesClaimsNumber.textContent = `${recno} Records Found with this Claim# `;
                  showModalWindow(_fClaim);
            } else {
                  multiplesClaimsNumber.textContent = '';
                  multiplesClaimsNumber.style.visibility = 'Hidden';
                  showClaim(_fClaim);
            }
            if (_fClaim.values().next().done) {
                  multiplesClaimsNumber.style.visibility = 'Hidden';
                  lbMsj.innerHTML = '';
                  lbMsj.innerHTML = `<p id="msj" class="msj-error">Claim#  <span class="claim_no_found">${claimId.value} </span> no found! Try again.</p>`;
                  return;
            }

            lbMsj.innerHTML = `<p id="msj" <span class="claim_found">Claim#: ${claimId.value} </span> </p>`;
      }
      

}


/** Function to load the claims **/


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

/* Function to Show Claim Duplicates */

function showModalWindow(DataSet) {

      html = `
       <div>
       <br>
       <button class="w-modal-close" id="w-modal-close">X</button>      
       </div>
       <h3 style="text-align:center; color:white;">Claims Number Duplicates</h3>
       <table>
        <th>Claim#</th>
        <th>Provider#</th>
        <th>Member#</th>
        <th>ClaimType</th>
        <th>Claim_Sub</th>
        <th>TOS</th>
        <th>BilledAmt</th>
        <th>AllowedAmt</th>
        <th>PaidAmt</th>
        <th>ClaimBeginDate</th>
        <th>ClaimEndDate</th>
        `;

      rows = `<tr>`;
      DataSet.map(m => {
            rows += ` 
          <td>${m.claimID} </td>
          <td>${m.providerID} </td>
          <td>${m.memberID} </td>
          <td>${m.claimType} </td>
          <td>${m.claim_sub} </td>
          <td>${m.tos} </td>
          <td>${m.billedAmt} </td>
          <td>${m.allowedAmt} </td>
          <td>${m.paidAmt} </td>
          <td>${m.claimBeginDate} </td>
          <td>${m.claimEndDate} </td>
         
          </tr>`;

      });

      let note = `</table></br><h1>Required</h1><p>The Claim# must be distinct in Header Level</p>`;
      const w_modal = document.querySelector("#m-window");
      w_modal.style.visibility = "Visible";
      w_modal.innerHTML = html + rows + note;
      const w_modal_close = document.querySelector("#w-modal-close");
      w_modal_close.addEventListener('click', () => { w_modal.style.visibility = "Hidden" }, false);
}
/*** End of the Function showModalWindow ***/


/** Function Exporer**/
function fn_move_forward() {
     
      const arr = [];
      pos += 1;
      if (pos > data_Source.length - 1) {
            pos = data_Source.length;
            return;
      }
      else {
           arr.push(data_Source[pos]);
           showClaim(arr);
      }
}

function fun_move_backward() {
      const arr = [];
      pos -= 1;
      if (pos < 0) {
            pos = 0;
            return;
      } else {
            arr.push(data_Source[pos]);
            showClaim(arr);
      }
}

function fnByDefault() {
      let fC = data_Source[0].claimID;
      var _fclaim = data_Source.map(claim => claim);
      var fdClaim = _fclaim.filter(f => f.claimID === fC);
      recno = fdClaim.length;
      if (recno > 1) {
            multiplesClaimsNumber.style.visibility = 'Visible';
            multiplesClaimsNumber.textContent = `${recno} Records Found with this Claim# `;
            showModalWindow(fdClaim);
      }
     showClaim(fdClaim);
}


async function getClaims() {
      await fetch(api)
            .then((res) => res.json())
            .then(data => {
                  data.forEach(element => {
                        data_Source.push(element);
                  });
            })
            .catch((err) => console.log(err));
           
            fnByDefault();  
}

window.addEventListener('load', init, false);




/*
class Header {
    constructor(
        claimID, MemberID, ProviderID
    ) {
        this.claimID = claimID;
        this.memberID = memberID;
        this.providerD = providerID;
    }
}
  
       /*
   var animateButton = function(e) {

e.preventDefault;
//reset animation
e.target.classList.remove('animate');

e.target.classList.add('animate');

e.target.classList.add('animate');
setTimeout(function(){
  e.target.classList.remove('animate');
},6000);
};

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
classname[i].addEventListener('click', animateButton, false);
}*/
