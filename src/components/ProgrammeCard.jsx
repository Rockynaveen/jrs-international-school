import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgrammeCard({
  id,
  name,
  tagline,
  description,
  image,
  features = [],
  accent = '#DC2626',
  link = '/academics',
}) {
  return (
    <div className="group rounded-[24px] overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0B0F17] font-display text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          {id}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#16A34A] block mb-0.5">
            {tagline}
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-sm">
            {name}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 text-xs sm:text-sm text-[#111827] border-t border-slate-100 pt-4">
            {features.map((feat, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={link}
            className="inline-flex items-center gap-3 text-sm font-bold text-[#0B0F17] group-hover:text-[#DC2626] transition-colors"
          >
            <span>Explore Curriculum</span>
            <span className="w-8 h-8 rounded-full bg-[#FEF2F2] text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white flex items-center justify-center relative overflow-hidden transition-all duration-300">
              <span className="transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4">
                ↗
              </span>
              <span className="absolute transition-transform duration-300 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                ↗
              </span>
            </span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            CBSE Stream
          </span>
        </div>
      </div>
    </div>
  );
}
