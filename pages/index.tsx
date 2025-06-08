// pages/index.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { deobfuscateLocal } from "../lib/webcrack-wrapper";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AnimationIntro from "../components/AnimationIntro";
import FeaturesSection from "../components/FeaturesSection";
import { useRouter } from "next/router";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [code, setCode] = useState("");
  const [method, setMethod] = useState("local");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDecode = async () => {
    setLoading(true);
    setError("");
    setOutput("");

    try {
      if (method === "local") {
        const result = await deobfuscateLocal(code);
        setOutput(result);
      } else {
        const response = await axios.post("/api/deobfuscate", { code });
        setOutput(response.data.result || "لا يوجد ناتج.");
      }
    } catch (err) {
      setError("حدث خطأ أثناء فك التشفير.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {intro && <AnimationIntro onDone={() => setIntro(false)} />}
      <HeroSection onStart={() => router.push("/deobfuscate")} />
      <FeaturesSection />

      <main className="container">
        <header>
          <h1>TARBOO Deobfuscate</h1>
          <nav>
            <Link href="/history">سجل الاستخدام</Link>
          </nav>
        </header>

        <motion.section
          className="hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>فكّ تشفير الكود بضغطة زر</h2>
          <button className="start-btn" onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
            ابدأ الآن
          </button>
        </motion.section>

        <section>
          <label>ألصق الكود المشفر هنا:</label>
          <textarea
            className="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            placeholder="أدخل كود Node.js المشفر أو المشوش"
          />

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
            {loading ? "جاري فك التشفير..." : "فك التشفير"}
          </button>

          {error && <p className="error">{error}</p>}

          {output && (
            <>
              <label>النتيجة المفكوكة:</label>
              <pre className="code-output">{output}</pre>
            </>
          )}
        </section>

        <section className="features-grid">
          <div className="feature-item">
            <h3>DeobfuscateJs</h3>
            <p>خوارزميات متقدمة لفك التشويش عبر Web Workers.</p>
          </div>
          <div className="feature-item">
            <h3>CyberChef</h3>
            <p>تشغيل وصفات تحليل متعددة مثل Beautify وEval JS.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

