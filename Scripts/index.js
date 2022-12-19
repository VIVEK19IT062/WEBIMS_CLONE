const btn = document.querySelector('#patientDetailsSubmit');
const form = document.querySelector('#patientDetailForm');
const resetBtn = document.querySelector('#patientDetailReset');
let tracksidebar = true;
let trackOtherDetails = true;

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
        document.getElementById('main').style.marginLeft = '180px';
        tracksidebar = !tracksidebar;
    }else{
        document.getElementById('side-menu').style.width = '20px';
        document.getElementById('main').style.marginLeft = '20px';
        tracksidebar = !tracksidebar;
    }
}

function otherDetails() {
    if(!tracksidebar){
        document.getElementById('side-menu').style.width = '195px';
        document.getElementById('main').style.marginLeft = '180px';
        tracksidebar = !tracksidebar;
    }else{
        document.getElementById('side-menu').style.width = '20px';
        document.getElementById('main').style.marginLeft = '20px';
        tracksidebar = !tracksidebar;
    }
}