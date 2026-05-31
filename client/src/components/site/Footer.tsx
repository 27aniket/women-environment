import companyLogo from "@/assets/companyLogo.jpeg";

export const Footer = () => (
  <footer className=" bg-gradient-primary py-3 sm:py-4 md:py-5">
    <div className="container mx-auto px-3 text-center">
      <div className="flex flex-col items-center gap-1.5">
        {/* Title */}
        <div className="flex items-center gap-2">
          <img
            src={companyLogo}
            alt="Intent To Solution Logo"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-full"
          />

          <span className="text-xs sm:text-base md:text-lg text-primary-foreground font-display font-bold tracking-wide">
            Women Environment System
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[10px] sm:text-xs text-primary-foreground/70 tracking-wide italic px-2">
          © {new Date().getFullYear()} Crafted & Maintained by{" "}
          <span className="font-semibold text-primary-foreground">
            Intent To Solution Pvt. Ltd.
          </span>
        </p>
      </div>
    </div>
  </footer>
);


