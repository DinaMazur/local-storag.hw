const form = document.getElementById('contactForm');
const contactsDiv = document.getElementById('contacts');
const getContacts = ()=>JSON.parse(localStorage.getItem('contacts')) || [];
const setContacts = (contacts)=>localStorage.setItem('contacts', JSON.stringify(contacts));
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let contacts = getContacts();
    contacts.push({
        name: form.name.value,
        surname: form.surname.value,
        phone: form.phone.value,
        email: form.email.value
    });
    setContacts(contacts);
    form.reset();
    loadContacts();
});
const loadContacts = ()=>{
    contactsDiv.innerHTML = getContacts().map((c, i)=>`
        <div class="contact">
            <p>${c.name} ${c.surname}</p>
            <p>\u{1F4DE} ${c.phone}</p>
            <p>\u{2709}\u{FE0F} ${c.email}</p>
            <button onclick="deleteContact(${i})">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        </div>
    `).join('');
};
const deleteContact = (index)=>{
    let contacts = getContacts();
    contacts.splice(index, 1);
    setContacts(contacts);
    loadContacts();
};
window.onload = loadContacts;

//# sourceMappingURL=local-storag.hw.816e7b21.js.map
