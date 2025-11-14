export const platforms = [
  {
    name: "facebook",
    regex: /facebook\.com\/([\w.\-]+)/i,
    icon: "fa-brands fa-facebook",
    url: (username) => `https://facebook.com/${username}`,
  },
  {
    name: "instagram",
    regex: /instagram\.com\/([\w.\-]+)/i,
    icon: "fa-brands fa-instagram",
    url: (username) => `https://instagram.com/${username}`,
  },
  {
    name: "linkedin",
    regex: /linkedin\.com\/in\/([\w.\-]+)/i,
    icon: "fa-brands fa-linkedin",
    url: (username) => `https://linkedin.com/in/${username}`,
  },
  {
    name: "tiktok",
    regex: /tiktok\.com\/@([\w.\-]+)/i,
    icon: "fa-brands fa-tiktok",
    url: (username) => `https://tiktok.com/@${username}`,
  },
  {
    name: "thread",
    regex: /threads\.net\/@([\w.\-]+)/i,
    icon: "fa-brands fa-threads",
    url: (username) => `https://threads.net/@${username}`,
  },
  {
    name: "x",
    regex: /(?:x\.com|twitter\.com)\/([\w.\-]+)/i,
    icon: "fa-brands fa-x-twitter",
    url: (username) => `https://x.com/${username}`,
  },
  {
    name: "phone",
    regex: /^\+?\d[\d\s\-\(\)]*$/,
    icon: "fa-solid fa-phone",
    url: (number) => `tel:${number.replace(/\s+/g, "")}`,
  },
];

export function getContactInfo(contact) {
  if (!contact) return null;

  const value = contact.trim();

  for (const p of platforms) {
    const match = value.match(p.regex);
    if (match) {
      const username = match[1] || value;
      return {
        platform: p.name,
        username,
        icon: p.icon,
        link: p.url(username),
      };
    }
  }


  return {
    platform: "generic",
    username: value,
    icon: "fa-solid fa-link",
    link: value.startsWith("http") ? value : `https://${value}`,
  };
}