"use client";

import Link from "next/link";
import { useState } from "react";

export default function SolutionsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 font-medium"
      >
        Solutions
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-64 rounded-xl border bg-white shadow-lg p-4">
          <ul className="space-y-3">
            <li>
              <Link href="/solutions/crop-monitoring" className="hover:underline">
                Crop Monitoring
              </Link>
            </li>
            <li>
              <Link href="/solutions/soil-intelligence" className="hover:underline">
                Soil Intelligence
              </Link>
            </li>
            <li>
              <Link href="/solutions/traceability" className="hover:underline">
                Traceability
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
