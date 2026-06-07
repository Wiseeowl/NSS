import React from "react";
import teamData from "../data/TeamData";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ image, name, role, linkedin, instagram, email }) => {
  return (
    <div
      className="relative group bg-white rounded-2xl shadow-[0_10px_30px_rgba(13,27,54,0.05)] 
                 w-full max-w-[280px] h-[360px] mx-auto
                 flex flex-col items-center justify-start
                 pt-10 pb-6 px-6 text-center
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 border border-[#19366B]/15 overflow-hidden"
    >
      {/* Crimson top-border accent on hover */}
      <span className="absolute inset-x-0 top-0 h-1 bg-[#F6170F] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {/* Avatar */}
      <div className="w-36 h-36 rounded-full overflow-hidden 
                      border-4 border-white shadow-sm z-10 shrink-0">
        <img
          src={image || "/team/placeholder.jpg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <h3 className="mt-6 text-xl font-bold text-[#0F172A] z-10 font-[Outfit] tracking-tight">
        {name}
      </h3>
      <p className="text-sm text-[#64748B] font-medium z-10 mt-1">
        {role}
      </p>

      {/* Social Icons (HOVER ONLY) */}
      <div
        className="mt-auto flex gap-4 z-10
                   opacity-0 translate-y-2
                   transition-all duration-300 ease-out
                   group-hover:opacity-100 group-hover:translate-y-0"
      >
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] hover:text-[#E1306C] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-[#64748B] hover:text-[#0F172A] transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      
      {/* Background Accent Blobs - Kept subtle to align with new design */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#19366B]/5 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-[#F6170F]/5 blur-[120px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">

        {/* EXECUTIVE BODY */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-[#0D1B36] tracking-tight font-[Outfit]">
            Executive Body
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.executive.map((m, i) => (
              <TeamCard
                key={i}
                image={m.image}
                name={m.name}
                role={m.role}
                linkedin={m.linkedin}
                instagram={m.instagram}
                email={m.email}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#19366B]/15 my-20" />

        {/* SUB TEAMS */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-[#0D1B36] tracking-tight font-[Outfit]">
            Sub Teams
          </h2>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.teams.map((team, idx) => {
              const m = team.assistantCoordinators?.[0];
              return (
                <div key={idx} className="flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-6 text-[#19366B] text-center bg-white px-5 py-2 rounded-full border border-[#19366B]/15 shadow-sm font-[Outfit] tracking-wide uppercase">
                    {team.teamName}
                  </h3>

                  <TeamCard
                    image={m?.image}
                    name={m?.name}
                    role="Assistant Coordinator"
                    linkedin={m?.linkedin}
                    instagram={m?.instagram}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
