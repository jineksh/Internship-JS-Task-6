const getBtn = document.querySelector("#get-otp");
const input = document.querySelector("#otp-input");
const verifyBtn = document.querySelector("#verify-btn");
const message = document.querySelector("#otp-message");

function getOtp(){

    if(input.value){
        message.textContent = "Please clear the input field before generating a new OTP.";
        message.style.color = "red";
        return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem("otp", otp);

    input.value = otp;

    

    message.textContent = "OTP generated! Please verify.";

}

input.addEventListener('input', ()=>{
    if(input.value === ""){
        message.textContent = "";
    }
}); 


function validateOtp(){
    const userInput = input.value;
    const storedOtp = localStorage.getItem("otp");
    if(userInput === storedOtp){
        message.textContent = "OTP is valid!";
    } else {
        message.textContent = "OTP is invalid!";
        message.style.color = "red";
    }


    if(userInput === storedOtp){
        message.style.color = "green";
    }

    setTimeout(()=>{
        input.value = "";
    

        message.textContent = "";
        
    },3000);

    localStorage.removeItem("otp");

}

getBtn.addEventListener('click', getOtp);
verifyBtn.addEventListener('click', validateOtp);


