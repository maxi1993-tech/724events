export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// date.getMonth() numérote les mois de 0 à 11 ; MONTHS utilise les clés 1 à 12.
// Ajouter 1 aligne les deux numérotations pour retrouver le bon mois.
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
