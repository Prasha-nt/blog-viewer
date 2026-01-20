import React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


const footerData = {
  resources: {
    title: "Resources",
    links: ["Community", "Events", "Help Center", "Partners"],
  },
  products: {
    title: "Products",
    links: ["Integrations", "Solutions", "Features", "Enterprise"],
  },
}

const socialIcons = [
  { src: "/gi1.png", alt: "Facebook" },
  { src: "/gi2.png", alt: "Google" },
  { src: "/gi3.png", alt: "Apple" },
  { src: "/gi4.png", alt: "Instagram" },
]

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-[#050905] text-white">
      <div className="w-full px-4 md:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
          <a href="/" className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center font-black text-lg shadow text-[black]">
      C
    </div>
    <div>
      <div className="text-lg font-extrabold text-white">CA MONK</div>
      <div className="text-[11px] font-bold tracking-widest text-lime-600">
        REDEFINING CAREERS
      </div>
    </div>
  </a>
            <p className="text-sm text-gray-400 max-w-xs">
              Strive to Win
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{footerData.resources.title}</h3>
            <ul className="space-y-2">
              {footerData.resources.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-yellow-200 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{footerData.products.title}</h3>
            <ul className="space-y-2">
              {footerData.products.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-yellow-200 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Get Email Notifications</h3>
            <p className="text-sm text-gray-400">
              Generate outside the box thinking with the possibility to target the low
            </p>
            <form className="flex gap-1">
              <Input
                type="email"
                placeholder="Enter email...."
                className="bg-[#1F2937] text-sm text-white placeholder:text-gray-400 rounded-l-md"
              />
              <Button className="rounded-l-none bg-[#437EF7] text-white text-sm px-5">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2026 CA Monk Blog. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}