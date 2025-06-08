// pages/index.tsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import DropZone from '../components/DropZone'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CodeEditor from '../components/CodeEditor'
import ResultsPanel from '../components/ResultsPanel'
import Loader from '../components/Loader'
import AnimationIntro from '../components/AnimationIntro'
import { toast } from 'react-toastify'

export default function Home() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState<"local" | "openai">("local");
  const [error, setError] = useState<string | null>(null);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // سجل الاستخدام في localStorage
  useEffect(() => {
    if (output) {
      const history = JSON.parse(localStorage.getItem("history") || "[]");
      localStorage.setItem(
        "history",
        JSON.stringify([{ input: code, output, method, timestamp: Date.now() }, ...history].slice(0, 30))
      );
    }
  }, [output]);

  useEffect(() => {
    if (output) {
      toast.success('تم فك التشفير بنجاح');
    }
    if (error) {
      toast.error(error);
    }
  }, [output, error]);

  async function handleDecode() {
  setError(null);
  setOutput("");
  setLoading(true);
  try {
    if (method === "local") {
      const response = await axios.post("/api/deobfuscate-local", { code });
      setOutput(response.data.decoded);
    } else {
      const response = await axios.post("/api/openai-decode", { code });
      setOutput(response.data.decoded);
    }
  } catch (e: any) {
    setError(e.message || "حدث خطأ أثناء فك التشفير");
  }
  setLoading(false);
}

  return (
    <Layout>
      {intro && <AnimationIntro onDone={() => setIntro(false)} />}
      <Hero onStart={() => window.scrollTo({ top: 500, behavior: 'smooth' })} />

      <section>
        <DropZone onCode={setCode} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>الكود المشفر:</label>
            <CodeEditor value={code} onChange={setCode} />
          </div>
        </div>

        <div className="method-select">
          <label>
            <input
              type="radio"
              checked={method === "local"}
              onChange={() => setMethod("local")}
            />
            فك تشفير محلي (سريع، بدون إنترنت)
          </label>
          <label>
            <input
              type="radio"
              checked={method === "openai"}
              onChange={() => setMethod("openai")}
            />
            فك تشفير OpenAI (أكثر دقة، يحتاج إنترنت)
          </label>
        </div>

        <button onClick={handleDecode} disabled={loading || !code.trim()}>
          {loading ? <Loader /> : 'فك التشفير'}
        </button>

        {error && <p className="error">{error}</p>}
        <ResultsPanel output={output} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="feature-item bg-neutral-900 p-6 rounded-lg shadow">
          <h3 className="text-xl mb-2 font-bold">DeobfuscateJs</h3>
          <p>خوارزميات متقدمة لفك التشويش عبر Web Workers.</p>
        </div>
        <div className="feature-item bg-neutral-900 p-6 rounded-lg shadow">
          <h3 className="text-xl mb-2 font-bold">CyberChef</h3>
          <p>تشغيل وصفات تحليل متعددة مثل Beautify وEval JS.</p>
        </div>
      </section>
    </Layout>
  );
}
