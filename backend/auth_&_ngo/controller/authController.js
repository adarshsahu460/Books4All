const express = require("express");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const signToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async function (req, res) {
  console.log("Signup request received:", req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await prisma.userInfo.create({
    data: {
      name: req.body.name,
      address: req.body.address,
      password: hashedPassword,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type,
    },
  });

  const token = signToken(newUser.email);
  console.log(newUser.id)
  res.status(201).json({
    status: "success",
    token,
    user: {
      id: newUser.id,
    },
  });
};

exports.login = async function (req, res) {
  const { email, password } = req.body;
  console.log(req.body)
  if (!email || !password) {
    return res.status(400).json({
        status: "fail",
        message: "cond1"
    });
  }

  const user1 = await prisma.userInfo.findUnique({
    where: { email: email },
    select: { password: true, id : true, type: true},
  });

  console.log(user1);
  if (!user1 || !(await bcrypt.compare(password, user1.password))) {
    return res.status(400).json({
        status: "fail",
        message: "cond2"
    });
  }

  const token = signToken(email);

  res.status(200).json({
    status: "success",
    token,
    user:{
      id : user1.id,
      type : user1.type
    }
  });
};
