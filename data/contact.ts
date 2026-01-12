

// types/contact.ts
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  interest: string;
}

export interface ContactSectionProps {
  title: string;
  subtitle: string;
  instructions: string;
  showForm?: boolean;
  showCalendarButton?: boolean;
}