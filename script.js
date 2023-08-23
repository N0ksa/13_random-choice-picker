const textArea = document.getElementById("textarea");
const choices =  document.querySelector(".choices");


textArea.focus();
textArea.addEventListener("keyup", e =>{
    createTags(e.target.value);

    if (e.key === "Enter"){
        setTimeout(() => {
            e.target.value = "";
        }, 10)


        randomSelect();
    }
} )

function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());

    choices.innerHTML = "";
    tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("choice");
        tagElement.innerText = tag;
        choices.appendChild(tagElement);
    });
    
    
}

function randomSelect(){
    const times = 25;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() =>{
            removeHighlight(randomTag);
        }, 100)


    }, 100)

        setTimeout(() => {
            clearInterval(interval);

            setTimeout(() => {
                const randomChoice = pickRandomTag()
                highlightTag(randomChoice);
            }, 100)
        }, times * 100)


}

function pickRandomTag(){
    const tags = document.querySelectorAll(".choice");
    return tags[Math.floor(Math.random() * tags.length)];

}


function highlightTag(tag){
    tag.classList.add("selected");
}

function removeHighlight(tag){
    tag.classList.remove("selected");
}
