export async function loadModules(path: string) {
  const modules = await import.meta.glob(path) as Record<string, () => Promise<{ default: Record<string, any> }>>
  const data = await Promise.all(Object.entries(modules).map(async ([path, loader]) => {
    const name = path.replace(/^\.\/(.+)\/index\.ts$/, '$1')
    return [name, (await loader()).default] as const
  }))
  return Object.fromEntries(data)
}
