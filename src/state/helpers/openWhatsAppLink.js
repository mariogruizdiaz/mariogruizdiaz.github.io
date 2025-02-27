// whatsappLink.js

export const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'Otro';
};

export const openWhatsAppLink = (phone, message) => {
  // Obtener el sistema operativo para determinar el dispositivo
  const os = getMobileOperatingSystem();
  const fullMessage = encodeURIComponent(message);
  
  let url;
  if (os === 'Otro') { // Suponemos que 'Otro' es escritorio
    // Para escritorio usamos WhatsApp Web y necesitamos incluir 'send' y el parámetro 'phone'
    url = `https://web.whatsapp.com/send?phone=${phone}&text=${fullMessage}`;
  } else {
    // Para móviles usamos la URL simplificada que no necesita 'send'
    url = `https://wa.me/${phone}?text=${fullMessage}`;
  }

  window.open(url, "_blank");
};

