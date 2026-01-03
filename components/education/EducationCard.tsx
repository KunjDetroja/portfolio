'use client';

import { Education } from '@/types/education';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface EducationCardProps {
    education: Education;
}

// Generate initials for placeholder
const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
};

// Reusable Image with Fallback
function InstitutionImage({ education, size = 56, className }: { education: Education; size?: number; className?: string }) {
    const [imgError, setImgError] = useState(false);

    if (education.image && !imgError) {
        return (
            <div
                className={cn("rounded-lg overflow-hidden", className)}
                style={{ width: size, height: size }}
            >
                <Image
                    src={education.image}
                    alt={education.institution}
                    width={size}
                    height={size}
                    className={cn(education.imageBg, "w-full h-full object-contain")}
                    onError={() => setImgError(true)}
                />
            </div>
        );
    }

    return (
        <div
            className={cn("rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm", className)}
            style={{ width: size, height: size, fontSize: size * 0.35 }}
        >
            {getInitials(education.institution)}
        </div>
    );
}

export function EducationCard({ education }: EducationCardProps) {
    return (
        <div className="group relative flex gap-4 rounded-xl p-4 transition-all backdrop-blur-sm bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-700/50 hover:bg-white dark:hover:bg-neutral-900/90 hover:shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-600">
            <InstitutionImage education={education} size={56} className="shrink-0" />

            <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-0.5 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {education.degree}{education.field && ` ${education.field}`}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-0.5">{education.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end md:text-right mt-1 md:mt-0 shrink-0">
                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                            {education.startDate} – {education.isCurrent ? 'Present' : education.endDate}
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-500 text-sm">{education.location}</p>
                    </div>
                </div>
                <div className="mt-2">
                    <span className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 text-xs font-medium">
                        {education.scoreType === 'CGPA' ? 'CGPA' : 'Percentage'}: {education.score}
                    </span>
                </div>
            </div>
        </div>
    );
}
