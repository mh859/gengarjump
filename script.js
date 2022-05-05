const one = document.getElementById("one");
const two = document.getElementById("two");
const score = document.getElementById("score");

function jump()
{
    one.classList.add("jump");
    setTimeout(() => 
        one.classList.remove("jump"), 500);
}

document.addEventListener('keypress', (event) => 
    {
        if(!one.classList.contains("jump")){
            jump();
            score.innerText++;
        }
    }   
)

setInterval(() => 
{
    const oneTop = parseInt(window.getComputedStyle(one)
    .getPropertyValue('top'));
    const twoLeft = parseInt(window.getComputedStyle(two)
    .getPropertyValue('left'));
    //score.innerText++;

    //if(twoLeft < 0){
      //  two.style.display='none';
    // }
    // else{
    //     two.style.display= '';
    // }

    if(twoLeft < 40 && twoLeft > 0 && oneTop >= 160){ 
    
        alert("You got a score of: " + score.innerText + "\n\nPlay again?");
        window.location.reload();
    }

})