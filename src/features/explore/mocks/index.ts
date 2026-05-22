import { translation } from "../translate";
export const titles = [
  {
    headLine: translation.firstTitle,
    ["translation.seeAll"]: true,

  },
  {
    headLine: translation.secTitle,
    ["translation.seeAll"]: false,

  },
  {
    headLine: translation.thirdTitle,
    ["translation.seeAll"]: false,

  },
  {
    headLine: translation.fourthTitle,
    ["translation.seeAll"]: false,

  },
];

export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmBqS478UneeDz7XcLwof2surWRToVoFnS5QkFHliO0r1EocbcNUW2FR9i5AWEw-h9ctkjgfZhtcrnH7CNs3BMaaaRNioDvNnArWKnezyOLZMqDVg5R5I9idOMs83y9UWzCbc-jgvbBfMiVpPIYKs53beK2Ift86d5jpeuv5_EMLIpsS30ajTZxh53YVcrAFaE0lZB0I-NS8F1-BmUspw3gG3eCiUuwFbtjtqoNTtKAsJVkaC4qtpHNwN5_VVpeXjzQpQyYXQmpFw",
    rate: 4.8,
    writer: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAaVRM0ov6ovsYF16XASGHffexN0iyG6m1T_TyReRrAB5Fe5eesalHYMud3ub0FEVYkQ41uRqIGdRAmqo0Bvj_R7RB6TEZiFzUABGQQuMJ8sd3g8KVzbki4kWaMY3t-iCDwwEi3czDH2awZLJOPoW7uknwMPB3yI818yXYrOZ_nL9eH6YuUWsPYCbMGJuvftNtoiYM7WF3hCEEouJf99_jdF8kXeWLgRlutXW02ZO9qdlGwmISj0YQ9GBM8UyB2sJbfDpZUPMxrCzs",
    rate: 4.9,
    writer: "Frank Herbert",
  },
  {
    id: 3,
    title: "Tomorrow, and Tomorrow",
    image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDLRzTi6XDKcMUJ-sHmju1DqntQyijhE2PTiuEEnQhokjNpVGQCwJnm7Ua75r55jcA5JinchLb3FCodBTM8q2nLtY00Bye47MHX9gEkbLoLRT3ZWAGD8hOkS-nCDikVOQHh4qzRjb5hMmBfzrUIQw_scHiDA1_keYaEvxrk__V6s0NwvW8Sq360BICPlp86SzmxNddOSGskE4ZBR6IBe9AucrcpoPIJTz1iAJl-UUyOCSsrLWWbQfD2-A-nBkXG3u2SbTYr4mlF7A4",
    rate: 4.7,
    writer: "Gabrielle Zevin",
  },

];



export const readChallenges = [
  {
    icon: "material-symbols-outlined text-warm-gold text-3xl",
    iconName: "auto_stories",
    pepjoined: "12k",
    year: 2024,
    title: "Classic Marathon",
    description: `Read 12 classic novels by the end of the year.`,
    booksRead:4,
    booksGoal:12,
    styles: {
      bgCard: "bg-[#2b1f1d]",       
      badgeBg: "bg-[#413533]",      
      iconColor: "text-[#d4a373]",   
      btnBg: "bg-[#d4a373]",     
      btnText: "text-[#2b1f1d]"     
    }
  },
  {
    icon: "material-symbols-outlined text-tertiary-fixed text-3xl",
    iconName: "psychology",
    pepjoined: "8k",
    title: "Sci-Fi Explorers",
    description: `Dive into 5 interstellar masterpieces this spring.`,
    booksRead:0,
    booksGoal:5,
    styles: {
      bgCard: "bg-[#102a27]",       
      badgeBg: "bg-[#213d3a]",      
      iconColor: "text-[#a3e2d7]",   
      btnBg: "bg-[#cbece6]",        
      btnText: "text-[#102a27]"  
    }
  }
];

export const  QuotePostsData = [
  {
    id: 'Quote-1',
    user: {
      name: 'Alex Ryan',
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCalmgAWFTJ3lR_vFYmIee1jEi8Iqn-Q4C7D1HfHISxPsNa74e8u5qNyiCp7oLDj3zDdO2f0SNnVHthiHFsl1FlUZK5Dp7WCjWJhGpp_LzrxyT32yMtSGrKOjahtcW3ktJs5r1dMXm0ueeJfsFMW_WOIAaIvb8DKKTp2C0IMI7eQhwFzKm0rwWMUQwPpoDETAZ4FdS9p_RdNtLiuFydD4tjP0iwOA4axYs3l4NW8HP3Y1OvuHJTzTVAXcowqDdgQY8RZByTZkl-asY",
      activity: `Shared from 'The Nightingale'`,
    },
    body: `"If I have learned anything in this long life of mine, it is this: In love we find out who we want to be; in war we find out who we are."`,
    likes: 240,
    comments: 128,
  },
  {
    id: 'Quote-2',
    user: {
      name: 'Marcus Thorne',
      avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWChbiz42CuCq2zLlXTRcRCXg-6Z9IJUf-7iEtHVKNrxD_aCOOFuAAzHp9WqaIGLa27uzdu1BVXIWRlTQMdGhVZBc-C2_qlE4RzjPByoilLGeJyendsLMstXqGyssFmuqwn3_fDyamB_CdgGwtkDT3voFGsFsLJZ4f1MwJdRESbloP6qsisY2BwL1oS5AVbwt9xcr5RGtrHy4H4hoP9Aasg1LGX80XEQQikcVn7hP8BAV-QzHvU9HKjCpSSmOcRAdQXMmIr4H4v80",
      activity: `Shared from '1984'`,
    },
    body: `"Perhaps one did not want to be loved so much as to be understood."`,
    likes: 400,
    comments: 89,
  },
];

export const categories = [
  {
    icon: "material-symbols-outlined text-secondary",
    iconName: "rocket_launch",
    catName: "Sci-Fi",
    styles:{
      iconBg: "bg-orange-50",
      iconText: "text-orange-600",
      hoverBorder: "hover:border-orange-400",
      hoverText: "group-hover:text-orange-600"
    },
  },
  {
    icon: "material-symbols-outlined text-error",
    iconName: "favorite",
    catName: "Romance",
    styles:{
      iconBg: "bg-rose-50",
      iconText: "text-rose-600",
      hoverText: "group-hover:text-rose-600"
    },
  },
  {
    icon: "material-symbols-outlined text-success-green",
    iconName: "history_edu",
    catName: "Classic",
    styles:{
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      hoverText: "group-hover:text-emerald-600"
    },
  },
  {
  icon: "material-symbols-outlined text-on-tertiary-fixed-variant",
  iconName: "mystery",
  catName: "Mystery",
  styles:{
    iconBg: "bg-cyan-50",
    iconText: "text-cyan-600",
    hoverText: "group-hover:text-cyan-600"
  },
  },
  {
    icon: "material-symbols-outlined text-on-primary-fixed-variant",
    iconName: "menu_book",
    catName: "Non-Fiction",
    styles:{
      iconBg: "bg-amber-50",
      iconText: "text-amber-700",
      hoverText: "group-hover:text-amber-700"
    },
  },


  {
    icon: "material-symbols-outlined text-warm-gold",
    iconName: "castle",
    catName: "Fantasy",
      styles:{
        iconBg: "bg-orange-50/60", 
        iconText: "text-amber-800",
        hoverText: "group-hover:text-amber-800"
    },
  }
];







