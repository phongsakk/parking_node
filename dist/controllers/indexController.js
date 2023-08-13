"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    index: (_req, res) => {
        res.send("Hello World!");
    },
    register: (req, res) => {
        let { username, password, confirm_password } = req.body;
        if (!username || !password || !confirm_password) {
            res.status(400).json({
                error: "Parameter require parameter",
                data: {
                    username: !!username,
                    password: !!password,
                    confirm_password: !!confirm_password,
                },
            });
        }
        if (password != confirm_password) {
            res.status(400).json({ error: "Password not match" });
        }
        // todo: save to database
        res.status(200).json({ success: true });
    },
    login: (req, res) => {
        let { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({
                error: "Parameter require parameter",
                data: {
                    username: !!username,
                    password: !!password,
                },
            });
        }
        // search username
        let user = false;
        if (!user) {
            res.status(400).json({ error: "User not found" });
        }
        // compare password
        let password_match = false;
        if (!password_match) {
            res.status(400).json({ error: "Wrong Password" });
        }
        // update user token
        let user_token = "aSdu3oiDcsdjZXFOS";
        res.status(200).json({
            success: true,
            user_token: user_token,
        });
    },
};
