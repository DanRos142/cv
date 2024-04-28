import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface Resume {
    name: string;
    title: string;
    about: string;
    links: Link[];
    expirience: Expirience[];
    education: Education[];
    info: Info[];
    skills: string[];
    languages: Language[];
}

export interface Link {
    name: string;
    url: string;
    icon: IconName;
    iconStyle: string;
}

export interface Expirience {
    title: string;
    company: string;
    location: string;
    workType: string;
    start: string;
    end: string;
    description: string;
    keyPoints: string[];
    technologies: string[];
    logoUrl: string;
}

export interface Education {
    title: string;
    description: string;
    start: string;
    end: string;
}

export interface Info {
    name: string;
    value: string;
    icon: IconName;
}

export interface Language {
    name: string;
    level: string;
}

export const source: Resume = {
    name: 'Danylo Rosiichuk',
    title: 'Senior Backend Software Engineer',
    about: 'Experienced engineer with 7+ years of expertise in design, development & support of web applications and scalable backend systems. Proven track record in solving complex business problems and overcoming technical challenges. Focused on fulfilling both functional and non-functional requirements and always willing to find the best fitting solution for any issue. Large hands-on experience with cloud providers & monitoring/observability tools.',
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/danylo-rosiichuk-947005302/",
            icon: 'linkedin',
            iconStyle: 'text-sky-500'
        },
        {
            name: "Github",
            url: "https://github.com/DanRos142",
            icon: 'github',
            iconStyle: 'text-slate-500'
        }
    ],
    education: [
        {
            title: 'KNURE',
            description: 'Master\'s degree, Computer Science',
            start: '2018',
            end: '2020'
        },
        {
            title: 'KNURE',
            description: 'Bachelor\'s degree, Computer Science',
            start: '2014',
            end: '2018'
        }
    ],
    info: [
        {
            value: 'danylorosiichuk@gmail.com',
            name: 'Email address',
            icon: 'envelope'
        },
        {
            value: '+48 500329785',
            name: 'Phone number',
            icon: 'mobile-screen'
        },
        {
            value: 'Warsaw, Poland',
            name: 'Localtion',
            icon: 'location'
        }
    ],
    expirience: [
        {
            title: 'Senior Backend Engineer',
            company: 'Introduct',
            location: 'Remote',
            workType: 'Full-time',
            start: '2021',
            end: 'now',
            description: 'Multiple projects in Logistics & Healthcare domains',
            keyPoints: [
                'Designed & developed scalable serverless AWS-Lambda solutions for a system processing millions of requests on a daily basis',
                'Successfully integrated AWS Step Functions service to manage complex workflows',
                'Designed & developed 3rd party integrations with data providers',
                'Developed new features for complex business requirements to satisfy customer needs',
                'Designed & developed Mapbox integration for interactive geo data visualization',
                'Designed & developed new services for specific subdomains',
                'Set up CI/CD pipelines for build & deployment',
            ],
            logoUrl: 'https://introduct.tech/wp-content/uploads/2023/11/logo-1.svg',
            technologies: [
                'Kotlin', 'Java', 'Spring', 'AWS', 'DynamoDB', 'Kinesis', 'Kafka', 'Hazelcast', 'PostgreSQL'
            ]
        },
        {
            title: 'Senior Backend Engineer',
            company: 'Yojji',
            location: 'Remote',
            workType: 'Full-time',
            start: '2019',
            end: '2021',
            description: 'Fintech payment platform with ~150k active users',
            keyPoints: [
                'Performed various optimizations for read-heavy system parts including caching/read replicas/applciation level parallelization to fulfil non-functional requirements',
                'Designed & developed scalable & resilient system components based on Vert.x framework',
                'Successfully developed new features including 3rd-party payment providers integrations',
                'Designed & maintained cloud infrastructure to meet customer needs',
                'Optimized data storage structure & usage to reduce operational costs'
            ],
            logoUrl: 'https://media.licdn.com/dms/image/C560BAQGs0INwWfK-ig/company-logo_200_200/0/1661282538512/yojji_logo?e=2147483647&v=beta&t=aaKDn8_bpd5ViiQuc5WNy58NwqALHkRzy6KsgSBcFp4',
            technologies: [
                'Kotlin', 'Java', 'Vert.x', 'AWS', 'Redis', 'PostgreSQL'
            ]
        },
        {
            title: 'Full-Stack Engineer',
            company: 'Pragmasoft UA',
            location: 'Kharkiv, UA',
            workType: 'Full-time',
            start: '2016',
            end: '2019',
            description: 'Insurance domain project focused on risk analysis',
            keyPoints: [
                'Performed various database query optimizations & applied parallelization to existing data processing algorithms to improve response time & overall user expirience',
                'Developed multiple PoCs that were later used as production solutions',
                'Analyzed & fixed performance issues on both BE & FE sides',
                'Successfully migrated a complex SQL caclulation procedure to Apache Spark job to significantly improve calculation speed',
                'Developed UI with interactive graphs based on D3.js'
            ],
            logoUrl: 'https://media.licdn.com/dms/image/C4D0BAQEtPUZKOS72hQ/company-logo_100_100/0/1652263104489/pragmasoft_ukraine_logo?e=2147483647&v=beta&t=YOFPtkwn8jIHWvmuKQMC8GvwQ5kgSQoHQa6vpjxo_hM',
            technologies: [
                'Java', 'Spring', 'AWS', 'Apache Spark', 'Typescript', 'D3.js', 'SQL Server'
            ]
        }
    ],
    skills: ['Java', 'Kotlin', 'Spring', 'Vert.x', 'Redis', 'Hazelcast', 'RabbitMQ', 'Kafka', 'AWS', 'Typescript', 'Angular 2+', 'D3.js', 'CI/CD', 'Terraform', 'OOP/OOD', 'PostgreSQL', 'Oracle', 'SQL Server', 'Apache Spark', 'Hibernate', 'REST API', 'Docker', 'Openshift', 'Kubernetes', 'Gradle', 'Maven', 'Git', 'ELK', 'Grafana'],
    languages: [
        {
            name: 'English',
            level: 'Full professional proficiency'
        },
        {
            name: 'Ukrainian',
            level: 'Native or bilingual proficiency'
        },
        {
            name: 'Polish',
            level: 'Beginner'
        }
    ]
}
