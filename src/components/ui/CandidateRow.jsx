import React from 'react';
import { Zap } from 'lucide-react';

export default function CandidateRow({ name, role, score, media }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-900/60 transition cursor-pointer group bg-slate-900/40 relative">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold group-hover:bg-slate-700 transition">
            {name.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold text-slate-100">{name}</p>
        </div>
      </div>

      {media ? <div>{media}</div> : null}

      <div className="text-right">
        <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-xs font-bold border border-emerald-500/20">
          <Zap size={12} fill="currentColor" /> {score}
        </div>
      </div>
    </div>
  );
}