import { useState } from "react";
import Koorii from "../assets/img/p-img/꾸리 꾸리.jpg";
import banner from "../assets/img/p-img/Untitled.png";
import marketplaceScreenshot from "../assets/img/p-img/Screenshot 2026-10-17 233636.png";
import melodystorebanner from "../assets/img/p-img/Melody.png";

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Cloud Fashion",
    description:
      "A fashion e-commerce website featuring categorized product browsing, interactive product cards, shopping cart management, user authentication interfaces, and payment/order summaries. Built with HTML, CSS, and JavaScript to create an engaging online shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    visual: "marketplace",
    href: "https://cloudwear-project.vercel.app/index.html",
    target: "_blank",
  },
  {
    number: "02",
    category: "E-Commerce Website",
    title: "MelodyStore",
    description:
      "A modern e-commerce platform for music enthusiasts to discover and purchase vinyl records and merchandise. The website features a clean, responsive design, intuitive navigation, and seamless shopping experience, built with React and Vite.",
    technologies: [
      "HTML",
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "PostgreSQL",
    ],
    visual: "melodystore",
    href: "https://melodystore-frontend.vercel.app/",
    target: "_blank",
  },
  {
    number: "03",
    category: "UI/UX DESIGN / FIGMA",
    title: "Flux Fashion Editorial",
    description:
      "A visual design and e-commerce layout concept for a streetwear brand. Created in Figma, this composition demonstrates layout hierarchy, typography pairing, and modern color theory to create an engaging shopping experience.",
    technologies: ["Figma", "UI Design", "Typography", "Adopbe Photoshop"],
    visual: "poster",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    skills: ["JavaScript", "React", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Developing robust server-side logic.",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    description: "From first commit to production.",
    skills: ["Vite", "Git & GitHub", "Figma", "Vercel"],
  },
  {
    title: "Currently learning",
    description: "Always curious, always improving.",
    skills: [
      "TypeScript",
      "PHP",
      "SQL",
      "Angular",
      "Cloud Computing",
      "Linux nginx",
    ],
  },
];

const techRows = [
  [
    { name: "Figma", mark: "figma" },
    { name: "React", mark: "react" },
    { name: "C++", mark: "cplusplus" },
    { name: "Node.js", mark: "node" },
    { name: "JavaScript", mark: "javascript" },
    { name: "CSS", mark: "css" },
    { name: "PostgreSQL", mark: "postgresql" },
    { name: "Python", mark: "python" },
  ],
  [
    { name: "Git", mark: "git" },
    { name: "HTML", mark: "html" },
    { name: "Tailwind CSS", mark: "tailwind" },
    { name: "Vite", mark: "vite" },
    { name: "TypeScript", mark: "typescript" },
    { name: "Adobe Photoshop", mark: "photoshop" },
    { name: "GitHub", mark: "github" },
    { name: "Vercel", mark: "vercel" },
  ],
];

