/*import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) =>{
    const {name, email, password} = req.body;
    try{
        const user = await UserModel.createUser(name, email, password);
        res.status(201).json({
        success: true,
        message: [{result: "A new account has been created!"}]
        });
    }
}*/

import * as UserModel from "../models/UserModel.js";

export const register = async (req,res) =>{
    const {name, email, password} = req.body;

    try{
        const user=await UserModel.createUser(name, email, password);
        res.status(201).json({sucess: true, message: [{result: "A new account has been created!"}

        ]
    });
    }catch(e){
        console.log(e),
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

export const loginUser = async (req,res) =>{
    const {email, password} = req.body;

    try{
        const user=await UserModel.loginUser(email, password);
        res.status(201).json({sucess: true, message: [{result: "Login Successfully."}

        ]
    });
    }catch(e){
        console.log(e),
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}