declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}


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
