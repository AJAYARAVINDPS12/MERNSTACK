//callback function
/*function submitForm(submit,db){
    console.log(db());
    console.log(submit);
}
function database(){
    dbName = "SECE";
    return [dbName,"Data Stored Successfully"];
}
submitForm("Form Submitted Successfully",database);*/

function submitForm(submit,isFormValid){
    if(isFormValid){
        console.log("Fields validated Successfully")
        console.log(submit)
    }
    else{
        console.log("Fields validated Failed")
        console.log("Form Submission unsuccessful")
    }
}
function formValidation(){
    email = "Sece@scec.ac.in"
    password = "12345678"
    if (isFormValid){
        return true
    }
    else{
        return false
    }
}
submitForm("Form Submitted Successfully",formValidation)