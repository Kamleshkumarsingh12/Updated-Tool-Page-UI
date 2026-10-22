
type Row = {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
  col5?: string;
  status: string;
  statusColor: string;
  minorHeader?: string;
};

type ConversionChartProps = {
  heading: string;
  description: string;
  headers: string[];
  rows: Row[];
};

export default function ConversionChart({
  data,
}: {
  data: ConversionChartProps;
}) {
  const { heading, description, headers, rows } = data;

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-[28px] font-semibold text-[#0F172A]">
          {heading}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>

        {/* TABLE */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-[0px_30px_80px_rgba(19,127,236,0.13),0px_-30px_80px_rgba(19,127,236,0.13)] overflow-x-auto">

          <table className="w-full min-w-[760px] text-left">

            {/* HEADER */}
            <thead className="bg-[#F1F5F9] text-[11px] md:text-[13px] uppercase text-[#64748B]">
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`py-5 px-4 md:px-5 whitespace-nowrap ${
                      i !== 0 ? "text-[#10519E]" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-[12px] md:text-[14px] text-[#475569]">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-[#10519E]/40 hover:bg-[#F1F7FE] transition-colors"
                >
                  <td className="py-5 px-4 md:px-5 whitespace-nowrap">
                    {row.col1}
                  </td>

                  <td className="py-5 px-4 md:px-5 text-[#10519E] font-medium">
                    {row.col2}
                  </td>

                  {row.col3 !== undefined && (
                    <td className="py-5 px-4 md:px-5 whitespace-nowrap">
                      {row.col3}
                    </td>
                  )}

                  {row.col4 !== undefined && (
                    <td className="py-5 px-4 md:px-5 whitespace-nowrap">
                      {row.col4}
                    </td>
                  )}

                  {row.col5 !== undefined && (
                    <td className="py-5 px-4 md:px-5 whitespace-nowrap">
                      {row.col5}
                    </td>
                  )}

                  <td className={`py-5 px-4 md:px-5 font-medium whitespace-nowrap ${row.statusColor}`}>
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
