import { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import CodeEditor from '../components/CodeEditor'
import ResultsPanel from '../components/ResultsPanel'
import Loader from '../components/Loader'
import DropZone from '../components/DropZone'
import { toast } from 'react-toastify'

export default function Deobfuscate() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [method, setMethod] = useState<'local' | 'openai'>('local')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (output) toast.success('تم فك التشفير بنجاح')
    if (error) toast.error(error)
  }, [output, error])

  async function handleDecode() {
    setError(null)
    setOutput('')
    setLoading(true)
    try {
      if (method === 'local') {
        const response = await axios.post('/api/deobfuscate-local', { code })
        setOutput(response.data.decoded)
      } else {
        const response = await axios.post('/api/openai-decode', { code })
        setOutput(response.data.decoded)
      }
    } catch (e: any) {
      setError(e.message || 'حدث خطأ أثناء فك التشفير')
    }
    setLoading(false)
  }

  return (
    <Layout>
      <section>
        <DropZone onCode={setCode} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>الكود المشفر:</label>
            <CodeEditor value={code} onChange={setCode} />
          </div>
        </div>

        <div className="method-select my-4 space-x-4">
          <label>
            <input type="radio" checked={method === 'local'} onChange={() => setMethod('local')} />
            فك تشفير محلي (سريع، بدون إنترنت)
          </label>
          <label>
            <input type="radio" checked={method === 'openai'} onChange={() => setMethod('openai')} />
            فك تشفير OpenAI (أكثر دقة، يحتاج إنترنت)
          </label>
        </div>

        <button onClick={handleDecode} disabled={loading || !code.trim()} className="px-4 py-2 bg-cyan-500 text-black font-bold rounded">
          {loading ? <Loader /> : 'فك التشفير'}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        <ResultsPanel output={output} />
      </section>
    </Layout>
  )
}
