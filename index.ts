// get the skills heading h2 and the list of skills div
const skillsTitle=document.getElementById('skills-title');
const skillsList=document.getElementById('skills');
// add an event listener to the skills heading
skillsTitle?.addEventListener('click' , () =>{
    if (skillsList){
        //Toggle the display of the skills list bw block and none
        if (skillsList.style.display==='none'){
            skillsList.style.display = "block";//show the skills
        }else{
            skillsList.style.display = "none";//hide the skills
        }
    }
});