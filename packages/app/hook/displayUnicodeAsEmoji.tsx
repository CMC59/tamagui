function unicodeToEmoji(unicode) {
  const code = unicode.replace('U+', ''); // Supprimer le préfixe 'U+'
  return `\\u{${code}}`; // Retourner la chaîne de caractères dans le format souhaité
}