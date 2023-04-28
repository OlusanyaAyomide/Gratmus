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