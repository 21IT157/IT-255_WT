

function getdata(){
    let isvalid = true;
    let Name = document.clgfrm.Name.value;
    let stud_id = document.clgfrm.stud_id.value;
    let idpasswd = document.clgfrm.idpasswd.value;
    
    //Name 
    if(Name.length == 0)
    {
        document.getElementById("idname").textContent = "Enter Name"
        isvalid = false
    }
    else{
        document.getElementById("idname").textContent = ""       
    }
    
    //Stud_id
    if(stud_id.length == 0)
    {
        document.getElementById("idstud_id").textContent = "Enter ID"
        isvalid = false
    }
    else{
        document.getElementById("idstud_id").textContent = ""       
    }

    //idpasswd
    if(idpasswd.length == 0)
    {
        document.getElementById("idpasswd").textContent = "Enter Password"
        isvalid = false
    }
    else{
        document.getElementById("idpasswd").textContent = ""       
    }
    
    if(isvalid)
    {
        document.clgfrm.submit();
    }
}