import React, { useEffect } from 'react';
import './GoogleCalendarButton.css'; // Archivo CSS para estilos personalizados

const GoogleCalendarButton = () => {
  useEffect(() => {
    // Agregar el enlace del CSS de Google Calendar
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Agregar el script de Google Calendar
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    // Configurar el botón de calendario después de cargar el script
    script.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        const target = document.getElementById('google-calendar-button');
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0oumedLjGxpKHzdobD8Pq4vqWP8N7Y-rd1rRdJkVEAEjmAliL2zLjhzWKLDTO3RbKujKUbkrAQ?gv=true',
          color: '#bf00dc',
          label: 'Agendar DEMO',
          target,
        });
      }
    };

    // Cleanup para eliminar los scripts y enlaces al desmontar
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="custom-calendar-button">
      <div id="google-calendar-button"></div>
    </div>
  );
};

export default GoogleCalendarButton;
