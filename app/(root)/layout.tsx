import Footer from "@/components/footer";
import { SiteHeader } from "@/components/SiteHeader";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto flex min-h-screen w-[70%] flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
