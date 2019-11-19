
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