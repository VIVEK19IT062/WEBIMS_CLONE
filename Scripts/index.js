const btn = document.querySelector('#patientDetailsSubmit');
const form = document.querySelector('#patientDetailForm');
const resetBtn = document.querySelector('#patientDetailReset');
let tracksidebar = true;
let trackOtherDetails = false;

btn.addEventListener('click', (e) => {

    e.preventDefault();

    let patientData={
        Prefix : document.getElementById("prefix").value,
        fname : document.getElementById("fname").value,
        mname : document.getElementById("mname").value,
        lname : document.getElementById("lname").value,
        lname2 : document.getElementById("lname2").value,
        suffix : document.getElementById("suffix").value,
        aka : document.getElementById("aka").value,
        sex : document.getElementById("sex").value,
        dob : document.getElementById("dob").value,
        preflanguage : document.getElementById("preflanguage").value,
        risk : document.getElementById("risk").value,
        maritalstatus : document.getElementById("maritalstatus").value,
        ssn : document.getElementById("ssn").value,
        race : document.getElementById("race").value,
        ethnicity : document.getElementById("ethnicity").value,
        selfpay : document.getElementById("selfpay").value,
        defaultfacility : document.getElementById("defaultfacility").value,
        defaultprovider : document.getElementById("defaultprovider").value,
        defaultpharmacy : document.getElementById("defaultpharmacy").value,
        usecurrentpharmacyforallrx : document.getElementById("usecurrentpharmacyforallrx").value,
        pcpsameasprovider : document.getElementById("pcpsameasprovider").value,
        pcp : document.getElementById("pcp").value,
        feeschedule : document.getElementById("feeschedule").value,
    };
    // const formData = new FormData(form);
    // const values = [...formData.entries()];
    // values.map((element)=>{console.log(element.map());})
    console.log("Patient Data:",patientData);
    let patientsAge = findAge(patientData.dob);
    if (patientsAge<=18) {
        alert("Please add a contact for the Patient as "+(patientData.sex=="male"?"He":"She")+", is a minor");
    }

});

resetBtn.addEventListener('click',(e)=>{
    form.reset();
})

function findAge(date) 
{
  const currentDate = new Date();
  const dateOfBirth = new Date(date);
  const diff = Math.abs(currentDate - dateOfBirth );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age;
}

function sideMenuOpenclose() {
    if(!tracksidebar){
        document.getElementById('side-menu').style.width = '195px';
        document.getElementById('main').style.marginLeft = '205px';
        tracksidebar = !tracksidebar;
    }else{
        document.getElementById('side-menu').style.width = '20px';
        document.getElementById('main').style.marginLeft = '20px';
        tracksidebar = !tracksidebar;
    }
}

function otherDetailsOpenclose() {
    if(!trackOtherDetails){ 
        document.getElementById('otherd-details-button').className = "fa-solid fa-circle-chevron-down contactdetailheadericon";
        document.getElementById('otherDetails').style.display = 'flex' ;
        trackOtherDetails = !trackOtherDetails;
    }else{
        document.getElementById('otherd-details-button').className = "fa-solid fa-circle-chevron-right contactdetailheadericon";
        document.getElementById('otherDetails').style.display = 'none' ;
        trackOtherDetails = !trackOtherDetails;
    }
}

