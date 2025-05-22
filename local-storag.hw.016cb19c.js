let form=document.getElementById("contactForm"),contactsDiv=document.getElementById("contacts"),getContacts=()=>JSON.parse(localStorage.getItem("contacts"))||[],setContacts=t=>localStorage.setItem("contacts",JSON.stringify(t));form.addEventListener("submit",t=>{t.preventDefault();let e=getContacts();e.push({name:form.name.value,surname:form.surname.value,phone:form.phone.value,email:form.email.value}),setContacts(e),form.reset(),loadContacts()});let loadContacts=()=>{contactsDiv.innerHTML=getContacts().map((t,e)=>`
        <div class="contact">
            <p>${t.name} ${t.surname}</p>
            <p>\u{1F4DE} ${t.phone}</p>
            <p>\u{2709}\u{FE0F} ${t.email}</p>
            <button onclick="deleteContact(${e})">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        </div>
    `).join("")},deleteContact=t=>{let e=getContacts();e.splice(t,1),setContacts(e),loadContacts()};window.onload=loadContacts;
//# sourceMappingURL=local-storag.hw.016cb19c.js.map
