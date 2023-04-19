export function clearText(text: string) {
  return text.replace(/[^а-яА-Я іІїЇєЄ'-]/g, '').replace(/\s\s+/g, ' ');
}

export function toLowerCase(text: string) {
  return text.toLowerCase();
}
