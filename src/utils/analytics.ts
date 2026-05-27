declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const initializeAnalytics = () => {
  const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  
  if (!GA4_ID) {
    console.warn('GA4 Measurement ID not found. Analytics will not be tracked.');
    return;
  }

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_ID}');
  `;
  document.head.appendChild(script2);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else {
    console.log('Analytics event:', eventName, eventParams);
  }
};

export const trackFormSubmission = (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
}) => {
  trackEvent('form_submission', {
    event_category: 'conversion',
    event_label: 'contact_form',
    ...formData,
  });
};

export const trackBuildingCardClick = (buildingName: string) => {
  trackEvent('building_card_click', {
    event_category: 'engagement',
    event_label: buildingName,
    building_name: buildingName,
  });
};

export const trackCTACallClick = () => {
  trackEvent('cta_call_click', {
    event_category: 'engagement',
    event_label: 'call_button',
  });
};
