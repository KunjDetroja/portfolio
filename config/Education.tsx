import { Education } from '@/types/education';

export const education: Education[] = [
    {
        institution: 'LJ University',
        degree: 'B.E.',
        field: 'Information Technology',
        location: 'Ahmedabad, India',
        image: '/education/lj.png',
        startDate: '2021',
        endDate: '2025',
        score: '8.76',
        scoreType: 'CGPA',
        isCurrent: false,
    },
    {
        institution: 'Shree Gayatri Vidhyalay',
        degree: 'HSC',
        location: 'Ahmedabad, India',
        image: '/education/gayatri.jpg',
        startDate: '2020',
        endDate: '2021',
        score: '71.7%',
        scoreType: 'Percentage',
    },
    // {
    //     institution: "St. Mary's Higher Secondary School",
    //     degree: 'SSC',
    //     location: 'Ahmedabad, India',
    //     image: '/education/stmary.jpg',
    //     startDate: '2018',
    //     endDate: '2019',
    //     score: '68%',
    //     scoreType: 'Percentage',
    // },
];
