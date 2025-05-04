import { Column, Flex, Heading, Text, RevealFx } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = "FitLife Blog Articles here ";
  const description = "Explore our collection of fitness, nutrition, and wellness articles to help you achieve your health goals";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
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

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 py-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              headline: "FitLife Blog",
              description: "Explore our collection of fitness, nutrition, and wellness articles",
              url: `https://${baseURL}/blog`,
              image: `${baseURL}/og?title=${encodeURIComponent("FitLife Blog")}`,
              author: {
                "@type": "Person",
                name: person.name,
                image: {
                  "@type": "ImageObject",
                  url: `${baseURL}${person.avatar}`,
                },
              },
            }),
          }}
        />
        <Flex direction="column" gap="32" marginBottom="64">
          <RevealFx>
            <Heading as="h1" variant="display-strong-l">
              FitLife Blog Articles
            </Heading>
          </RevealFx>
          
          <RevealFx>
            <Text variant="body-strong-l" onBackground="neutral-weak">
              Explore our collection of expert-written fitness, nutrition, and wellness content
            </Text>
          </RevealFx>
        </Flex>

        <Flex direction="column" gap="40">
          <RevealFx>
            <Heading as="h2" variant="heading-strong-l">
              Strength Training
            </Heading>
          </RevealFx>
          <Posts range={[1, 1]} thumbnail={true} />

          <RevealFx>
            <Heading as="h2" variant="heading-strong-l">
              Nutrition & Diet
            </Heading>
          </RevealFx>
          <Posts range={[2, 2]} thumbnail={true} />
          
          <RevealFx>
            <Heading as="h2" variant="heading-strong-l">
              Cardio & Endurance
            </Heading>
          </RevealFx>
          <Posts range={[3, 3]} thumbnail={true} />
          
          <RevealFx>
            <Heading as="h2" variant="heading-strong-l">
              More Articles
            </Heading>
          </RevealFx>
          <Posts range={[4]} columns="3" thumbnail={true} />
        </Flex>

        <Flex direction="column" gap="24" marginTop="80" marginBottom="40">
          <RevealFx>
            <Heading as="h2" variant="heading-strong-l">
              Subscribe to Our Fitness Newsletter
            </Heading>
          </RevealFx>
          <Mailchimp newsletter={newsletter} />
        </Flex>
      </main>
    </div>
  );
}
