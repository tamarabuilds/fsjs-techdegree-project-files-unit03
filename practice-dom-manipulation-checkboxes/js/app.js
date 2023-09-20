//1. Target the form element in the DOM.
  
//2. Attach an event listener to the form element to listen for any change events.

//3. Inside the event listener:
//  - Target the checkbox that triggered the change event.
//  - Get the combat style of the triggering checkbox from its data-combat-style attribute.
//  - Select all checkboxes from the DOM that share the same combat style as the triggering checkbox.
  
//3a. Next, loop over each checkbox with the matching combat style:
//  - If: the checkbox being looped over is NOT the one that triggered the event,
//    and the triggering checkbox is checked, then:
//    - Disable the checkbox currently being looped over.
//  - Else:
//    - Do not change its state.

const form = document.querySelector('form')

form.addEventListener('change', (e)=> {
    const checkbox = e.target
    console.log(e)
    const combatStyle = checkbox.dataset.combatStyle
    const sameCombatStyle = document.querySelectorAll(`input[data-combat-style=${combatStyle}]`)
    console.log(sameCombatStyle)

    for ( let i = 0; i < sameCombatStyle.length; i++ ){
        // My solution
        // if ( checkbox !== sameCombatStyle[i] && checkbox.checked){
        //     console.log(sameCombatStyle[i])
        //     sameCombatStyle[i].disabled = true
        // }

        // Other solution:
        const conflictingCheckbox = sameCombatStyle[i]
        conflictingCheckbox.disabled = checkbox.checked && conflictingCheckbox !== checkbox
    }

})