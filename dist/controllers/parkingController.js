"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
exports.default = {
    // GET /parking/slot
    slot: (_req, res) => {
        res.json(1);
    },
    // GET /parking/request
    request: (_req, res) => {
        connection_1.default.all("SELECT * FROM Users", (_, result) => res.json(result));
    },
};
