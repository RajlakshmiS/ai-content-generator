# AI Content Generator with Authentication and Analytics Dashboard

A full-stack web application that allows users to sign up, log in, and generate professional social media content using AI. The application also includes a dashboard that tracks generated posts and displays basic analytics.

## 🚀 Features

- User Sign Up and Login using Firebase Authentication
- AI-powered content generation using Groq API
- Modern and responsive UI built with Next.js and Tailwind CSS
- Dashboard with key metrics and content history
- Copy generated content to clipboard
- Suggested topics for quick generation
- Local storage-based analytics tracking

## 📊 Data Analytics Component

This project includes a lightweight analytics dashboard that demonstrates key data analysis concepts:

- Data Collection: Stores generated content and metadata
- Data Storage: Uses browser localStorage to maintain history
- KPI Metrics:
  - Total Posts Generated
  - Latest Topic
  - AI Engine Used
- Historical Data Review: Displays recent generated posts

This makes the project relevant to data analytics roles by showing how data can be collected, organized, and visualized through a dashboard.

## 🛠️ Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Groq API
- localStorage
- Git & GitHub

## 📁 Project Structure

Sign Up → Login → Dashboard → AI Content Generator → Content Saved to History → Analytics Displayed on Dashboard

## 🔐 Authentication Flow

1. User creates an account on the Sign Up page
2. User logs in with registered credentials
3. User is redirected to the Dashboard
4. User opens the Content Generator
5. Generated content is stored and analyzed in the Dashboard

## 🤖 AI Content Generation Flow

1. User enters a topic
2. Frontend sends a POST request to `/api/generate`
3. Backend calls Groq API
4. AI generates a professional LinkedIn-style post
5. Response is displayed and stored in history

## 📈 Dashboard Analytics

The dashboard displays:

- Total number of posts generated
- Latest generated topic
- Recent content history
- Predefined popular topics

## 💻 Installation

```bash
git clone https://github.com/RajlakshmiS/ai-content-generator.git
cd ai-content-generator
npm install
npm run dev