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
        nombre: "Camiseta básica blanca",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690869435/polo_blanco_ug6oan.jpg",
        "precio": "15.00",
        "descripcion": "Esta camiseta básica de algodón en color blanco es una prenda imprescindible en tu colección de ropa. Su diseño sencillo y versátil te permite combinarla fácilmente con cualquier outfit, ya sea para un look casual o más elegante. ",
        "stock": 50
    },
    {
        nombre: "Camiseta estampada",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690869434/camiseta_estampa_ykn78o.jpg",
        precio: "20.00",
        descripcion: "Agrega un toque de estilo y originalidad a tu look con esta camiseta estampada. Su diseño con estampado y cuello redondo la hace resaltar entre las demás. Perfecta para looks informales y relajados.",
        "stock": 30
    },
    {
        nombre: "Pantalones vaqueros azules",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690869434/pantalon_vaquerp_zedog7.jpg",
        precio: "40.00",
        descripcion: "Estos pantalones vaqueros de estilo clásico en color azul son un básico atemporal en tu vestuario. Su diseño versátil te permite usar para diversas ocasiones. Su ajuste cómodo y su tejido resistente aseguran que se pueden usar durante mucho tiempo.",
        stock: 20
    },
    {
        nombre: "Vestido de verano",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690869959/rBVap2DfRRyAQLiSAAEHSoTIMXU249.jpg_xnyjg7.webp",
        precio: "50.00",
        descripcion: "Prepárate para el verano con este encantador vestido de tirantes. Su diseño ligero y fresco te mantiene cómodo durante los días calurosos.Ideal para paseos en la playa, salidas con amigos o eventos al aire libre.",
        "stock": 15
    },
    {
        nombre: "Chaqueta de cuero",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870067/Chaqueta-en-cuero-sintetico---Negro---H-M-CL_ubcbgy.jpg",
        precio: "80.00",
        descripcion: "Prepárate para el verano con este encantador vestido de tirantes. Su diseño ligero y fresco te mantiene cómodo durante los días calurosos. Ideal para paseos en la playa, salidas con amigos o eventos al aire libre.",
        "stock": 25
    },
    {
        nombre: "poleras con capucha",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870122/sudadera_mujer_uniformes_rmsbee.jpg",
        precio: "35.00",
        descripcion: "Esta polera con capucha es perfecta para tus actividades deportivas o para lucir un look casual y cómodo. Su diseño moderno y bolsillo delantero le dan un toque especial. El tejido de alta calidad asegura comodidad durante todo el día.",
        stock: 40
    },
    {
        nombre: "Falda plisada",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870175/20303c.89_rwujtc.jpg",
        precio: "30.00",
        descripciom: "Esta elegante falda plisada en color blanco es una prenda versátil y aumentará para añadir a tu armario.",
        stock: 10
    },
    {
        nombre: "Camisa de rayas",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870233/0199495401_1_1_16_tv3dlj.webp",
        precio: "25.00",
        descripcion: "Esta elegante falda plisada en color blanco es una prenda versátil y aumentará para añadir a tu armario.",
        stock: 35
    },
    {
        nombre: "Zapatos de cuero",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870275/Dcuero2-10-scaled-1_upf9gk.webp",
        precio: "60.00",
        descripcion: "Esta elegante falda plisada en color blanco es una prenda versátil y aumentará para añadir a tu armario.Su diseño plisado y corte favorecedor le dan un toque femenino y encantador. ",
        stock: 18
    },
    {
        nombre: "Gorro de lana",
        img: "https://res.cloudinary.com/dw4ebpypt/image/upload/v1690870350/40a86b46859eba4f04a9bc2a29bdf3a9_kgwcm7.jpg",
        precio: "13.00",
        descripcion: "Mantén tu cabeza abrigada con este gorro de lana suave y cálido en color marrón.Perfecto para los días fríos de invierno.",
        stock: 50
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
