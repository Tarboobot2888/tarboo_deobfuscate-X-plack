import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

export function getIdentifiers(code: string): string[] {
  const ast = parse(code, { sourceType: 'unambiguous', plugins: ['jsx', 'typescript'] })
  const ids = new Set<string>()
  traverse(ast, {
    Identifier(path) {
      ids.add(path.node.name)
    }
  })
  return Array.from(ids)
}
