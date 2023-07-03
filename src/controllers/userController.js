import catchAsync from "../utils/catchAsync.js";
import UserServices from "../services/user.services.js";
const userServices = new UserServices();

export const singUp = catchAsync(async (req, res, next) => {
  const data = req.body;
  const { newUser, token } = await userServices.createUser({ data, next });

  return res.status(200).json({
    message: "user created",
    status: "succes",
    token,
    user: newUser,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const { user, token } = await userServices.loginUser({
    email,
    password,
    next,
  });

  return res.status(200).json({
    message: "login succes",
    status: "succes",
    token,
    user,
  });
});
