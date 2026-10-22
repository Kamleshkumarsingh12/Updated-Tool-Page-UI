
"use client";

import { useState } from "react";

type PercentageToGPAHeroProps = {
    data: {
        titleWhite: string;
        titleYellow: string;
        description1: string;
        description2: string;
        description3: string;
        description4: string;
        inputs: {
            key: string;
            label: string;
            placeholder: string;
        }[];
        gradingSystemLabel: string;
        resultLabel: string;
        buttonText: string;
        type: string;
    };
};

const gradingScales = [4, 5, 10];

export default function PercentageToGPAHero({
    data,
}: PercentageToGPAHeroProps) {
    const [percentage, setPercentage] = useState("");
    const [scale, setScale] = useState(10);
    const [result, setResult] = useState<string | null>("0.00");
    const [error, setError] = useState("");

    const percentageInput = data.inputs.find(
        (input) => input.key === "percentage"
    );

    const handleCalculate = () => {
        if (percentage.trim() === "") {
            setResult(null);
            setError("Please enter your percentage.");
            return;
        }

        const value = Number(percentage);

        if (!Number.isFinite(value) || value < 0 || value > 100) {
            setResult(null);
            setError("Enter a percentage between 0 and 100.");
            return;
        }

        const gpa = (value / 100) * scale;

        setResult(gpa.toFixed(2));
        setError("");
    };

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-[#f5f7fb] to-[#ffffff]">
            <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-16 w-full">

                {/* BACKGROUND BLOB */}
                <div className="absolute left-1/3 top-1/3 -translate-x-[20%] -translate-y-1/2 w-[400px] h-[350px] bg-[#137FEC18] rounded-[120px] blur-3xl pointer-events-none" />

                {/* LEFT CONTENT - UNCHANGED LAYOUT */}
                <div className="relative z-10">
                    <h1 className="text-[38px] md:text-[48px] font-bold text-[#0F172A] leading-tight">
                        {data.titleWhite}
                        <br />
                        <span className="text-[#EDA12E]">
                            {data.titleYellow}
                        </span>
                    </h1>

                    <p className="mt-4 text-[#475569] text-[17px] leading-relaxed">
                        {data.description1}
                    </p>

                    <p className="mt-4 text-[#475569] text-[17px] leading-relaxed">
                        {data.description2}
                    </p>

                    <p className="mt-4 text-[#475569] text-[17px] leading-relaxed">
                        {data.description3}
                    </p>

                    <p className="mt-4 text-[#475569] text-[17px] leading-relaxed">
                        {data.description4}
                    </p>

                    <button
                        type="button"
                        className="mt-8 px-6 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                    >
                        Get Guide&apos;s Help
                    </button>
                </div>

                {/* RIGHT CALCULATOR */}
                <div className="relative flex justify-center md:justify-end w-full">
                    <div className="flex flex-col items-center relative z-10 mt-6 w-full">

                        {/* DECORATIVE BACKGROUND */}
                        <div className="absolute top-7 w-full max-w-[520px] h-[320px] bg-[#137FEC15] rounded-2xl" />

                        {/* COMPACT CALCULATOR CARD */}
                        <div className="relative w-full max-w-[520px] min-h-[300px] bg-white rounded-[20px] p-8 md:p-10 shadow-[0px_20px_50px_rgba(2,6,23,0.12)] flex flex-col justify-center">

                            {/* PERCENTAGE INPUT */}
                            <label
                                htmlFor="percentage"
                                className="w-full h-[28px] text-base text-[#0F172A] outline-none focus:border-[#137FEC] transition"
                            >
                                {percentageInput?.label ?? "Enter your Percentage:"}
                            </label>

                            <input
                                id="percentage"
                                type="number"
                                min="0"
                                max="100"
                                step="any"
                                placeholder={
                                    percentageInput?.placeholder ?? "75"
                                }
                                value={percentage}
                                onChange={(e) => {
                                    setPercentage(e.target.value);
                                    setError("");
                                    setResult("0.00");
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleCalculate();
                                    }
                                }}
                                className="w-full h-[36px] px-2 border border-[#D1D5DB] rounded-sm text-sm text-[#0F172A] outline-none focus:border-[#137FEC]"
                            />

                            {/* GRADING SYSTEM */}
                            <p className="text-[11px] font-semibold text-[#374151] text-center mt-3 mb-2">
                                {data.gradingSystemLabel}
                            </p>

                            <div className="relative grid grid-cols-3 gap-1.5">
                                {/* ANIMATED SLIDING BOX */}
                                <div
                                    className="absolute top-0 bottom-0 left-0 w-[calc((100%-12px)/3)] rounded-md bg-[#164EAA] shadow-sm transition-transform duration-300 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(${gradingScales.indexOf(scale)} * (100% + 6px)))`,
                                    }}
                                />

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
                                        className={`relative z-10 h-[42px] rounded-md text-sm font-medium transition-colors duration-200 ${
                                            scale === item
                                                ? "text-white"
                                                : "bg-[#858585] text-white hover:bg-[#6B7280]"
                                        }`}
                                    >
                                        {item.toFixed(1)} Scale
                                    </button>
                                ))}
                            </div>

                            {/* CALCULATE BUTTON */}
                            <button
                                type="button"
                                onClick={handleCalculate}
                                className="mt-2 w-full h-[46px] rounded-lg border border-[#0F172A] bg-[#164EAA] text-white text-base font-medium hover:bg-blue-800 transition"
                            >
                                {data.buttonText}
                            </button>

                            {/* RESULT */}
                            <div className="mt-5 text-center text-base font-semibold text-[#374151]">
                                {error ? (
                                    <p role="alert" className="text-red-600">
                                        {error}
                                    </p>
                                ) : (
                                    <p>
                                        {data.resultLabel}: {result ?? "0.00"}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
