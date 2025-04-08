import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFound: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The page {pathname} could not be found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
