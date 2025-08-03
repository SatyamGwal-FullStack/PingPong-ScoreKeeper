const displayHead1 = document.getElementById("p1score");
       const displayHead2 = document.getElementById("p2score");
       const p1Button =  document.getElementById("p1btn");
       const p2Button =  document.getElementById("p2btn");
       const rst = document.getElementById("reset");
       const selectOption = document.getElementById("playTo");

       let p1Score = 0;
       let p2Score = 0;
       let winningScore = 4;
       let isGameOver = false;
       let resetVal = 0;

       
       p1Button.addEventListener('click', function () {
        if(!isGameOver){
            p1Score += 1;
        } if(p1Score === winningScore){
            isGameOver = true
            displayHead1.classList.add('has-text-success');
            displayHead2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        displayHead1.textContent = p1Score;
       });


       p2Button.addEventListener('click', function () {
        if(!isGameOver){
            p2Score += 1;
        } if(p2Score === winningScore){
            isGameOver = true
            displayHead2.classList.add('has-text-success');
            displayHead1.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        displayHead2.textContent = p2Score;
       });


       selectOption.addEventListener('change',function(){
        winningScore = parseInt(this.value);
        resetAll();
       })

       rst.addEventListener('click', resetAll);

       function resetAll(){
        isGameOver = false;
        p1Score = 0;
        p2Score = 0;
        displayHead1.textContent = 0;
        displayHead2.textContent = 0;
        displayHead1.classList.remove('has-text-success','has-text-danger');
        displayHead2.classList.remove('has-text-success','has-text-danger');
        p1Button.disabled = false;
        p2Button.disabled = false;
       }