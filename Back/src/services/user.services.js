import UserModel from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import generateJWT from "../utils/generateJWT.js";
import bcrypt from "bcryptjs";

class UserServices {
  async createUser({ data, next }) {
    const {
      name,
      email,
      password,
      date_of_birth,
      dni,
      address,
      phone_number,
      username,
    } = data;
    try {
      const user = await UserModel.findOne({
        where: {
          dni,
        },
      });
      if (user) {
        throw next(new AppError("this user is already exist", 400));
      }
      const newUser = await UserModel.create(data);
      const token = await generateJWT(newUser.id);
      return { newUser, token };
    } catch (error) {
      throw new Error(error);
    }
  }

  async loginUser({ username, password, next, dni }) {
    try {
      const user = await UserModel.findOne({
        where: {
          username,
          dni,
          status: "active",
        },
      });
      if (!user) {
        throw next(new AppError("user not found", 404));
      }
      if (!(await bcrypt.compare(password, user.password))) {
        throw next(new AppError("invalid credentials", 401));
      }
      const token = await generateJWT(user.id);

      return { user, token };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserById({ id, next }) {
    try {
      const user = await UserModel.findOne({
        where: { id },
      });
      if (!user) {
        throw next(new AppError("user not found", 404));
      }
      if (user.status !== "active") {
        throw next(new AppError("user is not longer avialable", 400));
      }

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateOneUser({ userNewData, next, sessionUser }) {
    try {
      console.log(userNewData);
      const updatedUser = await sessionUser.update(userNewData);
      return updatedUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  async changePasswordOfUser({ password, user, newPassword , next }) {
    try {
      if (!(await bcrypt.compare(password, user.password))) {
        throw next(new AppError("password incorrect", 401));
      }
      const salt = await bcrypt.genSalt(12);
      const newSecretPassword = await bcrypt.hash(newPassword, salt);
      console.log(password, newPassword);

      const userWithPasswordUpdated = await user.update({
        password: newSecretPassword,
      });

      return userWithPasswordUpdated;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserServices;
