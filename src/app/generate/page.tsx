"use client";

import { useState } from "react";
import {
  Sparkles,
  PenSquare,
  Zap,
  Copy,
  Check,
  Wand2,
} from "lucide-react";

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const suggestedTopics = [
    "Data Analytics",
    "Artificial Intelligence",
    "Digital Marketing",
    "Cyber Security",
    "Machine Learning",
    "Career Growth",
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);
    setContent("Generating content...");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      if (response.ok && data.content) {
        setContent(data.content);
      } else {
        setContent(
          data.details ||
            data.error ||
            "Error generating content."
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setContent("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  const handleTopicClick = (selectedTopic: string) => {
    setTopic(selectedTopic);
  };

  const handleCopy = async () => {
    if (
      !content ||
      content === "Generating content..." ||
      content === "No content generated."
    ) {
      return;
    }

    await navigator.clipboard.writeText(content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-white/60 backdrop-blur-sm bg-white/70 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                AI Content Generator
              </h1>
              <p className="text-sm text-slate-500">
                Generate professional social media content
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700">
            <Zap className="w-4 h-4" />
            Powered by Groq AI
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Turn Any Topic into
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Engaging Content
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Create professional LinkedIn posts and social media content for any
            topic using artificial intelligence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Wand2 className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Generate Content
              </h3>
            </div>

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Enter a Topic
            </label>

            <input
              type="text"
              placeholder="e.g. Data Analytics, Marketing, AI, Education"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
            />

            <p className="text-sm font-medium text-slate-700 mb-3">
              Suggested Topics
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {suggestedTopics.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleTopicClick(item)}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-sm font-medium text-slate-700 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-60"
            >
              <PenSquare className="w-5 h-5" />
              {loading ? "Generating Content..." : "Generate Content"}
            </button>
          </div>

          {/* Output Panel */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Generated Content
              </h3>

              {content &&
                content !== "Generating content..." &&
                content !== "No content generated." && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-medium text-slate-700 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                )}
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 min-h-[420px] overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-7">
                {content ||
                  "Your AI-generated social media post will appear here."}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}