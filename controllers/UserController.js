import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await UserModel.createUser(name, email, password);

    res.status(201).json({
      success: true,
      message: [{ result: "A new account has been created!" }],
    });
  } catch (e) {
    console.log(e);
    res.status(e.statusCode || 500).json({
      success: false,
      message: e.message || "Internal Server Error",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await UserModel.loginUser(email, password);

    res.status(200).json({
      success: true,
      token,
      user,
      message: [{ result: "Login Successfully." }],
    });
  } catch (e) {
    console.log(e);
    res.status(e.statusCode || 500).json({
      success: false,
      message: e.message || "Internal Server Error",
    });
  }
};
