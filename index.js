const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr_form button")
const qrCodeInput = document.querySelector("#qr_form input")
const qrCodeImg= document.querySelector("#qr_code img")

//Funções e Eventos


//Gerar QR
function generateQrCode(){
   const qrCodeInputValue = qrCodeInput.value
   console.log(qrCodeInputValue)

   if(!qrCodeInputValue) return;

   qrCodeBtn.innerText = "Gerando código..."

   qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
   

   qrCodeImg.addEventListener("load", () => {
    container.classList.add("active")
    qrCodeBtn.innerText = "Código criado!"
   })

}

//Evento de Clck
qrCodeBtn.addEventListener("click", () =>{
    generateQrCode()
    
})


//Evento de Enter
qrCodeBtn.addEventListener("keydown", (e) =>{
    if(e.code === "Enter" ){ //Para verificar se a tecla Enter foi pressionada
        generateQrCode()
    }
})



//Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () =>{

    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code"
    }



})





