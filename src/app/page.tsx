// pages/index.js
import Head from "next/head";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Bug Tracking Application</title>
        <meta
          name="description"
          content="A bug tracking application like Jira"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-xl mb-4">Welcome to the Bug Tracker</h2>
          <p>This is a simple bug tracking application similar to Jira.</p>
        </main>
      </div>
    </div>
  );
}
