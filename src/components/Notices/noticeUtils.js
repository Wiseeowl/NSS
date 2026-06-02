export const CATEGORIES = [
  "All",
  "Health",
  "Environment",
  "Education",
  "Community",
  "Awareness",
];

export function inferCategory(notice) {
  const text = (notice.title + " " + notice.description).toLowerCase();
  if (/blood|health|medical|checkup/.test(text))             return "Health";
  if (/tree|environment|swachh|clean|plantation/.test(text)) return "Environment";
  if (/education|digital|literacy|teach|school/.test(text))  return "Education";
  if (/food|distribution|community|village/.test(text))      return "Community";
  return "Awareness";
}

export function isUpcoming(dateStr) {
  return new Date(dateStr) > new Date();
}