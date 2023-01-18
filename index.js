const init = () => {
    const formElement=document.querySelector("form")
formElement.addEventListener('submit',function(event)
{
 event.preventDefault();
     const SearchbyIDField= document.getElementById("SearchbyID");
     const id= SearchbyIDField.value;

    fetch(`http://localhost:3000/IMAGES/${id}`)
    .then((res)=>res.json())
    .then((image)=>
    {
        const TitleElement=document.querySelector("h4");
        const summaryElement=document.querySelector("p");
        const imageElement=document.querySelector("img");

        TitleElement.innerHTML=image.Title
        summaryElement.innerHTML=image.summary
        imageElement.src = image.image
    });
    });
  
};

document.addEventListener('DOMContentLoaded', init);

