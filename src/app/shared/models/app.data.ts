import { eRouteURL, eNodeType, eNodeCategory, MenuNode, FeatureCard, TopicHeading, eTopicHeading } from "./common.model";

export const headerData = [
  {
    order: 1,
    type: eNodeType.ROUTE,
    iconClass: "volunteer_activism",
    iconLabel: "donate",
    url: eRouteURL.DONATE,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 2,
    type: eNodeType.ROUTE,
    iconClass: "alarm",
    iconLabel: "prayers",
    url: eRouteURL.PRAYER,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 3,
    type: eNodeType.ROUTE,
    iconClass: "perm_phone_msg",
    iconLabel: "contact",
    url: eRouteURL.CONTACT,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 4,
    type: eNodeType.ROUTE,
    iconClass: "group",
    iconLabel: "admin",
    url: eRouteURL.ADMIN,
    category: eNodeCategory.NAV,
    visible: false,
  },
  {
    order: 5,
    type: eNodeType.EVENT,
    iconClass: "menu",
    iconLabel: "menu",
    category: eNodeCategory.MENU,
    visible: true,
  },
  {
    order: 5,
    type: eNodeType.ROUTE,
    iconClass: "mosque",
    iconLabel: "Display",
    url: eRouteURL.BASE,
    category: eNodeCategory.BRAND,
    visible: true,
  },
] as Array<MenuNode>;

export const headerMobileData = [
  {
    order: 1,
    type: eNodeType.ROUTE,
    iconClass: "mosque",
    iconLabel: "home",
    url: eRouteURL.HOME,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 2,
    type: eNodeType.ROUTE,
    iconClass: "volunteer_activism",
    iconLabel: "donate",
    url: eRouteURL.DONATE,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 3,
    type: eNodeType.ROUTE,
    iconClass: "alarm",
    iconLabel: "prayers",
    url: eRouteURL.PRAYER,
    category: eNodeCategory.NAV,
    visible: true,
  },
  {
    order: 4,
    type: eNodeType.EVENT,
    iconClass: "menu",
    iconLabel: "menu",
    category: eNodeCategory.MENU,
    visible: true,
  },
] as Array<MenuNode>;

export const topicList = [
  {
    type: eTopicHeading.WELCOME,
    title: "Welcome to the",
    subtitle: "Fraserview Muslim Community Services",
    content:
      "The Fraserview Musallah is not just a mosque for prayers rather it is a community center for all. The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a comprehensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad ???.",
  },
  {
    type: eTopicHeading.SUPPORT,
    title: "Help Us",
    subtitle: "We Need Your Support",
    content: "",
  },
  {
    type: eTopicHeading.SERVICES,
    title: "Our Services",
    subtitle: "Serving Community",
    content: "",
  },
  {
    type: eTopicHeading.CONTACT,
    title: "Contact Us",
    subtitle: "Get in Touch",
    content: "If you have any query, comment, suggestion or complaint, or would like to enroll for volunteering, please use the following information or submit the form to contact us.",
  },
  {
    type: eTopicHeading.VOLUNTEER,
    title: "Wish to Volunteer",
    subtitle: "Write to Us",
    content: "",
  },
  {
    type: eTopicHeading.SUGGESTION,
    title: "Your suggestions are welcome...",
    subtitle: "Reach out to Us",
    content:
      "If you have any query, comment, suggestion or complaint, or would like to enroll for volunteering, please use the following information or submit the form to contact us.",
  },
  {
    type: eTopicHeading.DONATION,
    title: "Make a Donation",
    subtitle: "We need your Support",
    content: "",
  },
] as Array<TopicHeading>;


export const cardData = [
  {
    order: 1,
    type: eTopicHeading.SUPPORT,
    iconClass: "volunteer_activism",
    iconLabel: "donate",
    url: eRouteURL.DONATE,
    header:'Donate now',
    content:'Please donate generously as this ensures that the mosque is maintained properly and the Muslim community benefits from these facilities.',
    visible: true,
  },
  {
    order: 2,
    type: eTopicHeading.SUPPORT,
    iconClass: "edit_square",
    iconLabel: "register",
    url: eRouteURL.CONTACT,
    header:'Volunteer with Us',
    content:'We are short of volunteers for Jumuah preparations. We need volunteers to help us make the arrangements.',
    visible: true,
  },
  {
    order: 1,
    type: eTopicHeading.SERVICES,
    iconHeaderClass: "volunteer_activism",
    header:'Prayer/Salat',
    content:'Our Center is now open for prayers five times.',
    visible: true,
  },
  {
    order: 2,
    type: eTopicHeading.SERVICES,
    iconHeaderClass: "volunteer_activism",
    header:'Qur\'an Lessons',
    content:'We host a wide range of educational services, for children. Currently we offer only online classes for children and adults through Zoom calls.',
    visible: true,
  },
  {
    order: 3,
    type: eTopicHeading.SERVICES,
    iconClass: "perm_phone_msg",
    iconLabel: "contact",
    url: eRouteURL.CONTACT,
    iconHeaderClass: "volunteer_activism",
    header:'Marriages/ Funeral',
    content:'More details will be available soon. In case of an immediate case, contact us through Contact us page.',
    visible: true,
  },
  {
    order: 4,
    type: eTopicHeading.SERVICES,
    iconHeaderClass: "volunteer_activism",
    header:'Food Distribution',
    content:'Friday food distribution services have resumed. You can buy food after Jumuah prayer on first come first serve basis.',
    visible: true,
  },  
] as Array<FeatureCard>;