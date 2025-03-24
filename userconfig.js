// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Ulm",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://chatgpt.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "tower",
              url: "http://192.168.0.20/Main",
              icon: "server",
              icon_color: palette.green,
            },
            {
              name: "jellyseer",
              url: "http://192.168.0.20:5055",
              icon: "eye",
              icon_color: palette.peach,
            },
            {
              name: "radarr",
              url: "http://192.168.0.20:7878",
              icon: "radar",
              icon_color: palette.red,
            },
            {
              name: "sonarr",
              url: "http://192.168.0.20:8989",
              icon: "radar-2",
              icon_color: palette.blue,
            },
            {
              name: "sabnzbs",
              url: "http://192.168.0.20:8080",
              icon: "arrow-down",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "entertainment",
          links: [
            {
              name: "mangapark",
              url: "https://mangapark.net/",
              icon: "book",
              icon_color: palette.green,
            },
            {
              name: "jellyfin",
              url: "http://192.168.0.20:8096/web/",
              icon: "movie",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "LOL",
          links: [
            {
              name: "loldle",
              url: "https://loldle.net/",
              icon: "dice",
              icon_color: palette.green,
            },
            {
              name: "TFT Academy",
              url: "https://tftacademy.com/tierlist/comps",
              icon: "crown",
              icon_color: palette.peach,
            },
            {
              name: "mobalytics",
              url: "https://mobalytics.gg/lol",
              icon: "shield",
              icon_color: palette.red,
            },
            {
              name: "Sologesang",
              url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXGfKXwmtXV3JXkkvFW9kcvXtWdEpXq-5uohygcek-qM19CvuWTZYf5VwrgXqwMBVLhVomP0yp_jEZ/pubhtml",
              icon: "table",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
