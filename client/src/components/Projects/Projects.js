import portfolio from "../../assets/projects/projectify (2).PNG";
import expense from "../../assets/projects/Expense_tracker.PNG";
import shopSphere from "../../assets/projects/shopsphere - Copy.PNG";

const projects = [
  {
    id: 1,

    title: "Projectify",

    year: "2025",

    image: portfolio,

    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],

    shortDescription:
      "A modern and responsive project management application for organizing tasks with an intuitive Kanban-style interface.",

    description:
      "Projectify is a clean and responsive project management application designed to help users organize their daily tasks efficiently. It provides a Kanban board where tasks can be managed through different stages, along with an attractive dashboard interface, responsive navigation and a user-friendly layout.",

    features: [
      "Responsive dashboard",
      "Kanban board layout",
      "Task status sections",
      "Project management interface",
      "Sidebar navigation",
      "Search bar",
      "Modern dark theme",
      "Clean and user-friendly UI",
    ],

    live: "https://zippy-florentine-febb3e.netlify.app/",

    github: "https://github.com/ShafaIslam04/Project_Manager",
  },

  {
    id: 2,

    title: "Expense Tracker",

    year: "2025",

    image: expense,

    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    shortDescription:
      "A responsive expense tracking application for managing daily income, expenses and overall balance.",

    description:
      "Expense Tracker is a simple financial management application that allows users to record their income and expenses. Users can organize transactions by category, monitor their current balance and view total income and total expenses through a clean and responsive interface.",

    features: [
      "Add income",
      "Add expense",
      "Category selection",
      "Date selection",
      "Balance summary",
      "Total income calculation",
      "Total expense calculation",
      "Responsive interface",
    ],

    live: "https://jade-sprinkles-1caa32.netlify.app/",

    github: "https://github.com/ShafaIslam04/Expense-Tracker",
  },

  {
    id: 3,

    title: "ShopSphere",

    year: "2025",

    image: shopSphere,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    shortDescription:
      "A responsive e-commerce website with product browsing, shopping cart and favourite management.",

    description:
      "ShopSphere is a responsive e-commerce front-end application developed using HTML, CSS and JavaScript. The website allows users to browse products, add items to the shopping cart, manage favourite products and navigate through a clean and attractive shopping interface.",

    features: [
      "Responsive homepage",
      "Product listing",
      "Shopping cart",
      "Favourite products",
      "Product navigation",
      "Modern landing page",
      "Clean user interface",
      "Mobile-friendly design",
    ],

    live: "https://shopspherenuxt.netlify.app/",

    github: "https://github.com/ShafaIslam04/ShopSphere",
  },
];

export default projects;