function TechnologyMark({ mark }) {
  if (mark === "figma") {
    return (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32">
        <path d="M16 16a6 6 0 1 1 6-6h-6v6Z" fill="#f24e1e" />
        <path d="M10 4h6v12h-6a6 6 0 0 1 0-12Z" fill="#ff7262" />
        <path d="M16 4h6a6 6 0 1 1-6 6V4Z" fill="#a259ff" />
        <path d="M10 16h6v6a6 6 0 1 1-6-6Z" fill="#0acf83" />
        <circle cx="22" cy="16" r="6" fill="#1abcfe" />
      </svg>
    );
  }

  if (mark === "react") {
    return (
      <svg
        aria-hidden="true"
        className="h-9 w-9 text-[#61dafb]"
        viewBox="0 0 40 40"
        fill="none"
      >
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          transform="rotate(60 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          transform="rotate(120 20 20)"
        />
        <circle cx="20" cy="20" r="2.6" fill="currentColor" />
      </svg>
    );
  }

  if (mark === "css") {
    return (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24">
        <path
          fill="#1572b6"
          d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"
        />
      </svg>
    );
  }

  const marks = {
    cplusplus: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#659ad2]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 0 1 6.156 3.553l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.78A3.56 3.56 0 0 0 8.444 12 3.56 3.56 0 0 0 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.078 1.78A7.135 7.135 0 0 1 12 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
      </svg>
    ),
    node: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#5fa04e]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.998 24a1.85 1.85 0 0 1-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604a.2.2 0 0 1 .218.017l2.256 1.339a.28.28 0 0 0 .272 0l8.795-5.076a.28.28 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.28.28 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.241v10.15a.28.28 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.85 1.85 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082a1.85 1.85 0 0 1 1.848 0l8.794 5.082a1.85 1.85 0 0 1 .924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078a1.85 1.85 0 0 1-.925.247Zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141a.25.25 0 0 0 .253-.277c-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742a.25.25 0 0 0-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 2.508 0 4.106-1.097 4.106-3.014Z" />
      </svg>
    ),
    python: (
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill="#3776ab"
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"
        />
        <path
          fill="#ffd343"
          d="m20.98 6.11.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01z"
        />
        <circle cx="7.95" cy="4.14" r="1.02" fill="#fff" />
        <circle cx="16.98" cy="19.86" r="1.02" fill="#fff" />
      </svg>
    ),
    javascript: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#f7df1e]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    postgresql: (
      <svg
        aria-hidden="true"
        className="h-9 w-9 text-[#699eca]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7012 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0295.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
      </svg>
    ),
    html: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#e34f26]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
    tailwind: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#38bdf8]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    vite: (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24">
        <path
          fill="#646cff"
          d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"
        />
      </svg>
    ),
    typescript: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#3178c6]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    photoshop: (
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32">
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="4"
          fill="#001e36"
          stroke="#31a8ff"
          strokeWidth="1.5"
        />
        <text
          x="5"
          y="22"
          fill="#31a8ff"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="600"
          letterSpacing="-1"
        >
          Ps
        </text>
      </svg>
    ),
    git: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-[#f05032]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.9 1.9 0 0 1 2.327 2.341l2.658 2.66a1.9 1.9 0 1 1-1.104 1.043L12.86 8.955v6.525a1.9 1.9 0 1 1-1.51-.018V8.835a1.9 1.9 0 0 1-1.03-2.41L7.636 3.7.45 10.881a1.55 1.55 0 0 0 0 2.189l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.187Z" />
      </svg>
    ),
    github: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    vercel: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="m12 1.608 12 20.784H0z" />
      </svg>
    ),
  };

  return marks[mark];
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GithubIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.16 2.02 3.43 1.43.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06v3.19c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ProjectPreview({ type }) {
  if (type === "marketplace") {
    return (
      <div className="preview-grid h-full rounded-2xl">
        <div className="flex items-center justify-between">
          {/* <span className="font-display text-xs font-semibold tracking-wide text-white ">
            nexus
            
          </span> */}
          {/* <span className="h-5 w-12 rounded-full bg-white/10" /> */}
        </div>
        <img
          src={marketplaceScreenshot}
          alt="Cloud Fashion project screenshot"
          className="rounded-2xl"
        />
      </div>
    );
  }
  if (type === "melodystore") {
    return (
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#1c1b2c]">
        <img
          src={melodystorebanner}
          alt="MelodyStore project banner"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    );
  }

  if (type === "poster") {
    return (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#e5e3bd]">
        <img
          src={banner}
          alt="Flux Fashion editorial poster"
          className="h-full w-full rounded-2xl object-contain"
        />
      </div>
    );
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
      >
        <div className="ambient-glow absolute -left-48 top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.08] blur-[120px]" />
        <div className="ambient-glow absolute -right-48 top-[34rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.08] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            className="font-display text-xl font-bold tracking-tight text-white"
            href="#home"
            onClick={closeMenu}
          >
            Raphou-Phal<span className="text-accent">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </div>
          <a
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/60 hover:text-accent md:inline-flex"
            href="/contact.html"
          >
            Let&apos;s talk <ArrowIcon />
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
        {menuOpen && (
          <div className="relative z-10 border-t border-white/[0.07] bg-ink px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {[
                ["About", "#about"],
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "/contact.html"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/[0.05]"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24"
          id="home"
        >
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#7cf7c6]" />
              COMPUTER SCIENCE · Full-Stack Developer
            </div>
            <h1
              className="max-w-2xl font-display text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]"
              id="hero-title"
            >
              Building ideas
              <span className="mt-2 block text-gradient">
                Engineering experiences.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I'm Raphou, an aspiring Full Stack Developer passionate about
              building modern, responsive, and user-friendly web applications. I
              combine creative frontend development with practical backend
              solutions to transform ideas into functional digital experiences.
              I'm always eager to learn new technologies, solve challenges, and
              create meaningful solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.04]"
                href="https://github.com/raphou2025"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon className="h-[18px] w-[18px]" /> GitHub
              </a>
            </div>
            <a
              className="mt-10 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-300"
              href="#about"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-accent">
                ↓
              </span>
              A bit more about me
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[29rem] animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[0.06] rotate-3" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-3 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/4.45] overflow-hidden rounded-[1.5rem] bg-[#19231f]">
                <img
                  alt="Portrait of Raphou Phal"
                  className="h-full w-full object-cover object-center"
                  src={Koorii}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-xl font-semibold text-white">
                      Raphou Phal
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Full-stack developer
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs text-white backdrop-blur">
                    Phnom Penh, Cambodia
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -left-5 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111720]/90 p-3.5 shadow-xl backdrop-blur sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 font-display text-sm font-bold text-accent">
                &lt;/&gt;
              </span>
              <div>
                <p className="text-xs font-semibold text-white">
                  Building for the web
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  One thoughtful detail at a time
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="work-title"
          className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
          id="work"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="section-eyebrow">
                  A FEW THINGS I&apos;VE BEEN EXPLORING
                </p>
                <h2 className="section-title" id="work-title">
                  Selected work<span className="text-accent">.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-500">
                A journey of building ideas, creating solutions, and growing
                through code.
                <p>More projects are on the way.</p>
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const CardTag = project.href ? "a" : "article";

                return (
                  <CardTag
                    className="project-card group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-3 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.04]"
                    href={project.href}
                    key={project.number}
                    rel={project.target ? "noreferrer" : undefined}
                    target={project.target}
                  >
                    <div className="h-48 overflow-hidden rounded-2xl p-2">
                      <ProjectPreview type={project.visual} />
                    </div>
                    <div className="px-4 pb-5 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">
                          {project.category}
                        </span>
                        <span className="font-display text-xs text-slate-600">
                          {project.number}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[11px] text-slate-400"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardTag>
                );
              })}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="collaboration-title"
          className="scroll-mt-24 relative overflow-hidden border-y border-white/[0.06] bg-[#10091a] px-5 py-16 sm:px-8 lg:py-20"
          id="skills"
        >
          <div className="relative mx-auto max-w-5xl">
            <h2
              className="mx-auto max-w-4xl text-center font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.15rem]"
              id="collaboration-title"
            >
              I&apos;m currently looking to join a{" "}
              <span className="text-[#a855f7]">cross-functional</span> team
            </h2>
            <p className="mt-2 text-center font-display text-base text-slate-200 sm:text-xl">
              that values improving people&apos;s lives through accessible
              design
            </p>

            <div className="relative mx-auto mt-10 max-w-[700px] pb-14">
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[134px] hidden h-[90px] w-full sm:block"
                viewBox="0 0 700 90"
                preserveAspectRatio="none"
              >
                {[70, 150, 230, 310, 390, 470, 550, 630].map((x, index) => {
                  const destinations = [110, 178, 246, 314, 382, 450, 518, 586];
                  return (
                    <line
                      key={x}
                      x1={x}
                      y1="0"
                      x2={destinations[index]}
                      y2="90"
                      stroke="#6b21a8"
                      strokeOpacity="0.55"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>

              {techRows.map((row, rowIndex) => (
                <div
                  className={`relative z-10 mx-auto grid w-fit grid-cols-4 justify-items-center gap-3 sm:grid-cols-8 sm:gap-4 ${rowIndex === 1 ? "mt-5" : ""}`}
                  key={rowIndex}
                >
                  {row.map((technology) => (
                    <div
                      aria-label={technology.name}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#21172d] transition duration-200 hover:-translate-y-1 hover:bg-[#30203f]"
                      key={technology.name}
                      role="img"
                      title={technology.name}
                    >
                      <TechnologyMark mark={technology.mark} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 lg:py-28"
          id="about"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">A LITTLE ABOUT ME</p>
              <h2 className="section-title" id="about-title">
                Curious by nature<span className="text-accent">.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-400">
                I'm a Computer Science student passionate about turning ideas
                into practical digital experiences. I enjoy exploring both
                frontend and backend development, learning new technologies, and
                building solutions through hands-on projects.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-400">
                My goal is simple: to build digital experiences that are useful,
                accessible, and meaningful.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
                <span className="h-px w-8 bg-accent/60" />
                Based in Phnom Penh, Cambodia
              </div>
            </div>
            <div className="grid scroll-mt-24 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {skillGroups.map((group, index) => (
                <div
                  className="rounded-2xl border border-white/[0.08] bg-ink/50 p-5 sm:p-6"
                  key={group.title}
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {group.skills.map((skill) => (
                        <span className="skill-chip" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Contact" className="px-5 pb-15 sm:px-8 lg:pb-15">
          <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              Have a project, opportunity, or idea in mind? Let's connect. I'd
              be happy to hear from you.
            </p>
            <a className="button-primary shrink-0" href="/contact.html">
              Get in touch <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.07] bg-panel/30 px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-20 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-16">
          <div>
            <a
              className="font-display text-xl font-bold tracking-tight text-white transition hover:text-accent"
              href="#home"
            >
              Raphou-Phal<span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Aspiring Full Stack Developer, building practical solutions and
              meaningful web experiences through code.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="ml-20">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a className="transition hover:text-accent" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="transition hover:text-accent" href="#work">
                  Selected work
                </a>
              </li>
              <li>
                <a className="transition hover:text-accent" href="#skills">
                  Skills
                </a>
              </li>
            </ul>
          </nav>

          <div className="ml-50.5 w-full">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  className="transition hover:text-accent"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                >
                  Email <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-accent"
                  href="https://github.com/raphou2025"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-accent"
                  href="https://www.linkedin.com/in/raphou-phal-0b1697428/?isSelfProfile=true"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Raphou Phal. All rights reserved.
            </p>
            <p>Designed with care · Crafted with code</p>
            <a className="transition hover:text-accent" href="#home">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
