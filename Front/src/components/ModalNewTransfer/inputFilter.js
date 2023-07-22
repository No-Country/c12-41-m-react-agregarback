export const filterContacsByName = (e, setListOfContactsFiltered, contacts) => {
    e.preventDefault();
    const nameToFilter = e.target.filterContact.value.toLowerCase()
    const newData = contacts.filter((contact) => contact.contactName.toLowerCase().includes(nameToFilter))
    setListOfContactsFiltered(newData)
    e.target.reset()
  };