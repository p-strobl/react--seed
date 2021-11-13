export function capitalizeFirstLetter(string) {
  if (string.length === 0) {
    return false;
  }

  return string.replace(string[0], string[0].toUpperCase());
}

export function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

export function toLocalDate(date, locale) {
  if (date.length === 0 || locale === "") {
    return "";
  }

  const dateModel = new Date(date);
  const day = dateModel.toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const time = dateModel.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });

  return `${day} / ${time}`;
}

export function objectIsEmpty(obj) {
  for (const i in obj) return false;
  return true;
}

export function isObject(value) {
  return typeof value === "object";
}

export function scrollToTop(behavior) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior ? behavior : "auto",
  });
}
