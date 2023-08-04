const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const confirmp=document.querySelector('#confirmp')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs()
})
function validateInputs(){
    const usernameVal=username.Value.trim()
    const emailVal=email.Value.trim()
    const passwordVal=password.Value.trim()
    const confirmpVal=confirmp.Value.trim()
    if(usernameVal===''){
        seterror(username,'username is required')
    }
    else{
    setSuccess(username)
}
if(emailVal===''){
    setError(email,'Email is required')
}
else if(!validateEmail(emailVal)){
    setError(email,'please enter a valid email')
}
else{
    setSuccess(email)
}
if(passwordVal===''){
    setError(password,'password is required')
}
else if(passwordVal.length<8){
    setError(password,'password must br atleast 8 characters')
}
else{
    setSuccess(password) 
}
if(confirmpVal===''){
    setError(confirmp,'confirm password is required')
}
else if(confirmpVal!==password){
    setError(confirmp,'password does not match')
}
else{
    setSuccess(confirmp)
}

}
function seterror(element,message){
    const inputgroup=element.parentElement
    const errorElement=inputgroup.querySelector('.error')
    errorElement.innerText=message
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}
function setsuccess(element){
    const inputgroup=element.parentElement
    const errorElement=inputgroup.querySelector('.error')
    errorElement.innerText=''
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}
const validateEmail=(email)=>{
    return String(email)
    .tolowercase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    }