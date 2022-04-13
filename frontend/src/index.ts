const data=document.getElementById("data");
fetch('http://localhost:3000/personas')
.then(response =>response.json())
.then(data =>getPersonas(data)) 


const getPersonas = (data: any)=>{
   console.log(data);
   let body="";


   for (let i=0;i<data.length;i++){
    body+=`<tr><td class="fw-bold ">${data[i].Id} </td><td class="fw-bold ">${data[i].Nombre} </td><td class="fw-bold ">${data[i].Edad} </td></tr>`;
      
     
     }
    document.getElementById("data")!.innerHTML=body
}
