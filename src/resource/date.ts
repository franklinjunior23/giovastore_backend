interface FechaHora {
    fechaActualLima: string;
    horaActualLima: string;
  }
  
  export const obtenerFechaHora = (): FechaHora => {
    const date = new Date();
  
    // Obtener el día y asegurar que tenga 2 dígitos
    const day = String(date.getDate()).padStart(2, "0");
    // Obtener el mes y asegurar que tenga 2 dígitos
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    const fechaActualLima = `${day}/${month}/${year}`;
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    // Convertir a formato de 12 horas
    hours = hours % 12;
    hours = hours ? hours : 12; // Si las horas son 0, establecerlas como 12
  
    // Asegurar que los minutos tengan 2 dígitos
    minutes = Number(String(minutes).padStart(2, "0"));
    const horaActualLima = `${hours}:${minutes} ${ampm}`;
  
    return { fechaActualLima, horaActualLima };
  };
