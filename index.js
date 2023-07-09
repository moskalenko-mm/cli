const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const allContacts = await listContacts();
        console.log(allContacts);
        break;

      case "get":
        const contact = await getContactById(id);
        console.log(contact);
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.log(newContact);
        break;

      case "remove":
        const delContacts = await removeContact(id);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
  }
}

invokeAction(argv);
