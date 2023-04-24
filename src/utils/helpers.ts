export function clearText(text: string) {
  return text.replace(/[^а-яА-Я іІїЇєЄ'-]/g, '').replace(/\s\s+/g, ' ');
}

export function toLowerCase(text: string) {
  return text.toLowerCase();
}

export function textCutter(text: string) {
  if (text.length > 150) {
    return text.substring(0, 125) + '...';
  }
  return text;
}