function addContactDetailsComponent () {
    document.querySelector('#other-details-component').insertAdjacentHTML(
      'beforeend',
      `<div class="contactdetailoutercontainer" id="add-other-details-component">
      <fieldset>
        <legend class="inputfeildonezero">
          <select id="addresstype" name="addresstype">
            <option value="home">Home</option>
            <option value="other">Other</option>
            <option value="work">Work</option>
          </select>
        </legend>
        
        <div class="detailcontiner">
          <div class="detailcontinertrash boldfont blackcolor">Address<span onclick="ContactDetailsComponent()"><i class="fa-solid fa-trash-can"></i></span></div>
          <div class="nestedinnercontiner">
            <div>Street</div>
            <div class="singlefeildinput"><input type="text" name=""></div>
          </div>
          <div class="innercontiner">
            <div class="addressfeilds addressfeildinputforsecondcolumn">
              <label>Zip</label>
              <input type="text" name="zip">
            </div>
            <div class="addressfeilds addressfeildinputforsecondcolumn">
              <label>City</label>
              <input type="text" name="city">
            </div>
            <div class="addressfeilds addressfeildinputforsecondcolumn">
              <label>State</label>
              <select id="state" name="state">
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
              </select>
            </div>
            <div class="addressfeilds addressfeildinputforsecondcolumn">
              <label>Country</label>
              <select id="country" name="country">
                <option value="us">US</option>
                <option value="pr">PR</option>
                <option value="af">AF</option>
              </select>
            </div>
            <div>
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>

        <div class="detailcontiner">
          <div class="boldfont blackcolor">Phone<span><i class="fa-solid fa-circle-plus contactdetailheadericon"></i></span></div>
          <div class="innercontiner">
            <div class="addressfeilds inputfeildtwozero inoutfeildpadding">
              <label>Type</label>
            </div>
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <label>Code</label>
            </div>
            <div class="addressfeilds inputfeildtwofive inoutfeildpadding">
              <label>Number</label>
            </div>
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <label>Ext</label>
            </div>
          </div>
          <hr>
          <div class="innercontiner">
            <div class="addressfeilds inputfeildtwozero inoutfeildpadding">
              <select id="type" name="type">
                <option value="call">Call</option>
                <option value="landline">Landline</option>
              </select>
            </div>
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <select id="code" name="code">
                <option value="+1 unitied states">+1 Unitied States</option>
                <option value="+1 puerto rico">+1 Puerto Rico</option>
              </select>
            </div>
            <div class="addressfeilds inputfeildtwofive inoutfeildpadding">
              <input type="text" name="number" placeholder="Number">
            </div>
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <input type="text" name="ext." placeholder="Ext.">
            </div>
            <div>
              <a><i class="fa-solid fa-trash-can"></i></a>
            </div>
          </div>
        </div>

        <div class="detailcontiner">
          <div class="boldfont blackcolor">Fax<span><i class="fa-solid fa-circle-plus contactdetailheadericon"></i></span></div>
          <div class="innercontiner">
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <label>Code</label>
            </div>
            <div class="addressfeilds inputfeildtwofive inoutfeildpadding">
              <label>Number</label>
            </div>
          </div>
          <hr>
          <div class="innercontiner">
            <div class="addressfeilds inputfeildonezero inoutfeildpadding">
              <input type="text" name="code">
            </div>
            <div class="addressfeilds inputfeildtwofive inoutfeildpadding">
              <input type="text" name="number" placeholder="Number">
            </div>
            <div>
              <a><i class="fa-solid fa-trash-can"></i></a>
            </div>
          </div>
        </div>

        <div class="detailcontiner">
          <div class="boldfont blackcolor">Email<span><i class="fa-solid fa-circle-plus contactdetailheadericon"></i></span></div>
          <div class="innercontiner">
            <div class="singlefeildinput inoutfeildpadding">
              <input type="text" name="email">
            </div>
            <div>
              <a><i class="fa-solid fa-trash-can"></i></a>
            </div>
          </div>
        </div>

        <div class="detailcontiner">
          <div class="boldfont blackcolor">Website<span><i class="fa-solid fa-circle-plus contactdetailheadericon"></i></span></div>
          <div class="innercontiner">
            <div class="singlefeildinput inoutfeildpadding">
              <input type="text" name="website">
            </div>
            <div>
              <a><i class="fa-solid fa-trash-can"></i></a>
            </div>
          </div>
        </div>
      </fieldset>
       </div>  `      
    )
}
  
function ContactDetailsComponent () {
    document.querySelector('fieldset').parentNode.remove()
}