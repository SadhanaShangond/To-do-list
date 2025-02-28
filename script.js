const inputvalue = document.getElementById("inputtext");
const containerlist = document.getElementById("list-container");
const addbutton = document.getElementById("add");

addbutton.addEventListener("click",function(){

    let taskli = document.createElement("li");
    taskli.innerHTML=inputvalue.value;
    containerlist.appendChild(taskli);
    let removeli = document.createElement("p");
    removeli.innerHTML = "&times;";
    taskli.appendChild(removeli);

    inputvalue.value = "";
}
)
containerlist.addEventListener("click",function(e){
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "P"){
        e.target.parentElement.remove();
    }
});

