const textArea = document.getElementById("textarea");
const choices =  document.querySelector(".choices");


textArea.focus();
textArea.addEventListener("keyup", e =>{
    createTags(e.target.value);
} )

function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());

    choices.innerHTML = "";
    tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("choice");
        tagElement.innerText = tag;
        choices.appendChild(tagElement);
    });
    
    
}

