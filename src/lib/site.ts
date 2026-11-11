export const WHATSAPP_NUMBER = "919629879026";
export const WHATSAPP_URL = "https://wa.me/919629879026";
export const EMAIL = "christholidaystravels@gmail.com";

export const branches = [
  {
    city: "Salem",
    label: "Salem (HO)",
    display: "+91 96298 79026",
    tel: "tel:+919629879026",
  },
  {
    city: "Madurai",
    label: "Madurai",
    display: "+91 63743 95526",
    tel: "tel:+916374395526",
  },
  {
    city: "Thoothukudi",
    label: "Thoothukudi",
    display: "+91 77081 04235",
    tel: "tel:+917708104235",
  },
] as const;

export function whatsappLink(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
