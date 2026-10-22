
type GuideStep = {
    number: string;
    title: string;
    description: string;
    example: string;
};

type MarksPercentageGuideProps = {
    data: {
        sectionLabel: string;
        heading: string;
        description: string;
        formulaTitle: string;
        formulaDescription: string;
        steps: GuideStep[];
        workedExampleLabel: string;
        examScoreTitle: string;
        obtainedMarksLabel: string;
        obtainedMarks: number;
        totalMarksLabel: string;
        totalMarks: number;
        divideStepLabel: string;
        divideExpression: string;
        multiplyStepLabel: string;
        multiplyExpression: string;
        finalPercentageLabel: string;
        finalPercentage: string;
        finalDescription: string;
    };
};

export default function MarksPercentageGuide({
    data,
}: MarksPercentageGuideProps) {
    return (
        <section className="bg-white px-5 py-16">
            <div className="mx-auto max-w-6xl">

                {/* SECTION HEADING */}
                <div className="mb-8 max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#137FEC]">
                        {data.sectionLabel}
                    </span>

                    <h2 className="mt-3 text-2xl font-bold leading-tight text-[#0F172A] sm:text-3xl">
                        {data.heading}
                    </h2>

                    <p className="mt-3 text-base leading-7 text-[#64748B]">
                        {data.description}
                    </p>
                </div>

                {/* BLUE GUIDE CARD */}
                <div className="overflow-hidden rounded-2xl bg-[#243D73] shadow-lg">

                    {/* CARD HEADER */}
                    <div className="border-b border-white/15 px-6 py-6 sm:px-9">
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            {data.formulaTitle}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-blue-100">
                            {data.formulaDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2">

                        {/* VISUAL STEPS */}
                        <div className="p-6 sm:p-9">
                            <div className="space-y-5">
                                {data.steps.map((step, index) => (
                                    <div key={step.number}>
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5A313] text-sm font-bold text-white">
                                                {step.number}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h4 className="font-semibold text-white">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-1 text-sm leading-6 text-blue-100">
                                                    {step.description}
                                                </p>

                                                <div className="mt-2 inline-flex rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white">
                                                    {step.example}
                                                </div>
                                            </div>
                                        </div>

                                        {index < data.steps.length - 1 && (
                                            <div className="ml-5 mt-2 h-4 w-px bg-white/25" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WORKED EXAMPLE */}
                        <div className="flex items-center bg-[#1C315E] p-6 sm:p-9">
                            <div className="w-full rounded-2xl bg-white p-6 shadow-xl sm:p-8">

                                <span className="inline-flex rounded-full bg-[#FFF0D1] px-3 py-1 text-xs font-semibold text-[#9A5B00]">
                                    {data.workedExampleLabel}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
                                    {data.examScoreTitle}
                                </h3>

                                {/* INPUT VALUES */}
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-[#F1F5F9] p-4">
                                        <p className="text-xs text-[#64748B]">
                                            {data.obtainedMarksLabel}
                                        </p>
                                        <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                                            {data.obtainedMarks}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F1F5F9] p-4">
                                        <p className="text-xs text-[#64748B]">
                                            {data.totalMarksLabel}
                                        </p>
                                        <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                                            {data.totalMarks}
                                        </p>
                                    </div>
                                </div>

                                {/* CALCULATION */}
                                <div className="mt-5 space-y-3">
                                    <div className="flex items-center justify-between gap-3 text-sm">
                                        <span className="text-[#64748B]">
                                            {data.divideStepLabel}
                                        </span>
                                        <span className="font-semibold text-[#0F172A]">
                                            {data.divideExpression}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 text-sm">
                                        <span className="text-[#64748B]">
                                            {data.multiplyStepLabel}
                                        </span>
                                        <span className="font-semibold text-[#0F172A]">
                                            {data.multiplyExpression}
                                        </span>
                                    </div>
                                </div>

                                {/* FINAL ANSWER */}
                                <div className="mt-6 rounded-xl bg-[#E2F5DF] p-5">
                                    <p className="text-sm font-medium text-[#166534]">
                                        {data.finalPercentageLabel}
                                    </p>

                                    <div className="mt-1 flex items-baseline gap-2">
                                        <span className="text-4xl font-bold tracking-tight text-[#166534]">
                                            {data.finalPercentage}%
                                        </span>
                                    </div>

                                    <p className="mt-2 text-xs leading-5 text-[#166534]">
                                        {data.finalDescription}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
