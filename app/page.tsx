
import Hero from "@/components/CalculatorPlayground";
import ConversionChart from "@/components/ConversionChart";
import ExploreCalculators from "@/components/ExploreCalculators";
import MarksPercentageGuide from "@/components/MarksPercentaGuide";
import CGPAToPercentagePreview from "@/components/CGPAToPercentagePreview";


const heroData = {
    titleWhite: "Percentage to",
    titleYellow: "GPA Calculator",
    description1:
        "From percentage to GPA in seconds, free and accurate. edept's",
    description2:
        "online Percentage to GPA Conversion Calculator is the tool every",
    description3:
        "Indian student needs before applying abroad.",
    description4: "",
    buttonText: "Calculate GPA",
};

const conversionChartData = {
    heading: "Percentage to GPA Conversion Chart",
    description:
        "Compare percentage ranges with their equivalent GPA across different grading scales.",
    headers: [
        "Percentage Range",
        "Letter Grade",
        "GPA (4.0 Scale)",
        "GPA (5.0 Scale)",
        "GPA (10.0 Scale)",
        "Performance Level",
    ],
    rows: [
        {
            col1: "90 – 100%",
            col2: "A+",
            col3: "4",
            col4: "4.5 – 5.0",
            col5: "9.5 – 10.0",
            status: "Outstanding",
            statusColor: "text-[#475569]",
        },
        {
            col1: "80 – 89%",
            col2: "A",
            col3: "3.7 – 3.9",
            col4: "4.0 – 4.45",
            col5: "8.5 – 9.4",
            status: "Excellent",
            statusColor: "text-[#475569]",
        },
        {
            col1: "70 – 79%",
            col2: "B+",
            col3: "3.0 – 3.6",
            col4: "3.5 – 3.95",
            col5: "7.4 – 8.4",
            status: "Very Good",
            statusColor: "text-[#475569]",
        },
        {
            col1: "60 – 69%",
            col2: "B",
            col3: "2.5 – 2.9",
            col4: "3.0 – 3.45",
            col5: "6.4 – 7.3",
            status: "Good",
            statusColor: "text-[#475569]",
        },
        {
            col1: "50 – 59%",
            col2: "C",
            col3: "2.0 – 2.4",
            col4: "2.5 – 2.95",
            col5: "5.3 – 6.3",
            status: "Average",
            statusColor: "text-[#475569]",
        },
        {
            col1: "40 – 49%",
            col2: "D",
            col3: "1.0 – 1.9",
            col4: "2.0 – 2.45",
            col5: "4.3 – 5.2",
            status: "Below Average",
            statusColor: "text-[#475569]",
        },
        {
            col1: "Below 40%",
            col2: "F",
            col3: "0",
            col4: "0 – 1.95",
            col5: "0.0 – 4.2",
            status: "Fail",
            statusColor: "text-[#475569]",
        },
    ],
};

export default function Page() {
    return (
        <main>
            <Hero data={heroData} />

            <ConversionChart data={conversionChartData} />
            <ExploreCalculators />
            <MarksPercentageGuide />
        
        </main>
    );
}
