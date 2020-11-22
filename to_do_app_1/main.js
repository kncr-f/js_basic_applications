var entered,btnDone,btnDelete,item,transfer;
function addList(){
    var created;
    entered=document.getElementById("txtToDo").value;
    if(entered!=""){
        created=document.createElement("li");
        document.getElementById("listInProgress").appendChild(created);
        created.innerHTML=entered;
        

        btnDone=document.createElement("img");
        btnDone.setAttribute("src","img/done.png");
        btnDone.setAttribute("class","btnDone");
        created.appendChild(btnDone);
        btnDone.addEventListener("click",function(){
           
                created.remove();
                var completedUl=document.getElementById("listCompleted");
                completedUl.appendChild(created);
                created.children[0].remove();


                
        })

        // var btns= document.getElementsByClassName("btnDone");

        // for (var i=0; i < btns.length;i++)
        // {
        //     btns[i].addEventListener('click',function(e){
        //         btns[i].parentNode.remove();
        //         //e.target.parentNode.remove();
        //     });
        // }

        // console.log(i);


        btnDelete=document.createElement("img");
        btnDelete.setAttribute("src","img/cancel.png");
        created.appendChild(btnDelete);
        btnDelete.addEventListener("click",function(){
            created.remove();
        });


        
    }else alert("Please Enter Something!");

    

}



