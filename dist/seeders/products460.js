"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedProducts = void 0;
const Products_1 = __importDefault(require("../models/Products"));
const dat = [
    {
        "nombre": "Licensed Cotton Computer",
        "img": "https://loremflickr.com/450/400/food?lock=4060543792971776",
        "precio": "694.00",
        "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "stock": 24,
        "createdAt": "2023-07-28T06:05:12.000Z",
        "updatedAt": "2023-07-28T06:05:12.000Z"
    },
    {
        "nombre": "Handcrafted Soft Bike",
        "img": "https://loremflickr.com/450/400/food?lock=2467994498236416",
        "precio": "642.00",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "stock": 22,
        "createdAt": "2023-07-28T06:04:45.000Z",
        "updatedAt": "2023-07-28T06:04:45.000Z"
    },
    {
        "nombre": "Gorgeous Rubber Ball",
        "img": "https://loremflickr.com/450/400/food?lock=5577463650320384",
        "precio": "300.00",
        "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "stock": 17,
        "createdAt": "2023-07-28T05:58:14.000Z",
        "updatedAt": "2023-07-28T05:58:14.000Z"
    },
    {
        "nombre": "Ergonomic Granite Chips",
        "img": "https://loremflickr.com/450/400/food?lock=3507318266265600",
        "precio": "587.00",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "stock": 25,
        "createdAt": "2023-07-28T05:56:19.000Z",
        "updatedAt": "2023-07-28T05:56:19.000Z"
    },
    {
        "nombre": "Recycled Concrete Car",
        "img": "https://loremflickr.com/450/400/food?lock=3048944091267072",
        "precio": "280.00",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "stock": 26,
        "createdAt": "2023-07-28T05:56:13.000Z",
        "updatedAt": "2023-07-28T05:56:13.000Z"
    },
    {
        "nombre": "Sleek Cotton Gloves",
        "img": "https://loremflickr.com/450/400/food?lock=8115015995359232",
        "precio": "721.00",
        "descripcion": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "stock": 21,
        "createdAt": "2023-07-28T05:55:54.000Z",
        "updatedAt": "2023-07-28T05:55:54.000Z"
    },
    {
        "nombre": "Practical Concrete Car",
        "img": "https://loremflickr.com/450/400/food?lock=8434515592609792",
        "precio": "162.00",
        "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "stock": 22,
        "createdAt": "2023-07-28T05:58:23.000Z",
        "updatedAt": "2023-07-28T05:58:23.000Z"
    },
    {
        "nombre": "Bespoke Fresh Pizza",
        "img": "https://loremflickr.com/450/400/food?lock=3239160261378048",
        "precio": "736.00",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "stock": 23,
        "createdAt": "2023-07-28T06:04:36.000Z",
        "updatedAt": "2023-07-28T06:04:36.000Z"
    }
];
const SeedProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const datos of dat) {
            const existingRecord = yield Products_1.default.findOne({ where: datos });
            if (!existingRecord) {
                yield Products_1.default.create(datos);
                console.log('New record inserted:', datos);
            }
            else {
                console.log('Record already exists. Skipping:', datos);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.SeedProducts = SeedProducts;
