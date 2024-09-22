let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');

btn.addEventListener('click', function() {
    let inputvalue = input.value.trim();
    
    if (inputvalue !== "") {
        let CreateEL = document.createElement('li');
        CreateEL.style.marginLeft="2rem"
        CreateEL.style.marginTop="1rem"
        CreateEL.style.listStyleType="none"
        CreateEL.style.fontSize="25px"
        // Create list item text
        CreateEL.innerText = inputvalue;
        input.value = "";
        
        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'x'; // Cross symbol
        deleteBtn.style.marginLeft="17rem"
        deleteBtn.style.fontSize="25px"
        // deleteBtn.style.marginTop="1rem"
        deleteBtn.style.backgroundColor="transparent"
        deleteBtn.style.position="relative"
        
        // Append delete button to the list item
        CreateEL.appendChild(deleteBtn);
        list.appendChild(CreateEL);

        CreateEL.addEventListener('click', function() {
            if (CreateEL.style.textDecoration === "line-through") {
                CreateEL.style.textDecoration = "none";
                CreateEL.style.backgroundColor = "rgb(232, 232, 232)";
                CreateEL.style.color = "black";
            } else {
                CreateEL.style.textDecoration = "line-through"; 
                CreateEL.style.color = "white";
                CreateEL.style.backgroundColor = "gray";
            }
        });

    

        // Remove the list item on clicking the delete button
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            CreateEL.remove();
        });
    }
});







