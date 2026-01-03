// Education types
export interface Education {
    institution: string;
    degree: string;
    field?: string;
    location: string;
    image?: string;
    imageBg?: string;
    startDate: string;
    endDate: string;
    score: string;
    scoreType: 'CGPA' | 'Percentage';
    isCurrent?: boolean;
}
