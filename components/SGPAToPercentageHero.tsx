
"use client";

import { useState } from "react";

type SGPAToPercentageHeroProps = {
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
        resultLabel: string;
        buttonText: string;
        type: string;
    };
};

export default function SGPAToPercentageHero({
    data,
}: SGPAToPercentageHeroProps) {
    const [sgpa, setSgpa] = useState("");
    const [percentage, setPercentage] = useState("");
    const [error, setError] = useState("");

    const sgpaInput = data.inputs.find(
        (input) => input.key === "sgpa"
    );

    const handleCalculate = () => {
        if (sgpa.trim() === "") {
            setPercentage("");
            setError("Please enter your SGPA.");
            return;
        }

        const value = Number(sgpa);

        if (!Number.isFinite(value) || value < 0 || value > 10) {
            setPercentage("");
            setError("Enter an SGPA between 0 and 10.");
            return;
        }

        // Confirm this formula against the institution's official rule.
        const result = (value * 10) - 7.5;

        setPercentage(
            Math.max(0, Math.min(100, result)).toFixed(2)
        );
        setError("");
    };

    const handleReset = () => {
        setSgpa("");
        setPercentage("");
        setError("");
    };

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-[#f5f7fb] to-white">
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
                    <div className="relative z-10 w-full max-w-[420px]">

                        {/* DECORATIVE BACKGROUND */}
                        <div className="absolute inset-x-0 top-7 h-[250px] rounded-2xl bg-[#137FEC15]" />

                        {/* COMPACT CALCULATOR CARD */}
                        <div className="relative rounded-2xl bg-white p-6 shadow-[0px_20px_50px_rgba(2,6,23,0.12)] sm:p-7">

                            <h2 className="mb-5 text-[22px] font-semibold text-[#475569]">
                                SGPA to Percentage
                            </h2>

                            {/* SGPA INPUT */}
                            <label
                                htmlFor="sgpa"
                                className="mb-2 block text-sm text-[#475569]"
                            >
                                {sgpaInput?.label ?? "Enter Your SGPA"}
                            </label>

                            <input
                                id="sgpa"
                                type="number"
                                min="0"
                                max="10"
                                step="any"
                                placeholder={
                                    sgpaInput?.placeholder ?? "Enter Your SGPA"
                                }
                                value={sgpa}
                                onChange={(e) => {
                                    setSgpa(e.target.value);
                                    setPercentage("");
                                    setError("");
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleCalculate();
                                }}
                                className="mb-4 h-[42px] w-full rounded-md border border-[#9DB7F5] bg-white px-3 text-sm text-[#0F172A] outline-none focus:border-[#137FEC]"
                            />

                            {/* PERCENTAGE RESULT */}
                            <label
                                htmlFor="percentage-result"
                                className="mb-2 block text-sm text-[#475569]"
                            >
                                {data.resultLabel}
                            </label>

                            <input
                                id="percentage-result"
                                type="text"
                                readOnly
                                placeholder={data.resultLabel}
                                value={percentage}
                                className="h-[42px] w-full rounded-md border border-[#9DB7F5] bg-white px-3 text-sm text-[#0F172A] outline-none"
                            />

                            {/* ACTION BUTTONS */}
                            <div className="mt-4 flex gap-2">
                                <button
                                    type="button"
                                    onClick={handleCalculate}
                                    className="rounded-md bg-[#D1D5DB] px-5 py-2 text-sm text-[#111827] transition hover:bg-[#BFC6D1]"
                                >
                                    {data.buttonText}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="rounded-md bg-[#D1D5DB] px-5 py-2 text-sm text-[#111827] transition hover:bg-[#BFC6D1]"
                                >
                                    Reset
                                </button>
                            </div>

                            {error && (
                                <p
                                    role="alert"
                                    className="mt-3 text-sm text-red-600"
                                >
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
