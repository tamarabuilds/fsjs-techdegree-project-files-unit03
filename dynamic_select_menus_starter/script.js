/* ================================================================================== */
/* ===================== SELECT ELEMENT WARM-UP ===================================== */
/* ================================================================================== */

// 1: select the animals select element and store it in a variable
const animalSelect = document.querySelector("#animals")
// console.log(animalSelect)


// 2: select the breeds select element and store it in a variable
const breedSelect = document.querySelector("#breeds")
// console.log(breedSelect)

// 3: select all of the option elements with a [data-theme] attribute and store them in a variable
const breedOptions = document.querySelectorAll("option[data-breed]")
// console.log(breedOptions)

// 4: add an event listener on the animals select element that listens for the "change" event
animalSelect.addEventListener('change', (e)=> {
  console.log(`animalSelect.value is ${animalSelect.value}`)
  //   5: start a loop to iterate over each breed option
  for ( let i = 0; i < breedOptions.length; i++){
    //     6: check if the animals select value is not equal to the current breed option's data-breed attribute value
    if ( animalSelect.value !== breedOptions[i].getAttribute('data-breed')){
      // console.log(`no match`)
      //       7: if they are not equal, hide the current breed option
      // Learned how to set the hidden attribute on stack overflow: https://stackoverflow.com/questions/20518143/hiding-an-element-difference-between-javascript-attribute-and-css-style
      // breedOptions[i].setAttribute("hidden", true)
      breedOptions[i].hidden = true
      breedOptions[i].disabled = true
    } else {
      //       8: if they are equal, do not hide (or show) the current breed option
      // breedOptions[i].removeAttribute('hidden')
      breedOptions[i].hidden = false
      breedOptions[i].disabled = false
    }
  }
  //   9. check if the breeds select value is NOT equal to an empty string
  if (breedSelect.value !== ''){
    console.log(`breedSelect is ${breedSelect}`)
    //     10. if it's not an empty string, set the breeds select value to the second option's value
    console.log(breedSelect.value)
    breedSelect.value = breedOptions.value='reselect'
  }
})


// TESTING TIP: Select an animal, select a matching breed, then change
// the animal again, see if the breed also changes to "Please choose again"

//==============================================================================//
//====================DON'T CHANGE THE CODE BELOW===============================//
//==============================================================================//
const form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");
successMessage.style.display = "none";
errorMessage.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isMatch =
    (document.querySelector("#animals").value.includes("Dogs") &&
      document.querySelector("#breeds").value.includes("Dogs")) ||
    (document.querySelector("#animals").value.includes("Cats") &&
      document.querySelector("#breeds").value.includes("Cats"));

  if (isMatch) {
    successMessage.style.display = "inherit";
    errorMessage.style.display = "none";
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "inherit";
  }
});
