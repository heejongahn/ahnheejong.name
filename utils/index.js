export function getHead (title, url, description) {
  const meta = {
    'og:title': title,
    'og:url': url,
    'twitter:title': title,
    'twitter:url': url
  }

  if (description) {
    meta.description = description
    meta['twitter:description'] = description
    meta['og:description'] = description
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
