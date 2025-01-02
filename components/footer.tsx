import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-[70%] flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 Meechai Farm. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
