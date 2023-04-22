import { landingExporter } from "@/public/landing/image/landingExporter";

export const toggleCenter = () => {
    return {
      initial: {
        height: "4px",
        x: 0,
        opacity: 1,
      },
      animate: {
        x: -50,
        opacity: 0,
        height: "0px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        x: 0,
        opacity: 1,
        height: "4px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };
  export const toggleAnimation = (number:number) => {
    return {
      initial: {
        rotate: 0,
        height: "4px",
        y: 0,
      },
      animate: {
        rotate: number === 1 ? "45deg" : "-45deg",
        y: number === 1 ? 10 : -10,
        height: "3px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        rotate: 0,
        height: "4px",
        y: 0,
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };


export const landingContAnimation={
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      staggerChildren:0.2
    }
  }
}
export const landingAnimation={
  initial:{
    opacity:0,
    x:60,
    y:40,
},
animate:{
    opacity:1,
    x:0,
    y:0,
    transition:{
        duration:0.25
    }
}

}

export const HeroContainer={
  initial:{
    rotate:0,
  },
  animate:{
    rotate:360,
    transition:{
      duration:60,
      repeat:Infinity,
      ease:"linear"
    }
  }
}
export const HeroImgContainer=(isimage:boolean)=>{return{
  initial:{
    rotate:0,
    opacity:isimage?0:1,
  },
  animate:{
    rotate:-360,
    opacity:isimage?[0,1,1,1,1,1,1,1,1,1,1,0]:1,
    transition:{
      duration:60,
      repeat:Infinity,
      ease:"linear"
    }
  }
}
}

export const chatAnimation={
  initial:{
    rotate:0,
  },
  animate:{
    rotate:-360,
    transition:{
      duration:60,
      repeat:Infinity,
      ease:"linear"
    }
  }
}

export const HeroArray =[
  landingExporter.Avatar1,landingExporter.Avatar2,
  landingExporter.Avatar3,landingExporter.Avatar4,
  landingExporter.Avatar5,landingExporter.Avatar6,
]