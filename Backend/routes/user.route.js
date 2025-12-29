const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_Secret = "Aditya";
const OtpModel = require("../models/otp.model");
const UserModel = require("../models/user.model");

router.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await OtpModel.findOneAndDelete({ phone });

  await OtpModel.create({
    phone,
    otp: otp.toString(),
    expiresAt,
  });

  console.log("OTP:", otp);

  res.json({ message: "OTP sent successfully" });
});

router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  const otpDoc = await OtpModel.findOne({ phone });

  if (!otpDoc) {
    return res.status(400).json({ message: "OTP not found" });
  }

  if (otpDoc.expiresAt < new Date()) {
    return res.status(400).json({ message: "OTP expired" });
  }

  if (otpDoc.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  let user = await UserModel.findOne({ phone });

  if (!user) {
    user = await UserModel.create({
      phone,
      isVerified: true,
    });
  }

  await OtpModel.deleteOne({ phone });

  const token = jwt.sign({ userId: user._id, phone }, JWT_Secret, {
    expiresIn: "7d",
  });

  res.json({
    message: "Login successful",
    token,
    user,
  });
});

module.exports = router;
