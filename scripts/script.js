//fonction pour afficher la carte prendre un rendez vous 

let afficherCarte= function () {
        let bodyElement= document.querySelectorAll('body > *')

        let afficherPopup = document.querySelector('.rendez-vous')

        let btnRendezVous = document.querySelector('#apputamento')

        btnRendezVous.addEventListener('click',()=>{

            bodyElement.forEach(element =>{ 

                if(!element.classList.contains("rendez-vous") ){
                    element.style.display ='none'

                }else{
                    element.classList.add('styleSais')
                    //element.style.display ='flex'

                    let body = document.querySelector('body')
                    body.classList.add('corpscache')

    }
})
})}





/*fonction pour gerer l'evenement de la validation du formulaire 
et l'envoi des informations*/


let validationForm =function(){

     let form = document.querySelector('.rendez-vous form')

    form.addEventListener('submit',(event)=>{
        event.preventDefault()
    })
}
// fonction pour gerer si les information ont été envoyé
let envoiDuFormulaire= function(){
    
          let envoiForm= document.querySelector('.rendez-vous input[type="submit"]')

   
envoiForm.addEventListener('click',()=>{

    //fermeture de la carte prendre rendez vous  
    let bodyElement= document.querySelectorAll('body > *')
     let afficherPopup = document.querySelector('.rendez-vous')
  


              bodyElement.forEach(element =>{ 

                if(!element.classList.contains("rendez-vous") ){
                    element.style.display =='none'
                    console.log(element)
                    //let body = document.querySelector('body')
                    //body.classList.remove('corpscache')
                }else{
                    

                    element.style.display=='none'
                    console.log(element)

                }
})


  //envoie du message de confirmation
 let nameInput = document.querySelector('#Nom')
    let valueName=nameInput.value

    let prenomInput =document.querySelector('#Prenom')
    let valuePrenom= prenomInput.value

    let dateInput = document.querySelector('#date')
    let valueDate =dateInput.value

        if(valueName==="" || valuePrenom ==="")
            alert('veuillez remplir tout les champs s\'il vous plait ')

        else{
            alert('felicitations '+ valuePrenom +' '+ valueName+' vous venez de prendre un rendez-vous le '+ valueDate)


        }
    
})  
    
}





//fonction pour gerer l'affiche et le non afficha de la carte prendre rendez vous

let prendreRendezVous = function(){
    afficherCarte()
    validationForm()
    envoiDuFormulaire()
}

prendreRendezVous()