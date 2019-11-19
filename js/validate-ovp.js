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

window.addEventListener('load', init, false);
