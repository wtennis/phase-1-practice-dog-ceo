console.log('%c HI', 'color: firebrick')

function grabJSONimages() {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(data => data.message.forEach(renderImages))
}


function renderImages(dogPicSrc) {
    console.log('renderImages is commented out rn to save loading images!')
//let dogImage = document.createElement('img')
//dogImage.src = dogPicSrc; 
//document.querySelector("#dog-image-container").append(dogImage)

}

function grabJSONbreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    })
    .then(json => {
        Object.keys(json.message).forEach(listBreeds)
    }
    )
    }


function listBreeds(x){
let breed = document.createElement('li')
breed.textContent = x
breed.addEventListener('click', () => breed.style.color = "teal")
document.querySelector("#dog-breeds").append(breed)
}

//Challenge 4: 

function dropDown() {
document.querySelector("select#breed-dropdown").addEventListener("change", listChanger)
}


function listChanger(event){
    const selectedLetter = event.target.value
    const breedLis = document.querySelectorAll("li")
    console.log(`${selectedLetter} selected!`)
    //didn't know what to do with the "text" element of breedLis at this point, so I .removed it
    console.log(breedLis)
    breedLis.forEach(li => {
      if (li.textContent[0] === selectedLetter) {
          li.style.display = ""
        } else {
            li.style.display = "none"
        }
    })
    

    //breedLis.forEach(li => {
      //console.log(li.style)
        // if (li.textContent[0] !== selectedLetter) {
          //  li.style.display = "none"
      //  } //else {
            //li.style.display = "none"}
    }
    
   /* breedLis.forEach(li => {
      const dogElement = li
      const dogName = li.textContent
      if (!dogName.startsWith(`${selectedLetter}`)) {
          // what's wrong with this???!
        dogElement.remove()
          //listBreeds(dogName)
      }
        
        
    })*/
    

//1. With the argument of the selected letter, filter through the... 
// ...dog name array and return a new array , then invoke listBreeds
//...with the new array as the argument


//let dogArray = ?


function initialRender(){
grabJSONimages()
grabJSONbreeds()
dropDown()

}


initialRender()