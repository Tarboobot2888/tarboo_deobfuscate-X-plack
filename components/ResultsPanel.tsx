interface Props {
  output: string
}

export default function ResultsPanel({ output }: Props) {
  if (!output) return null
  return (
    <div className="mt-4">
      <h3 className="mb-2">النتيجة المفكوكة</h3>
      <pre className="code-output whitespace-pre-wrap">{output}</pre>
    </div>
  )
}
