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
    user:{
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
    user:{
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

export const updateUserInfo = catchAsync(async (req, res ,next ) => {




  
  return res.status(200).json({
    message: "login succes",
    status: "succes",
    token,
    user:{
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
})