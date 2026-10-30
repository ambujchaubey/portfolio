import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ambuj Kumar Chaubey | Portfolio",
    short_name: "Ambuj Portfolio",
    description: "Associate Data Engineer | ML Enthusiast | Cloud Practitioner",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
