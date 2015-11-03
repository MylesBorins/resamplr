function img(path, alt, mod) {
  return `<img src="${path}" alt="${alt}" class="${mod}">`;
}

module.exports = img;