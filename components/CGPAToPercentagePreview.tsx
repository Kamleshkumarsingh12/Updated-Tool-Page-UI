
"use client";

import { useState } from "react";

type CGPAToPercentagePreviewProps = {
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

export default function CGPAToPercentagePreview({
    data,
}: CGPAToPercentagePreviewProps) {
    const [cgpa, setCgpa] = useState("");
    const [factor, setFactor] = useState("9.5");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState("");

    const cgpaInput = data.inputs.find(
        (input) => input.key === "cgpa"
    );

    const factorInput = data.inputs.find(
        (input) => input.key === "factor"
    );

    const handleConvert = () => {
        if (cgpa.trim() === "" || factor.trim() === "") {
            setResult(null);
            setError("Please enter CGPA and conversion factor.");
            return;
        }

        const cgpaValue = Number(cgpa);
        const factorValue = Number(factor);

        if (
            !Number.isFinite(cgpaValue) ||
            !Number.isFinite(factorValue) ||
            cgpaValue < 0 ||
            cgpaValue > 10 ||
            factorValue <= 0 ||
            cgpaValue * factorValue > 100
        ) {
            setResult(null);
            setError("Enter valid values. Percentage cannot exceed 100%.");
            return;
        }

        setResult((cgpaValue * factorValue).toFixed(2));
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
                    <div className="relative z-10 w-full max-w-[520px]">

                        {/* DECORATIVE BACKGROUND */}
                        <div className="absolute inset-x-0 top-7 h-[180px] rounded-2xl bg-[#137FEC15]" />

                        {/* COMPACT CARD */}
                        <div className="relative rounded-2xl bg-white p-5 shadow-[0px_20px_50px_rgba(2,6,23,0.12)] sm:p-7">

                            <h2 className="text-center text-lg font-bold text-[#0F172A]">
                                {data.titleWhite} {data.titleYellow}
                            </h2>

                            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#EDA12E]" />

                            {/* HORIZONTAL CONVERTER */}
                            <div className="mt-6 grid grid-cols-1 items-end gap-3 sm:grid-cols-[1fr_1fr_auto]">

                                <div>
                                    <label
                                        htmlFor="preview-cgpa"
                                        className="mb-2 block text-xs font-medium text-[#475569]"
                                    >
                                        {cgpaInput?.label ?? "Enter CGPA"}
                                    </label>

                                    <input
                                        id="preview-cgpa"
                                        type="number"
                                        min="0"
                                        max="10"
                                        step="any"
                                        placeholder={
                                            cgpaInput?.placeholder ?? "e.g. 8.5"
                                        }
                                        value={cgpa}
                                        onChange={(e) => {
                                            setCgpa(e.target.value);
                                            setResult(null);
                                            setError("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleConvert();
                                            }
                                        }}
                                        className="h-[42px] w-full rounded-md border border-[#C7D2E2] px-3 text-sm text-[#0F172A] outline-none transition focus:border-[#137FEC] focus:ring-2 focus:ring-[#137FEC]/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="preview-factor"
                                        className="mb-2 block text-xs font-medium text-[#475569]"
                                    >
                                        {factorInput?.label ?? "Conversion Factor"}
                                    </label>

                                    <input
                                        id="preview-factor"
                                        type="number"
                                        min="0.01"
                                        step="any"
                                        value={factor}
                                        onChange={(e) => {
                                            setFactor(e.target.value);
                                            setResult(null);
                                            setError("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleConvert();
                                            }
                                        }}
                                        className="h-[42px] w-full rounded-md border border-[#C7D2E2] px-3 text-sm text-[#0F172A] outline-none transition focus:border-[#137FEC] focus:ring-2 focus:ring-[#137FEC]/10"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleConvert}
                                    className="h-[42px] rounded-md bg-[#37336F] px-5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#292653] active:scale-[0.98]"
                                >
                                    {data.buttonText}
                                </button>
                            </div>

                            {/* RESULT */}
                            {(result !== null || error) && (
                                <div
                                    aria-live="polite"
                                    className={`mt-5 rounded-lg px-4 py-3 text-center text-sm ${
                                        error
                                            ? "bg-red-50 text-red-600"
                                            : "bg-[#F1F5F9] text-[#0F172A]"
                                    }`}
                                >
                                    {error || (
                                        <>
                                            {data.resultLabel}:{" "}
                                            <strong className="text-[#137FEC]">
                                                {result}%
                                            </strong>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
