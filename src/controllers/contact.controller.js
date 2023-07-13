import ContactService from "../services/contact.services.js";
import catchAsync from "../utils/catchAsync.js";

const contactServices = new ContactService();

export const newContact = catchAsync(async (req, res, next) => {
  const { validation, validationValue, contactId, contactName } = req.body;
  const { userId } = req.params;
  const contact = await contactServices.createNewContact({
    userId,
    validation,
    validationValue,
    contactId,
    contactName,
    next,
  });

  return res.status(200).json({
    status: "success",
    message: "new contact",
    contact,
  });
});

export const findAll = catchAsync(async (req, res, next) => {
  return res.json(/* valor a retornar */);
});
