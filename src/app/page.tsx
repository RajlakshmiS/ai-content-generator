import Link from "next/link";
import { Sparkles, PenSquare, Zap } from "lucide-react";

export default function HomePage() {
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
                Create professional content in seconds
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:shadow-lg transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-sm font-medium text-slate-600 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Powered by AI
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Generate Stunning
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Social Media Content
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Create professional LinkedIn posts, captions, and summaries for any
            topic using AI. Perfect for marketing, technology, education, data
            analytics, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Start Creating for Free
            </Link>

            <Link
              href="/login"
              className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Login to Your Account
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60">
            <PenSquare className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Any Topic
            </h3>
            <p className="text-slate-600">
              Generate content about marketing, AI, education, technology, data
              analytics, and many other subjects.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60">
            <Sparkles className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              AI-Powered Writing
            </h3>
            <p className="text-slate-600">
              Instantly create engaging, professional, and polished social media
              posts using advanced AI.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60">
            <Zap className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Fast & Easy
            </h3>
            <p className="text-slate-600">
              Enter a topic, click generate, and receive ready-to-share content
              in just a few seconds.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}