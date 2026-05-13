"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {
  Sparkles,
  PenSquare,
  BarChart3,
  Clock,
  LogOut,
  ArrowRight,
  History,
} from "lucide-react";
import { auth } from "@/lib/firebase";

interface HistoryItem {
  id: number;
  topic: string;
  content: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = JSON.parse(
      localStorage.getItem("contentHistory") || "[]"
    );
    setHistory(savedHistory);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleOpenGenerator = () => {
    router.push("/generate");
  };

  const sampleTopics = [
    "Data Analytics",
    "Artificial Intelligence",
    "Digital Marketing",
    "Machine Learning",
    "Career Growth",
    "Business Intelligence",
  ];

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
                Dashboard Overview
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-red-600 font-medium hover:bg-red-100 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700 mb-4">
                <Clock className="w-4 h-4" />
                Ready to Create
              </div>

              <h2 className="text-4xl font-bold text-slate-900 mb-3">
                Welcome to Your Dashboard
              </h2>

              <p className="text-lg text-slate-600 max-w-2xl">
                Generate AI-powered content and track your recently created
                posts.
              </p>
            </div>

            <button
              onClick={handleOpenGenerator}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Open AI Content Generator
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 rounded-3xl shadow-lg border border-white/60 p-6">
            <BarChart3 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900">
              {history.length}
            </h3>
            <p className="text-slate-600 text-sm">
              Total Posts Generated
            </p>
          </div>

          <div className="bg-white/90 rounded-3xl shadow-lg border border-white/60 p-6">
            <PenSquare className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900 truncate">
              {history[0]?.topic || "-"}
            </h3>
            <p className="text-slate-600 text-sm">Latest Topic</p>
          </div>

          <div className="bg-white/90 rounded-3xl shadow-lg border border-white/60 p-6">
            <Sparkles className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900">
              Groq AI
            </h3>
            <p className="text-slate-600 text-sm">
              Content Generation Engine
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Popular Topics
          </h3>

          <p className="text-slate-600 mb-6">
            Click a topic to generate content instantly.
          </p>

          <div className="flex flex-wrap gap-3">
            {sampleTopics.map((topic) => (
              <button
                key={topic}
                onClick={() =>
                  router.push(
                    `/generate?topic=${encodeURIComponent(topic)}`
                  )
                }
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-sm font-medium text-slate-700 transition"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Content History */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">
              Recent Content History
            </h3>
          </div>

          {history.length === 0 ? (
            <p className="text-slate-500">
              No content generated yet. Create your first post to see
              your history and analytics.
            </p>
          ) : (
            <div className="space-y-4">
              {history.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-2 gap-4">
                    <h4 className="font-semibold text-slate-900">
                      {item.topic}
                    </h4>

                    <span className="text-xs text-slate-500 whitespace-nowrap">
                      {item.createdAt}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-3">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}