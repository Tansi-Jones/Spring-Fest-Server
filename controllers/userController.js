import Person from "../models/personModel.js";

export const submit = async (req, res) => {
  const { name, email, language } = req.body;

  try {
    const person = await Person.create({
      name,
      email,
      language,
    });

    res.status(201).json({ status: 201, message: "✅ New Register", person });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "❌ Failed to create new user",
      data: error,
      // message: error.message,
    });
  }
};
