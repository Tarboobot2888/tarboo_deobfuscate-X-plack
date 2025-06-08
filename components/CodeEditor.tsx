import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

interface Props {
  value: string
  onChange: (val: string) => void
  readOnly?: boolean
}

export default function CodeEditor({ value, onChange, readOnly }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return (
    <MonacoEditor
      height="300px"
      defaultLanguage="javascript"
      value={value}
      onChange={v => onChange(v || '')}
      options={{ readOnly }}
      theme="vs-dark"
    />
  )
}
