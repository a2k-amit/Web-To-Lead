function handlebeforesubmit() {
    let outputleaddate = document.querySelector('.output_lead_date');
    let inputleaddate = document.querySelector('.input_lead_date');

    console.log('input_lead_date.value', inputleaddate.value);

    let formatedDate = new Date(inputleaddate.value).toLocaleDateString('en-IN');
    outputleaddate.value = formatedDate;
}
