export const whatsappNumber = "5511977208463";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const instagramUrl =
  "https://www.instagram.com/napoleao.barbeiro.cabeleireiro/";

export const address = {
  street: "Alameda Família Matieli, 224 - Cs 2",
  neighborhood: "Jardim Santa Marta",
  city: "Sorocaba - SP",
};

export const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4871.477137926804!2d-47.5197876!3d-23.433115799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f518840a7b37%3A0xbdca1ca2cf52dc1c!2sN.GALLAB!5e1!3m2!1sen!2sbr!4v1783422293452!5m2!1sen!2sbr";

export const businessHours = [
  { day: "Terça a Sexta", hours: "9h às 19h" },
  { day: "Sábado", hours: "9h às 19h" },
  { day: "Domingo e Segunda", hours: "Fechado" },
];
