'use client';
import { useState } from 'react';
import { getPublishedProjects } from '@/lib/projects';
import { ProjectList } from './ProjectList';
const projects = getPublishedProjects();
export function ProjectExplorer() {
 const [query,setQuery]=useState(''),[ownership,setOwnership]=useState('all'),[platform,setPlatform]=useState('all');
 const visible=projects.filter(p => (ownership==='all'||(p.ownership||'company')===ownership) && (platform==='all'||(p.platforms || ['Web','Backend']).includes(platform)) && [p.title,p.description,...p.technologies.map(t=>t.name)].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
 return <div className="space-y-6"><div className="grid gap-4 sm:grid-cols-3"><label className="space-y-2 text-sm">Search projects<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Name, skill, or product" className="mt-2 w-full rounded-md border bg-background p-3" /></label><label className="space-y-2 text-sm">Ownership<select value={ownership} onChange={e=>setOwnership(e.target.value)} className="mt-2 w-full rounded-md border bg-background p-3"><option value="all">All projects</option><option value="personal">Personal</option><option value="company">Company</option><option value="freelance">Freelance</option></select></label><label className="space-y-2 text-sm">Platform<select value={platform} onChange={e=>setPlatform(e.target.value)} className="mt-2 w-full rounded-md border bg-background p-3"><option value="all">All platforms</option><option>Web</option><option>Mobile</option><option>Backend</option></select></label></div><p role="status" className="text-sm text-secondary">{visible.length} of {projects.length} projects</p>{visible.length ? <ProjectList projects={visible} /> : <p>No matching projects. Try another search or filter.</p>}</div>;
}
