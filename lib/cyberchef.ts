export async function applyRecipe(input: string, recipe: string) {
  const { default: CyberChef } = await import('cyberchef') as any
  const chef = new CyberChef()
  return chef.bake(input, recipe)
}
