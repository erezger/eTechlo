// הפונקציה ששולחת את האירוע ל-Google Analytics
export const trackLeadConversion = () => {
  // מוודא שהפונקציה gtag קיימת
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'lead_form_submitted', {
      'event_category': 'conversion',
      'event_label': 'Contact Form Success',
    });
  }
};
