import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

// export const revalidate = 0;

// export const dynamicParams = false;
// only generatestaticparams get to show when i use dynamic params

interface PageProps {
  params: { topic: string };
  // searchParams: { [key: string]: string | undefined}
}
export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + " - NestJS 13.4 Image Gallery",
  };
}

export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

export default async function page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <Alert>
        This page uses <strong> generateStaticParams</strong> to render and
        cache pages at build time, even thougj the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fethced and
        rendered on first acess and then cached for subsequent requests (this
        can be disabled).
      </Alert>

      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
