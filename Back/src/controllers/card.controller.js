import catchAsync from "../utils/catchAsync.js";
import CardServices from "../services/card.services.js";
const cardServices = new CardServices();

export const cardsByAccount = catchAsync(async (req, res, next) => {
  const { userId, accountId } = req.params;
  const cards = await cardServices.getAllCardsByAccount({
    userId,
    accountId,
    next,
  });

  return res.status(200).json({
    status: "success",
    message: "all cards by account",
    cards,
  });
});

export const CreateNewCard = catchAsync(async (req, res, next) => {
  const { userId, accountId } = req.params;
  const { type, category } = req.body;
  const card = await cardServices.createOneCard({
    accountId,
    type,
    userId,
    category,
    next,
  });

  return res.status(200).json({
    status: "success",
    message: "new card created",
    card,
  });
});

export const findAll = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const cards = await cardServices.getAllCards({ userId, next });

  return res.status(200).json({
    status: "success",
    message: "all cards",
    cards,
  });
});
