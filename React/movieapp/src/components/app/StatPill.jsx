function StatPill({ icon: Icon, label, value }) {
    return (
      <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3">
        <Icon size={15} className="text-zinc-400 flex-shrink-0" />
        <div>
          <p className="text-[10px] text-zinc-400 uppercase tracking-wide">{label}</p>
          <p className="text-sm font-semibold text-zinc-800">{value}</p>
        </div>
      </div>
    );
}

export default StatPill