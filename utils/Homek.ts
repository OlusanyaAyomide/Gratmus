import { homeResource } from "@/public/home/homeExporter";
import {BsFillPersonFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {AiFillHome} from "react-icons/ai"
import { CompanyExporter } from "@/public/company/CompanyExporter";

export const NavLinks=[
    {
        name:"Home",
        image:homeResource.Home,
        link:"/home"
    },
    {
        name:"Jobs",
        image:homeResource.Job,
        link:"/company/profile"
    },
    {  
        name:"Groups",
        image:homeResource.Users,
        link:"/candidate/listing"
    },
    {
        name:"Cart",
        image:homeResource.Cart,
        link:"/cart"
    },
    {
        name:"Gallery",
        image:homeResource.Screen,
        link:"gallery"
    },
    {
        name:"Videos",
        image:homeResource.Videos,
        link:"/video"
    }
]


export const profileList =[
 "Improve your profile","Personal Verifcation","Business Verification","Business Verification"  
]


export const suggestionList =[
    {
        name:"Jessica William",
        job:"Graphic Designer",
        added:false,
        image:homeResource.Person1
    },
    {
        name:"John Doe",
        job:"Entrepeneur",
        added:false,
        image:homeResource.Person3
    },
    {
        name:"Poonam",
        job:"Word Press Developer",
        added:false,
        image:homeResource.Person5
    },
    {
        name:"Bill Gates",
        job:"Fashion Designer",
        added:true,
        image:homeResource.Person1
    },
    {
        name:"Jessica Williams",
        job:"App Dveloper",
        added:false,
        image:homeResource.Person1
    },
    {
        name:"John Doe",
        job:"Php Devloper",
        added:true,
        image:homeResource.Person3
    },
]

export const profileGuide={
    first:"Help Center About | Privacy Policy",
    second:"Community Guidelines Cookies Policy",
    third:"Career | Language | Copyright Policy"
}

export const TopButtons=[
    {image:homeResource.Videos,text:"Media/Reel"},
    {image:homeResource.ScreenCast,text:"Post a Project"},
    {image:homeResource.Cart2,text:"Post your items"},
    {image:homeResource.Calendar,text:"Live Events"},
]


export const FeedMock=[
    {
        name:"John Doe",
        verified:false,
        profile:homeResource.Avatar1,
        type:"post",
        postedAt:"Posted 3 min ago",
        nickName:"Epic Coder",
        following:false, 
        tagList:["Open for Job"],
        jobText:"Senior Word press Developer",
        openforJob:false,
        postText:"Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end",
        tags:["Motivation","Trends","JavaScript","Employment"],
        hasImage:true,
        postImage:homeResource.Post1,
        views:150,
        comments:15,
        likedBy:"Jessica Williams and 14 others"
    },
    {
        name:"Damilola Apparallel",
        verified:true,
        profile:homeResource.Profile2,
        type:"organization",
        postedAt:"Posted 3 min ago",
        nickName:false,
        following:false, 
        tagList:["Now Selling","Now Hiring"],
        jobText:"Fashion store clothing",
        openforJob:false,
        postText:"Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end23",
        tags:["Motivation","Trends","Impact","JavaScript","Employment"],
        hasImage:true,
        postImage:homeResource.Post2,
        views:70,
        comments:18,
        likedBy:"Jessica Williams and 14 others"
    },
    {
        name:"Engr Badmus",
        verified:true,
        profile:homeResource.Profile3,
        type:"post",
        postedAt:"Posted 12 min ago",
        nickName:false,
        following:false, 
        tagList:["Open to Projects"],
        jobText:"Fashion store clothing",
        openforJob:false,
        postText:"Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end23",
        tags:["Real","Trends","Fun","Impact","Employment"],
        hasImage:false,
        postImage:null,
        views:70,
        video:"abc",
        comments:18,
        likedBy:"Jessica Williams and 14 others"
    },
    {
        name:"Wizzy Music",
        verified:true,
        profile:homeResource.Profil4,
        type:"post",
        postedAt:"Posted 12 min ago",
        nickName:false,
        following:true, 
        tagList:["Open to Projects"],
        jobText:"Artist Song Writer",
        openforJob:false,
        postText:"Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end23",
        tags:["Real","Trends","Fun","Impact","Employment"],
        hasImage:false,
        postImage:null,
        views:70,
        audio:"abc",
        comments:18,
        likedBy:"Jessica Williams and 14 others"
    },
]

export const Notifications={
    notificationList:[
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat modi officiis",
        "Lorem adipisicing elit. Enim, hic cupiditate,  nihil repudiandae aperiam "
    ],
    promotedAds:[
      {
        role:"Senior Product Designer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        pay:"$25/hr"
      },
      {
        role:"Senior UI/UX Designer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        pay:"$23/hr"
      },
      {
        role:"Senior SEO Designer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        pay:"$21/hr"
      },
      {
        role:"Senior PHP Designer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        pay:"$25/hr"
      },
      {
        role:"Senior Developer Designer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        pay:"$25/hr"
      },
    ],
    viewedPeople:[
        {
            image:homeResource.Person1,
            name:"Jessica Williams",
            job:"Graphic Designer",
            circle:false
        },
        {
            image:homeResource.Person2,
            name:"John Doe",
            job:"PHP Developer",
            circle:true
        },
        {
            image:homeResource.Person3,
            name:"Poo nam",
            job:"Word Press Developer",
            circle:true
        },
        {
            image:homeResource.Person4,
            name:"Bill Gate",
            job:"C/C++ Developer",
            circle:true
        },
        {
            image:homeResource.Person5,
            name:"John Doe",
            job:"PHP Developer",
            circle:true
        },
    ]
}


export const TopicList =[
    {
        id:0,
        tag:"TECHNOLOGY"
    },
    {
        id:1,
        tag:"SALES"
    },
    {
        id:2,
        tag:"ACCOUNTANT"
    },
    {
        id:3,
        tag:"MUSIC"
    },
    {
        id:4,
        tag:"TECH"
    },
    {
        id:5,
        tag:"PROJECT"
    },
    {
        id:6,
        tag:"INVESTORS ARE GREEDY"
    },
    {
        id:7,
        tag:"NEW JOB"
    },
    {
        id:8,
        tag:"FOOTBALL"
    },
    {
        id:13,
        tag:"EDITORS"
    },
    {
        id:9,
        tag:"ACCOUNTANT"
    },
    {
        id:10,
        tag:"MUSIC"
    },
    {
        id:11,
        tag:"TECH"
    },
    {
        id:12,
        tag:"PROJECT"
    },
]


export const Herotext ="Never Pay anyone on or before getting job, all job posted here are free of charge, we hold no resposibility to any employmentscam. If any profile request for money, please report the profile immediately_"


export const JobList =[
    {
        name:"JUST HIRED GLOBAL LTD",
        jobTitle:"FrontEnd DEveloper",
        jobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae architecto illum aperiam sint, voluptatum eaque consequatur.",
        followers:500,
        isVerified:true,
        persons:[
            homeResource.Person1,
            homeResource.Person2,
            homeResource.Person3,
            homeResource.Person4,
            homeResource.Person3,
        ]
    },
    {
        name:"JUST HIRED GLOBAL LTD",
        jobTitle:"FrontEnd DEveloper",
        jobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae architecto illum aperiam sint, voluptatum eaque consequatur.",
        followers:500,
        isVerified:true,
        persons:[
            homeResource.Person1,
            homeResource.Person2,
            homeResource.Person3,
            homeResource.Person4,
            homeResource.Person3,
        ]
    },
    {
        name:"JUST HIRED GLOBAL LTD",
        jobTitle:"FrontEnd DEveloper",
        jobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae architecto illum aperiam sint, voluptatum eaque consequatur.",
        followers:500,
        isVerified:true,
        persons:[
            homeResource.Person1,
            homeResource.Person2,
            homeResource.Person3,
            homeResource.Person4,
            homeResource.Person3,
        ]
    },
    {
        name:"JUST HIRED GLOBAL LTD",
        jobTitle:"FrontEnd DEveloper",
        jobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae architecto illum aperiam sint, voluptatum eaque consequatur.",
        followers:500,
        isVerified:true,
        persons:[
            homeResource.Person1,
            homeResource.Person2,
            homeResource.Person3,
            homeResource.Person4,
            homeResource.Person3,
        ]
    },

]


export const PersonList=[
    homeResource.Person1,
    homeResource.Person2,
    homeResource.Person3,
    homeResource.Person4,
    homeResource.Person3,   
]

export const ProfileContents=[
    {
        text:"Shop",
        image:homeResource.Circles,
        link:"/home"
    },
    {
        text:"chat",
        image:homeResource.Chat,
        link:"/home"
    },
    {
        text:"Notification",
        image:homeResource.Notification,
        link:"/home"
    },
]


export const AnalyticsData =[
    {
        image:CompanyExporter.Group,
        text:"200 viewers",
        desc:"Amet eiusmod"
    },
    {
        image:CompanyExporter.Star,
        text:"100 Impressions",
        desc:"Amet eiusmod"
    },
    {
        image:CompanyExporter.Search,
        text:"700 Searchs",
        desc:"Amet eiusmod"
    },
]


export const AboutMeText ="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis in neque perspiciatis illum similique eos omnis, error iste qui debitis exercitationem! Ducimus in deleniti corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat veniam! adipisicing elit. Perferendis in neque perspiciatis illum similique eos omnis, error iste qui debitis exercitationem! Ducimus in deleniti corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat ven"




export const WorkingExperience=[
    {
        logo:CompanyExporter.Job1,
        title:"Senior FrontEnd DEveloper",
        working:true,
        roles:["Full Time","ByeTendance"],
        date:"Jan 21 - Present 1yrs 8month",
        description:"corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat veniam! adipisicing elit. Perferendis in neque perspiciatis illum similique eos omnis, error iste qui debitis exercitationem! Ducimus in deleniti corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat ven"
    },  
    {
        logo:CompanyExporter.Job2,
        title:"Junior Ux Designer",
        working:false,
        roles:["Full Time","ByeTendance","DropBox"],
        date:"August 2018 - November 2020",
        description:"corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat veniam! adipisicing elit. Perferendis in neque perspiciatis illum similique eos omnis, error iste qui debitis exercitationem! Ducimus in deleniti corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat ven"
    },   
    {
        logo:CompanyExporter.Job3,
        title:"Ux Designer Intern",
        working:false,
        roles:["Full Time","Brex","Shopify"],
        date:"April 2017 - October 2021",
        description:"corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat veniam! adipisicing elit. Perferendis in neque perspiciatis illum similique eos omnis, error iste qui debitis exercitationem! Ducimus in deleniti corrupti quo sequi, dolores nemo consequatur exercitationem pariatur, mollitia labore quam, non totam consectetur fugiat ven"
    },   
]


export const ProfileSkillSet =[
    {text:"Research",experience:"3 Years",Endorsement:2},
    {text:"Design Software",experience:"5 Years",Endorsement:2},
    {text:"User Experience",experience:"3 Years",Endorsement:false},
    {text:"User Inerface Design",experience:"5 Years",Endorsement:false},

]





