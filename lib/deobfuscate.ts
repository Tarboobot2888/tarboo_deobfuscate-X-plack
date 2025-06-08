import { deobfuscateLocal } from './webcrack-wrapper'
import { applyRecipe } from './cyberchef'

export async function deobfuscateJs(code: string): Promise<string> {
  try {
    return await deobfuscateLocal(code)
  } catch (err) {
    console.error('webcrack error', err)
    return 'error running local deobfuscation'
  }
}

export async function deobfuscateWithCyberChef(code: string, recipe: string) {
  return applyRecipe(code, recipe)
}
