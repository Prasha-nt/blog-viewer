import { BlogPage } from "@/pages/BlogPage"
import { Toaster } from "@/components/ui/sonner"
import Navbar  from "./components/Navbar"
import { FooterSection } from "./components/blog/FooterSection"


// import React = require("react")

function App() {
  return (
    <>
    <div className="overflow-y-auto no-scrollbar animate-in fade-in zoom-in duration-200">
      <Navbar />
      <BlogPage />
      <Toaster />
      <FooterSection />
      </div>
    </>
  )

}

export default App
