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
    contactName,
    next,
  }) {
    try {
      //validar que exista la cuenta del contacto
      const contactAccount = await this.accountServices.findOneAccount({
        AccountAttributes: {
          [validation]: validationValue,
        },
        next,
      });
      const newContact = await ContacsModel.create({
        validation,
        validationValue,
        contactId: contactAccount.userId,
        userId,
        contactName,
      });
      return newContact;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllContacts({ userId, next }) {
    try {
      const users = await this.userServices.findUserById({ id: userId, next });
      const allContacts = await ContacsModel.findAll({
        where:{
          userId
        }
      })
      return allContacts
    } catch (error) {
      throw Error(error)
    }
  }
}

export default ContactService;
