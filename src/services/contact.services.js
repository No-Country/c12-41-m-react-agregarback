import ContacsModel from "../models/contacts.model.js";
import AppError from "../utils/AppError.js";
import UserServices from "./user.services.js";
import AccountServices from "./account.services.js";

class ContactService {
  userServices = new UserServices();
  accountServices = new AccountServices();

  async createNewContact({
    userId,
    validation,
    validationValue,
    contactId,
    contactName,
    next,
  }) {
    try {
      //validar que existe un usuario que sera el contacto
      const contact = this.userServices.findUserById({
        id: contactId,
        next,
      });
      //validar que exista la cuenta del contacto
      const contactAccount = this.accountServices.findOneAccount({
        AccountAttributes: {
          userId: contactId,
        },
        next,
      });
      const contactValidations = await Promise.all([contact, contactAccount]);
      //validar el cvu, cbu, account o alias sea correcto
      if (contactValidations[1][validation] != validationValue) {
        throw next(new AppError("validation method invalid"));
      }
      const newContact = await ContacsModel.create({
        validation,
        validationValue,
        contactId,
        userId,
        contactName,
      });
      return newContact;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ContactService;
