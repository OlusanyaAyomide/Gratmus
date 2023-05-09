import { CompanyExporter } from "@/public/company/CompanyExporter";
import { landingExporter } from "@/public/landing/image/landingExporter";
import { SignUpResource } from "@/public/signup/signupExporter";

export const navLinks=[
    {
        name:"People",
        image:landingExporter.People
    },
    {
        name:"Company",
        image:landingExporter.Company
    },
    {
        name:"Jobs",
        image:landingExporter.Jobs
    },
    {
        name:"Groups",
        image:landingExporter.Groups
    },
]

export const footerLinks=[
    {
        header:"General",
        content:[
           {
            link:"",
            text:"Sign Up"
           },
           {
            link:"",
            text:"Login"
           },
           {
            link:"",
            text:"Help Center"
           },
           {
            link:"",
            text:"Blog"
           },
        ]
    },
    {
        header:"Business",
        content:[
           {
            link:"",
            text:"Company"
           },
           {
            link:"",
            text:"Business"
           },
           {
            link:"",
            text:"Group"
           },
           {
            link:"",
            text:"Forum"
           },
        ]
    },
    {
        header:"Terms",
        content:[
           {
            link:"",
            text:"Privacy Policy"
           },
           {
            link:"",
            text:"Terms and Condition"
           },
           {
            link:"",
            text:"Copyright Policy"
           }
        ]
    },
    {
        header:"Directory",
        content:[
           {
            link:"",
            text:"Search People"
           },
           {
            link:"",
            text:"Companies"
           },
           {
            link:"",
            text:"Pages"
           },
        ]
    },
]

export const Typography={
    heroText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi necessitatibus dolore adipisci, sint sapiente libero corrupti, culpa et non quae deserunt aliquid quasi fugit",
    profesionalText:"CONNECT WITH POTENTIAL CUSTOMERS AROUND THE GLOBE",
    connectTextsm:"Best way to get target customers",
    connectText:"Friends, Families, Companies, Recruiters",
    connectTextdb:"Also Meet New Friends",
    profileText:"Build A great Profile",
    ProfileTextsm:"Build a Professional Profile that attracts great people, customers, Companies and Hr",
    TrendingText:"Find out what many people Are discussing",
    signUpText:"Check for further information on how to switch to professional mode on this platform after ceating an account in the link below"
}

export const Discussoptions=[
    {
        link:"",
        icon:landingExporter.Business,
        text:"Business Name",
        desc1:"NICHE",
        desc2:"Location"
    },
    {
        link:"",
        icon:landingExporter.Group2,
        text:"Open Group",
        desc1:"Name",
        desc2:"Common Mind"
    },
    {
        link:"",
        icon:landingExporter.FreeLancer,
        text:"Free Lancer",
        desc1:"Skill",
        desc2:"Jobs"
    },
    {
        link:"",
        icon:landingExporter.ShowRoom,
        text:"Show Room",
        desc1:"Project",
        desc2:"Investor"
    },
]

export const TagList =[
    'Technology',"sales","Accountant","Project","Investors Are Greedy","New Job","Auditor","Dance Steps"
]

export const BlogList =[
    {
        image:landingExporter.Discuss1,
        text1:"Blog Title",
        text2:"Aliqua irure tempo lorem OCtat volup",
        time:"Dec 22, 2022",
        duration:"5 mins read"
    },   
    {
        image:landingExporter.Discuss2,
        text1:"Blog Title",
        text2:"Aliqua irure tempo lorem OCtat volup",
        time:"Dec 22, 2022",
        duration:"5 mins read"
    },
    {
        image:landingExporter.Discuss3,
        text1:"Blog Title",
        text2:"Aliqua irure tempo lorem OCtat volup",
        time:"Dec 22, 2022",
        duration:"5 mins read"
    }     
]


export const ExploreArray =[
    {
        image:landingExporter.ExploreName,
        text:"NAME",
        number:"2,056,187 names",
        style:"#ECFDFCFF"
    },
    {
        image:landingExporter.ExploreGender,
        text:"GENDER",
        number:"3 Gender",
        style:"#FFF6F0FF"
    },
    {
        image:landingExporter.ExploreLocation,
        text:"LOCATION",
        number:"5768 locations",
        style:"#F6F1FDFF"
    },
    {
        image:landingExporter.ExploreGroup,
        text:"GROUPS",
        number:"245,468 Group",
        style:"#FDF1FDFF",
    },
    {
        image:landingExporter.ExploreName,
        text:"PAGES",
        number:"341,680 pages",
        style:"#fdfcf1",
    },
    {
        image:landingExporter.ExploreLocation,
        text:"COMPANIES",
        number:"12,000 Companies",
        style:"#f2f1fd",
    },
    {
        image:landingExporter.ExploreGroup,
        text:"FREELANCER",
        number:"4,127,070 FreLancer",
        style:"#f2f1fd",
    },

]

export const signUpfeatures=[
    {
        image:SignUpResource.People,
        text:"people"
    },
    {
        image:SignUpResource.Company,
        text:"Company"
    },
    {
        image:SignUpResource.Jobs,
        text:"Jobs"
    },
    {
        image:SignUpResource.FreeLancer,
        text:"Freelancers"
    },
]

export const EducationList =[
    {
        name:"Melbourne Univesity New York",
        logo:CompanyExporter.Job2,
        text:"Advanced Diploma in MultiMedia",
        duration:"2014-2017"
    },
    {
        name:"Univerity of Abudhabi",
        logo:CompanyExporter.Job1,
        text:"Advanced Diploma Internation Relations",
        duration:"2017-2018"
    },
]