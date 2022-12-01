/**
 * Code was based on this tutorial
 * https://dev.to/jackherizsmith/making-a-progress-circle-in-react-3o65  
**/

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct }: {color: string, pct: number}) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove colour as 0% sets full circumference
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage, color }: {percentage: number, color: string}) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
      fill={color}
      fontWeight="bold"
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, colorGraphic, colorText }: {percentage: number, colorGraphic: string, colorText: string}) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="lightgrey" pct={0} />
        <Circle color={colorGraphic} pct={pct} />
      </g>
      <Text percentage={pct} color={colorText} />
    </svg>
  );
};

export default Pie;
