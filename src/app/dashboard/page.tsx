"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {
  Sparkles,
  PenSquare,
  BarChart3,
  Clock,
  LogOut,
  ArrowRight,
} from "lucide-react";
import { auth } from "@/lib/firebase";

export default function DashboardPage() {
  const router = useRouter();

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

  const features = [
    {
      title: "AI Content Generation",
      description:
        "Create professional LinkedIn posts and social media content on any topic.",
      icon: Sparkles,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Any Topic",
      description:
        "Generate content for Data Analytics, Marketing, AI, Education, and more.",
      icon: PenSquare,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Professional Output",
      description:
        "Get polished, ready-to-share content with hashtags and engaging structure.",
      icon: BarChart3,
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

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
        {/* Welcome Section */}
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
                Generate high-quality AI-powered social media posts for any topic
                in just a few seconds.
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

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-6"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Suggested Topics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Popular Topics
          </h3>

          <p className="text-slate-600 mb-6">
            Try generating content on these trending topics.
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
      </section>
    </main>
  );
}