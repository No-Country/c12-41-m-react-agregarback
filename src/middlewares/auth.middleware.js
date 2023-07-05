import { promisify } from "util";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";
import UserServices from "../services/user.services.js";

export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.SECRET_JWT_SEED
  );

  const user = await UserModel.findOne({
    where: {
      id: decoded.id,
      status: true,
    },
  });

  if (!user) {
    return next(
      new AppError("The owner of this token it not longer available", 401)
    );
  }
  req.sessionUser = user;
  next();
});

// export const protectAccountOwner = catchAsync(async (req, res, next) => {
//   const { userId } = req.params;
//   const user = new UserServices().findUserById();
//   const { sessionUser } = req;

//   if (user.id !== sessionUser.id) {
//     return next(new AppError("You do not own this account.", 401));
//   }

//   next();
// });
