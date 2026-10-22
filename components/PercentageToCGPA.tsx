
"use client";

import { useState } from "react";

type InputField = {
    key: string;
    label: string;
    placeholder: string;
};

type PercentageToCGPAHeroProps = {
    data: {
        titleWhite: string;
        titleYellow: string;
        description1: string;
        description2: string;
        description3: string;
        description4: string;
        inputs: InputField[];
        resultLabel: string;
        buttonText: string;
        type: string;
    };
};

const gradingScales = [4, 5, 10];

export default function PercentageToCGPAHero({
    data,
}: PercentageToCGPAHeroProps) {
    const [values, setValues] = useState<Record<string, string>>({});
    const [scale, setScale] = useState(4);
    const [result, setResult] = useState("0.00");
    const [error, setError] = useState("");

    const handleChange = (key: string, value: string) => {
        setValues((prev) => ({
            ...prev,
            [key]: value,
        }));

        setResult("0.00");
        setError("");
    };

    const handleCalculate = () => {
        const percentage = values.percentage ?? "";

        if (percentage.trim() === "") {
            setResult("0.00");
            setError("Please enter your percentage.");
            return;
        }

        const value = Number(percentage);

        if (!Number.isFinite(value) || value < 0 || value > 100) {
            setResult("0.00");
            setError("Enter a percentage between 0 and 100.");
            return;
        }

        // Linear conversion for the selected grading scale.
        const cgpa = (value / 100) * scale;

        setResult(cgpa.toFixed(2));
        setError("");
    };

    const numericResult = Number(result) || 0;

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-r from-[#f5f7fb] to-white">
            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">

                {/* BACKGROUND BLOB */}
                <div className="pointer-events-none absolute left-1/3 top-1/3 h-[350px] w-[400px] -translate-x-[20%] -translate-y-1/2 rounded-[120px] bg-[#137FEC18] blur-3xl" />

                {/* LEFT CONTENT */}
                <div className="relative z-10">
                    <h1 className="text-[38px] font-bold leading-tight text-[#0F172A] md:text-[48px]">
                        {data.titleWhite}
                        <br />
                        <span className="text-[#EDA12E]">
                            {data.titleYellow}
                        </span>
                    </h1>

                    {[
                        data.description1,
                        data.description2,
                        data.description3,
                        data.description4,
                    ]
                        .filter(Boolean)
                        .map((description, index) => (
                            <p
                                key={index}
                                className="mt-4 text-[17px] leading-relaxed text-[#475569]"
                            >
                                {description}
                            </p>
                        ))}

                    <button
                        type="button"
                        className="mt-8 rounded-lg border border-gray-400 px-6 py-3 text-gray-700 transition hover:bg-gray-100"
                    >
                        Get Guide&apos;s Help
                    </button>
                </div>

                {/* RIGHT CALCULATOR */}
                <div className="relative flex w-full justify-center md:justify-end">
                    <div className="relative z-10 w-full max-w-[520px]">

                        {/* DECORATIVE BACKGROUND */}
                        <div className="absolute inset-x-0 top-7 h-[290px] rounded-2xl bg-[#137FEC15]" />

                        {/* CALCULATOR CARD */}
                        <div className="relative rounded-2xl bg-white p-7 shadow-[0px_20px_50px_rgba(2,6,23,0.12)] sm:p-8">

                            <h2 className="text-center text-lg font-semibold text-[#0F172A] sm:text-xl">
                                {data.titleWhite} {data.titleYellow}
                            </h2>

                            {/* GRADING SCALE SELECTOR */}
                            <div className="mt-5 grid grid-cols-3 gap-2">
                                {gradingScales.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        aria-pressed={scale === item}
                                        onClick={() => {
                                            setScale(item);
                                            setResult("0.00");
                                            setError("");
                                        }}
                                        className={`min-h-[40px] rounded-md border px-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                                            scale === item
                                                ? "border-[#164EAA] bg-[#164EAA] text-white shadow-sm"
                                                : "border-[#C7D2E2] bg-[#EEF3F9] text-[#0F172A] hover:bg-[#DCE8F8]"
                                        }`}
                                    >
                                        {item.toFixed(1)} Grading Scale
                                    </button>
                                ))}
                            </div>

                            {/* INPUTS */}
                            {data.inputs
                                .filter((input) => input.key === "percentage")
                                .map((input) => (
                                    <div key={input.key}>
                                        <label
                                            htmlFor={input.key}
                                            className="mb-2 mt-5 block text-sm font-medium text-[#475569]"
                                        >
                                            {input.label}
                                        </label>

                                        <input
                                            id={input.key}
                                            type="number"
                                            min="0"
                                            max="100"
                                            step="any"
                                            placeholder={input.placeholder}
                                            value={values[input.key] ?? ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    input.key,
                                                    e.target.value
                                                )
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleCalculate();
                                                }
                                            }}
                                            className="h-[44px] w-full rounded-md border border-[#9DB7F5] bg-white px-3 text-sm text-[#0F172A] outline-none transition focus:border-[#137FEC] focus:ring-1 focus:ring-[#137FEC]/20"
                                        />
                                    </div>
                                ))}

                            {/* CALCULATE BUTTON */}
                            <button
                                type="button"
                                onClick={handleCalculate}
                                className="mt-3 h-[42px] w-full rounded-md border border-[#9DB7F5] bg-[#D1D5DB] text-sm font-medium text-[#111827] transition hover:bg-[#BFC6D1] active:scale-[0.99]"
                            >
                                {data.buttonText}
                            </button>

                            {/* PROGRESS BAR */}
                            <div
                                className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[#D9F1E0]"
                                role="progressbar"
                                aria-label="CGPA progress"
                                aria-valuemin={0}
                                aria-valuemax={scale}
                                aria-valuenow={numericResult}
                            >
                                <div
                                    className="h-full rounded-full bg-[#B8E6C8] transition-all duration-500"
                                    style={{
                                        width: `${
                                            (numericResult / scale) * 100
                                        }%`,
                                    }}
                                />
                            </div>

                            {/* RESULT / ERROR */}
                            {error ? (
                                <p
                                    role="alert"
                                    className="mt-3 text-sm text-red-600"
                                >
                                    {error}
                                </p>
                            ) : (
                                <p
                                    aria-live="polite"
                                    className="mt-3 text-center text-sm font-semibold text-[#164EAA]"
                                >
                                    {data.resultLabel}: {result}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
