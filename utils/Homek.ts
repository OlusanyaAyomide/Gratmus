import { homeResource } from "@/public/home/homeExporter";

export const NavLinks=[
    {
        name:"Home",
        image:homeResource.Home,
        link:"/home"
    },
    {
        name:"Jobs",
        image:homeResource.Job,
        link:"/jobs"
    },
    {  
        name:"Groups",
        image:homeResource.Users,
        link:"/avatar"
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
        verified:true,
        profile:homeResource.Avatar1,
        type:"organization",
        postedAt:"Posted 3 min ago",
        nickName:"Epic Coder",
        following:false, 
        jobText:"Senior Word press Developer",
        openforJob:false,
        postText:"Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success a Never give up on a dream becaue of time it will take to accomplish it,The time will pass,Just keep believe and keep working for the success at end",
        tags:["Motivation","Trends","JavaScript","Employment"],
        hasImage:true,
        postImage:homeResource.Post1,
        views:150,
        comments:15,
        likedBy:"Jessica Williams and 14 others"
    }
]