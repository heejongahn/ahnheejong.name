export function getHead (title, url) {
  const meta = {
    'og:title': title,
    'og:url': url,
    'twitter:title': title,
    'twitter:url': url
  }

  return {
    title,
    meta: Object.keys(meta).map(name => ({
      hid: name,
      name,
      content: meta[name]
    }))
  }
}
