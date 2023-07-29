"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerFechaHora = void 0;
const obtenerFechaHora = () => {
    const date = new Date();
    // Obtener el día, mes y año y asegurar que tengan 2 dígitos
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    const fechaActualLima = `${day}/${month}/${year}`;
    // Obtener las horas y minutos
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // Determinar si es AM o PM
    const ampm = hours >= 12 ? "pm" : "am";
    // Convertir a formato de 12 horas y asegurar que tengan 2 dígitos
    hours = hours % 12 || 12;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    // Obtener la zona horaria actual en formato UTC (por ejemplo, "-0500" para Lima)
    const timeZoneOffset = date.getTimezoneOffset();
    const timeZoneOffsetHours = Math.floor(Math.abs(timeZoneOffset) / 60).toString().padStart(2, "0");
    const timeZoneOffsetMinutes = (Math.abs(timeZoneOffset) % 60).toString().padStart(2, "0");
    const timeZone = `${timeZoneOffset >= 0 ? "-" : "+"}${timeZoneOffsetHours}${timeZoneOffsetMinutes}`;
    const horaActualLima = `${formattedHours}:${formattedMinutes} ${ampm} UTC${timeZone}`;
    return { fechaActualLima, horaActualLima };
};
exports.obtenerFechaHora = obtenerFechaHora;
/*
codigo antes del dia
interface FechaHora {
 fechaActualLima: string;
 horaActualLima: string;
}

export const obtenerFechaHora = (): FechaHora => {
 const date = new Date();

 // Obtener el día, mes y año y asegurar que tengan 2 dígitos
 const day = String(date.getDate()).padStart(2, "0");
 const month = String(date.getMonth() + 1).padStart(2, "0");
 const year = String(date.getFullYear());

 const fechaActualLima = `${day}/${month}/${year}`;

 // Obtener las horas y minutos
 let hours = date.getHours();
 let minutes = date.getMinutes();

 // Determinar si es AM o PM
 const ampm = hours >= 12 ? "pm" : "am";

 // Convertir a formato de 12 horas y asegurar que tengan 2 dígitos
 hours = hours % 12 || 12;
 const formattedHours = String(hours).padStart(2, "0");
 const formattedMinutes = String(minutes).padStart(2, "0");

 const horaActualLima = `${formattedHours}:${formattedMinutes} ${ampm}`;

 return { fechaActualLima, horaActualLima };
};



*/ 
