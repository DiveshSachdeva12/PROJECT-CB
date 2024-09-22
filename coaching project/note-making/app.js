let input= document.querySelector('input')
let btn= document.querySelector('button')
let list= document.getElementById('mylist')
let error= document.createElement('h1')
error.style.color="red"


btn.addEventListener('click',function(){
    let inputevalue= input.value.trim()
    
    if(inputevalue !==""){
    let CreateEL= document.createElement('li')

    CreateEL.style.marginBottom = "20px"; 
    CreateEL.style.marginLeft="25rem"
    CreateEL.style.fontSize="30px"
    CreateEL.style.listStyleType="numeric"
    CreateEL.style.backgroundColor="#caf0f8"
    CreateEL.style.width="660px"
    CreateEL.style.border="none"
    CreateEL.style.gap="20px"
    CreateEL.style.paddingLeft="30px"
    CreateEL.style.padding="20px"

    
    
    list.append(CreateEL)
    CreateEL.innerText=inputevalue
    input.value=""
    error.innerText = "";

    CreateEL.addEventListener('click',function(){
        CreateEL.remove()
    })
}
else{
    error.innerText="You have to first fill the input box..!!"
    document.body.append(error);
}
})