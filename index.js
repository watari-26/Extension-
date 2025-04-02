
let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLead") )
let tabBtn = document.getElementById("tab-btn")
if(leadsFromLocalStorage)
{
    myLead = leadsFromLocalStorage
    render(myLead)
}


tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    render(myLead)
    })
    
})

function render(lead){
    let listItems =  ""
for (let i = 0; i < lead.length; i++) {

    listItems +=`
    <li>
        <a target='_blank' href ='${lead[i]}'  >
            ${lead[i]}
        </a>
    </li>
    `
}
ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead = []
    render(myLead)
})


inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
   
    inputEl.value=""
    localStorage.setItem("myLead", JSON.stringify(myLead) )
    render(myLead)
    
    
    
})



