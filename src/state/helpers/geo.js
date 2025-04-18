// src/utils/geoInfo.js

export const fetchGeoData = async () => {
    let ip = null;
  
    // 🔹 1. Intentamos con ipapi.co
    try {
      const ipapiRes = await fetch('https://ipapi.co/json/');
      const ipapiData = await ipapiRes.json();
  
      if (ipapiData?.ip) {
        return {
          ip: ipapiData.ip,
          geoCountry: ipapiData.country_name || null,
          geoCity: ipapiData.city || null
        };
      }
    } catch (err) {
      console.warn("ipapi.co falló:", err);
    }
  
    // 🔹 2. Fallback: ipify para obtener IP
    try {
      const ipifyRes = await fetch('https://api.ipify.org?format=json');
      const ipifyData = await ipifyRes.json();
      ip = ipifyData.ip;
    } catch (err) {
      console.warn("ipify falló también:", err);
    }
  
    // 🔹 3. Fallback: geolocalización + reverse geocoding
    if (navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
  
            try {
              const reverseRes = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const reverseData = await reverseRes.json();
  
              const city = reverseData.address?.city ||
                           reverseData.address?.town ||
                           reverseData.address?.village || null;
  
              const country = reverseData.address?.country || null;
  
              resolve({
                ip,
                geoCountry: country,
                geoCity: city
              });
            } catch (err) {
              console.warn("Error en reverse geocoding:", err);
              resolve({
                ip,
                geoCountry: null,
                geoCity: null
              });
            }
          },
          (geoErr) => {
            console.warn("Geolocation denegada o fallida:", geoErr);
            resolve({
              ip,
              geoCountry: null,
              geoCity: null
            });
          },
          { timeout: 5000 }
        );
      });
    }
  
    // 🔚 Nada funcionó
    return {
      ip,
      geoCountry: null,
      geoCity: null
    };
  }
  