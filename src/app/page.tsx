import { baseURL } from "@/app/resources";
import HomePage from "@/components/HomePage";

export async function generateMetadata() {
  const title = "FitFlow - Achieve Your Best Self";
  const description = "Transform your body and life with expert fitness guidance";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return <HomePage />;
}
