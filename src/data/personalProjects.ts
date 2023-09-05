interface IWork {
  src: string;
  alt: string;
  title: string;
  name: string;
  mdName: string;
}

export const projects: IWork[] = [
  {
    src: "https://i.imgur.com/0TjD3yp.png",
    alt: "Home Server",
    title:
      "Design and Develop Home Server using Docker, Nginx, Cloudflare Tunnel",
    name: "Home Server",
    mdName: "home-server",
  },
  {
    src: "https://i.imgur.com/44XORD4.png",
    alt: "WebChat",
    title: "Real-Time Chat using REST API, WebSocket, PostgresSQL",
    name: "Web Chat",
    mdName: "webchat",
  },
  {
    src: "https://i.imgur.com/7MMHvgY.png",
    alt: "Portfolio",
    title: "Responsive Portfolio Website using Next.js",
    name: "Portfolio Website",
    mdName: "portfolio-website",
  },
  {
    src: "https://i.imgur.com/sZRy7XX.png",
    alt: "iOSCalculator",
    title: "Responsive iOS Calculator using React.js",
    name: "iOS Calculator",
    mdName: "ios-calculator",
  },
];
