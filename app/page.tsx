"use client";

import { Features } from "./components/features";
import { Tutorial } from "./components/tutorial";
import { Banner } from "./components/banner";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Banner />
      <Features />
      <Tutorial />
    </div>
  );
}
