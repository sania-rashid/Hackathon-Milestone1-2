// get the skills heading h2 and the list of skills div
var skillsTitle = document.getElementById('skills-title');
var skillsList = document.getElementById('skills');
// add an event listener to the skills heading
skillsTitle === null || skillsTitle === void 0 ? void 0 : skillsTitle.addEventListener('click', function () {
    if (skillsList) {
        //Toggle the display of the skills list bw block and none
        if (skillsList.style.display === 'none') {
            skillsList.style.display = "block"; //show the skills
        }
        else {
            skillsList.style.display = "none"; //hide the skills
        }
    }
});
