import pool from "../config/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const createUser = async (name, email, password) => {
    if (!name || !email || !password || 
        name.trim() === '' || email.trim() === '' || password.trim() === '') {
        const error = new TypeError('Name, Email and Password are required.');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isEmail(email)) {
        const error = new TypeError('Invalid email address.');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isStrongPassword(password)) {
        const error = new TypeError('Password is not strong enough.');
        error.statusCode = 400;
        throw error;
    }

  
    const [exists] = await pool.query(
        "SELECT email FROM tbluser WHERE email = ?",
        [email]
    );

    if (exists.length > 0) {
        const error = new Error(`The email ${email} is already used.`);
        error.statusCode = 400;
        throw error;
    }

    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbluser (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
    );

    return newUser;
};


export const loginUser = async (email, password) => {
    if (!email || !password || 
        email.trim() === '' || password.trim() === '') {
        const error = new TypeError('Email and Password are required.');
        error.statusCode = 400;
        throw error;
    }

    
    const [user] = await pool.query(
        "SELECT * FROM tbluser WHERE email = ?",
        [email]
    );

    if (user.length === 0) {
        const error = new Error(`An account with the email: ${email} does not exist.`);
        error.statusCode = 400;
        throw error;
    }

    
    const validPassword = bcrypt.compareSync(password, user[0].password);
    if (!validPassword) {
        const error = new Error("Incorrect password.");
        error.statusCode = 400;
        throw error;
    }

    
    const token = jwt.sign(
        { id: user[0].id },
        process.env.SECRET,
        { expiresIn: "1d" }
    );

    return { token, user: user[0] };
};

export const getUser = async (id) => {
    if (isNaN(parseInt(id))) {
        throw new Error("Invalid ID");
    }

    const [user] = await pool.query(
        "SELECT * FROM tbluser WHERE id = ?",
        [id]
    );

    return user;
};