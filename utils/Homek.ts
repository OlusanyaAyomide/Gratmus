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