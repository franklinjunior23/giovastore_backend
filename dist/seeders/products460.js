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
        nombre: 'Seccional Izquierdo Milo Tapizado En Tela',
        img: "https://plazahome.pe/wp-content/uploads/2022/12/7.-Sofa-en-L-Milo.jpg",
        precio: "1650.00",
        descripcion: "Seccional iquierdo Milo Tapizado En Tela con cojines en asiento y respaldo rellenos de espuma y algodón tapizado en tela con estructura de madera con patas de madera.El Seccional Milo Tapizado En Tela con un diseño único y elegante, donde la comodidad y modernidad se unen formando un sofá versátil, elegante y confortable. Con cojines de asiento y respaldos suaves gracias a su relleno de espuma y algodón lo cual están sobre una estructura construida de madera para otorgarle mucho más confort y seguridad. El Seccional Milo Tapizado En Tela está diseñado para proporcionar un confort excepcional en cualquier posición, gracias a su diseño complementa cualquier salón.No incluye Cojines decorativos",
        stock: 10
    },
    {
        nombre: 'Seccional Derecho Nacho tapizado tela',
        img: "https://plazahome.pe/wp-content/uploads/2023/06/Seccional-Derecho-Nacho-tapizado-tela-2-768x768.jpg",
        precio: "1579.00",
        descripcion: "Seccional Derecho Nacho con cojines en asiento y respaldo rellenos de Napa + Espuma tapizado en tela con estructura de madera con patas de metal lacado en negro. El Seccional Derecho Nacho con un diseño elegante y moderno que lo hacen sofá en L versátil y confortable. Su diseño moderno compuesto por forma en L haciéndolo un sofá ideal para ese diseño moderno y elegante.",
        stock: 10
    },
    {
        nombre: "Centro De Entretenimiento Prasa",
        img: "https://plazahome.pe/wp-content/uploads/2020/06/VILL203.jpg",
        precio: "749.00",
        descripcion: "Decora cada rincón de tu hogar con los muebles de Decohome, donde nos caracterizamos en ofrecer productos con altos estandares de calidad en tiempos de entrega reducidos. Comienza a embellecer mucho mas tu hogar con este hermoso CENTRO DE ENTRETENIMIENTO PRASA - Roble Rústico / Blanco",
        stock: 15
    },
    {
        nombre: "Escritorio Pepe con 2 Cajones y Repisas Laterales",
        img: "https://plazahome.pe/wp-content/uploads/2023/02/Escritorio-Pepe-1.jpg",
        precio: "849.00",
        descripcion: "Escritorio Pepe con 2 Cajones y Repisas Laterales es un elegante y funcional escritorio diseñado para brindar comodidad y practicidad en tu espacio de trabajo u oficina en el hogar. Este escritorio cuenta con un diseño moderno y compacto, ideal para optimizar el espacio en cualquier ambiente.",
        stock: 10
    },
    {
        nombre: "Escritorio de Melamina Salim",
        img: "https://plazahome.pe/wp-content/uploads/2020/05/VIL0124-1.jpg",
        precio: "709.00",
        descripcion: "El Escritorio de Melamina Salim es una elegante y moderna adición para tu espacio de trabajo o estudio. Diseñado con atención a los detalles, este escritorio combina funcionalidad y estilo para brindarte una experiencia de trabajo excepcional.",
        stock: 20
    },
    {
        nombre: "Escritorio de Melamina Power",
        img: "https://plazahome.pe/wp-content/uploads/2021/04/2-ESCRITORIO-POWER-1-768x768.jpg",
        precio: "849.00",
        descripcion: "El Escritorio de Melamina Power es una opción funcional y estética para crear un área de trabajo eficiente y productiva. Ya sea en la oficina o en el hogar, este mueble te brinda la comodidad y la practicidad necesarias para alcanzar tus metas y objetivos laborales con estilo. ¡Potencia tu productividad y creatividad con el Escritorio de Melamina Power!",
        stock: 20
    },
    {
        nombre: "Escritorio de Melamina Acre",
        img: "https://plazahome.pe/wp-content/uploads/2020/05/ERB-2689_1-scaled-scaled-768x768.jpg",
        precio: "609.00",
        descripcion: "El Escritorio de Melamina Acre es una opción versátil y funcional para crear un espacio de trabajo eficiente y cómodo. Diseñado con cuidado y precisión, este escritorio ofrece una solución práctica y elegante para tus necesidades laborales o de estudio.",
        stock: 20
    },
    {
        nombre: "Organizador Manchester 8 Secciones",
        img: "https://plazahome.pe/wp-content/uploads/2020/06/VILL222-768x768.jpg",
        precio: "609.00",
        descripcion: "El Organizador Manchester de 8 Secciones es un práctico y elegante accesorio que te ayudará a mantener tu espacio ordenado y bien organizado. Diseñado con atención a los detalles, este organizador ofrece una solución versátil para almacenar y clasificar diferentes objetos, manteniéndolos al alcance de tu mano y evitando el desorden en tu hogar u oficina.",
        stock: 20
    }, {
        nombre: "Closet Allegro 4 Puertas / 2 Cajones",
        img: "https://plazahome.pe/wp-content/uploads/2020/06/CLW-2143_1-scaled.jpg",
        precio: "1329.00",
        descripcion: "El Closet Allegro de 4 Puertas y 2 Cajones es una solución ideal para el almacenamiento y organización de tus prendas y accesorios en el hogar. Con su diseño moderno y funcional, este armario ofrece un amplio espacio interior para guardar tu ropa de forma ordenada y accesible, mientras añade un toque de elegancia a tu habitación.",
        stock: 15
    },
    {
        nombre: "Centro De Entretenimiento – Polonia",
        img: "https://plazahome.pe/wp-content/uploads/2020/05/VIL0113WE.jpg",
        precio: "589.00",
        descripcion: "El Centro de Entretenimiento está compuesto por una estructura resistente y duradera, fabricada con materiales de alta calidad, como madera sólida y laminada, lo que garantiza su estabilidad y capacidad para soportar el peso de tus dispositivos electrónicos.",
        stock: 20
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
