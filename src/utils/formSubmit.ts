export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const submitForm = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!ACCESS_KEY) {
    console.error('Web3Forms access key not found');
    return {
      success: false,
      message: 'Email service not configured. Please contact us directly.',
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        to: 'info@rockportgroup.ca',
        subject: `LEASING INQUIRY from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Failed to send email');
    }

    return {
      success: true,
      message: 'Thank you! We will contact you shortly.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.',
    };
  }
};
