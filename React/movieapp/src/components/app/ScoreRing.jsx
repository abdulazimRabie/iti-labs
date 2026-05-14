function ScoreRing({ score, size = 64 }) {
    const r = (size / 2) - 5;
    const circ = 2 * Math.PI * r;
    const color = score >= 7.5 ? "#16a34a" : score >= 6 ? "#d97706" : "#dc2626";
    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,.08)" strokeWidth="4" />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 10)} strokeLinecap="round" />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-lg font-bold text-zinc-900 leading-none">{score.toFixed(1)}</span>
          <span className="text-[9px] text-zinc-500 leading-none mt-0.5">/ 10</span>
        </div>
      </div>
    );
}


export default ScoreRing