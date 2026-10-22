
"use client";

import { useEffect, useState } from "react";

const calculators = [
  {
    name: "CGPA to SGPA",
    color: "#E2F5DF",
    icon: "▤",
    href: "/tools/cgpa-to-sgpa-calculator",
  },
  {
    name: "SGPA to CGPA",
    color: "#E1E5FF",
    icon: "▣",
    href: "/tools/sgpa-to-cgpa-calculator",
  },
  {
    name: "CGPA to Percentage",
    color: "#FFE9C5",
    icon: "%",
    href: "/tools/cgpa-to-percentage-calculator",
  },
  {
    name: "Percentage to CGPA",
    color: "#FFDADA",
    icon: "%",
    href: "/tools/percentage-to-cgpa-calculator",
  },
  {
    name: "SGPA to Percentage",
    color: "#E9DFFF",
    icon: "%",
    href: "/tools/sgpa-to-percentage-calculator",
  },
  {
    name: "Percentage to SGPA",
    color: "#E5E7EB",
    icon: "Σ",
    href: "/tools/percentage-to-sgpa-calculator",
  },
  {
    name: "Marks to Percentage",
    color: "#E2F5DF",
    icon: "▥",
    href: "/tools/marks-to-percentage-calculator",
  },
  {
    name: "Age Calculator",
    color: "#E1E5FF",
    icon: "▦",
    href: "/tools/age-calculator",
  },
  {
    name: "GPA to Percentage",
    color: "#FFE9C5",
    icon: "↗",
    href: "/tools/gpa-to-percentage-calculator",
  },
  {
    name: "BMI Calculator",
    color: "#FFDADA",
    icon: "♡",
    href: "/tools/bmi-calculator",
  },
  {
    name: "Education Loan EMI",
    color: "#E9DFFF",
    icon: "▣",
    href: "/tools/education-loan-emi-calculator",
  },
  {
    name: "Million to Crore",
    color: "#E5E7EB",
    icon: "▣",
    href: "/tools/million-to-crore-calculator",
  },
  {
    name: "Million to Lakhs",
    color: "#E2F5DF",
    icon: "▣",
    href: "/tools/million-to-lakhs-calculator",
  },
];

export default function ExploreCalculators() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex min-h-[360px] flex-col justify-center bg-[#F8FAFC] px-5 py-10 sm:px-8 sm:py-12">

          {/* HEADING */}
          <h2 className="text-center text-xl font-semibold text-[#0F172A] sm:text-2xl">
            Explore Our Other Tools
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-xs leading-5 text-[#64748B] sm:text-sm">
            Discover more useful tools to simplify your academic and financial calculations.
          </p>

          {/* TOOL LINKS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {calculators.map((calculator, index) => (
              <a
                key={calculator.name}
                href={calculator.href}
                style={{
                  backgroundColor: calculator.color,
                  animationDelay: `${index * 60}ms`,
                }}
                className={`group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[11px] text-[#334155] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137FEC] focus-visible:ring-offset-2 sm:text-xs ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#137FEC] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {calculator.icon}
                </span>

                <span>{calculator.name}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
