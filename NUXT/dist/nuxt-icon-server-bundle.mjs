function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'bi': () => import('@iconify-json/bi/icons.json', { with: { type: 'json' } }).then(m => m.default),
}