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
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      status: newUser.status,
      date_of_birth: newUser.date_of_birth,
      dni: newUser.dni,
      address: newUser.address,
      phone_number: newUser.phone_number,
      username: newUser.username,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { username, password, dni } = req.body;
  const { user, token } = await userServices.loginUser({
    username,
    password,
    dni,
    next,
  });

  return res.status(200).json({
    message: "login succes",
    status: "succes",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      status: user.status,
      date_of_birth: user.date_of_birth,
      dni: user.dni,
      address: user.address,
      phone_number: user.phone_number,
      username: user.username,
    },
  });
});

export const updateUserInfo = catchAsync(async (req, res, next) => {
  const { name, email, date_of_birth, dni, address, phone_number, username } =
    req.body;
  const { sessionUser } = req;

  const userNewData = {
    name: name || sessionUser.name,
    email: email || sessionUser.email,
    date_of_birth: date_of_birth || sessionUser.date_of_birth,
    dni: dni || sessionUser.dni,
    address: address || sessionUser.address,
    phone_number: phone_number || sessionUser.phone_number,
    username: username || sessionUser.username,
  };

  const updatedUser = await userServices.updateOneUser({
    userNewData,
    next,
    sessionUser,
  });

  return res.status(200).json({
    message: "update succes",
    status: "succes",
    updatedUser,
  });
});

export const changePassword = catchAsync(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const { sessionUser } = req;

  const updatedUser = await userServices.changePasswordOfUser({
    password: oldPassword,
    user: sessionUser,
    newPassword,
    next,
  });

  return res.status(200).json({
    message: "update succes",
    status: "succes",
    updatedUser,
  });
});

export const getUserById = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const data = await userServices.findUserById({ id: userId, next });
  return res.status(200).json(data);

});
