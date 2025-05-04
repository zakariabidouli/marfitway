import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
  RevealFx,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    // {
    //   title: about.work.title,
    //   display: about.work.display,
    //   items: about.work.experiences.map((experience) => experience.company),
    // },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.sections.map((section) => section.title),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-full mx-auto px-4 py-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              description: about.intro.description,
              url: `https://${baseURL}/about`,
              image: `${baseURL}/images/${person.avatar}`,
              sameAs: social
                .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
                .map((item) => item.link),
              worksFor: {
                "@type": "Organization",
                name: about.work.experiences[0].company || "",
              },
            }),
          }}
        />
        {about.tableOfContent.display && (
          <Column
            left="0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            position="fixed"
            paddingLeft="24"
            gap="32"
            hide="s"
          >
            <TableOfContents structure={structure} about={about} />
          </Column>
        )}
        <Flex fillWidth mobileDirection="column" horizontal="center">
          {about.avatar.display && (
            <Column
              className={styles.avatar}
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <Avatar src="/images/about.png" size="xl" />
              <Flex gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Flex>
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Column>
          )}
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Flex
                  fitWidth
                  border="brand-alpha-medium"
                  className={styles.blockAlign}
                  style={{
                    backdropFilter: "blur(var(--static-space-1))",
                  }}
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                >
                  <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                  <Flex paddingX="8" style={{ fontSize: '1.125rem' }}>Book a coaching session</Flex>
                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Flex>
              )}
              <Heading 
                className={styles.textAlign} 
                variant="display-strong-xl"
                style={{
                  fontSize: '4.5rem',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  color: 'white'
                }}
              >
                {person.name}
              </Heading>
              {social.length > 0 && (
                <Flex gap="16">
                  {social.map((social) => (
                    <IconButton
                      key={social.name}
                      href={social.link}
                      icon={social.icon}
                      tooltip={social.name}
                      size="m"
                      variant="ghost"
                    />
                  ))}
                </Flex>
              )}
            </Column>

            {about.intro.display && (
              <Column id={about.intro.title} paddingY="l" marginY="l">
                <Heading variant="heading-strong-l" marginBottom="m" style={{ fontSize: '2rem', color: 'white' }}>
                  {about.intro.title}
                </Heading>
                <Text variant="body-default-l" style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'gray-400' }}>
                  {about.intro.description}
                </Text>
              </Column>
            )}

            {/* {about.work.display &&
              about.work.experiences.map((experience, index) => (
                <Column
                  id={experience.company}
                  key={index}
                  paddingY="l"
                  marginY="l"
                  gap="24"
                >
                  <Heading variant="heading-strong-l" marginBottom="24">
                    {index === 0 && about.work.title}
                  </Heading>
                  <Flex fillWidth wrap mobileDirection="column" gap="24">
                    <Column flex={3} minWidth={320} gap="12">
                      <Heading variant="heading-strong-m">{experience.company}</Heading>
                      <Text
                        variant="label-default-s"
                        marginBottom="8"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                      <Text variant="body-strong-m" marginBottom="12">
                        {experience.role}
                      </Text>
                      <Flex direction="column" gap="8">
                        {experience.achievements.map((achievement, i) => (
                          <Text key={i} variant="body-default-m">
                            {achievement}
                          </Text>
                        ))}
                      </Flex>
                    </Column>
                    <Column flex={5} minWidth={320} gap="16">
                      {experience.images.map((image, i) => (
                        <SmartImage
                          key={i}
                          src={image.src}
                          alt={image.alt}
                          radius="s"
                          aspectRatio={`${image.width} / ${image.height}`}
                        />
                      ))}
                    </Column>
                  </Flex>
                </Column>
              ))} */}

            {about.studies.display && (
              <Column id={about.studies.title} paddingY="l" marginY="l" gap="24">
                <Heading variant="heading-strong-l" marginBottom="m" style={{ fontSize: '2rem', color: 'white' }}>
                  {about.studies.title}
                </Heading>
                <Column gap="24">
                  {about.studies.institutions.map((institution, index) => (
                    <Column key={index} gap="8">
                      <Heading variant="heading-strong-m" style={{ fontSize: '1.5rem', color: 'gray-400' }}>{institution.name}</Heading>
                      <Text variant="body-default-m" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'gray-400' }}>
                        {institution.description}
                      </Text>
                    </Column>
                  ))}
                </Column>
              </Column>
            )}

            {about.technical.display && (
              <Column id={about.technical.title} paddingY="l" marginY="l">
                <Heading variant="heading-strong-l" marginBottom="24" style={{ fontSize: '2rem', color: 'white' }}>
                  {about.technical.title}
                </Heading>
                <Column gap="32">
                  {about.technical.sections.map((section, index) => (
                    <Column key={index} gap="16">
                      <Heading variant="heading-strong-m" style={{ fontSize: '1.5rem', color: 'gray-400' }}>{section.title}</Heading>
                      {section.description && (
                        <Text variant="body-default-m" marginBottom="16" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'gray-400' }}>
                          {section.description}
                        </Text>
                      )}
                      {section.points && (
                        <Column gap="8">
                          {section.points.map((point, i) => (
                            <Text key={i} variant="body-default-m" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'gray-400' }}>
                              • {point}
                            </Text>
                          ))}
                        </Column>
                      )}
                      {section.services && (
                        <Column gap="16">
                          {section.services.map((service, i) => (
                            <Column key={i} gap="8">
                              <Flex gap="8" vertical="center">
                                <Text variant="body-strong-m" style={{ fontSize: '1.125rem', color: 'gray-400' }}>{service.icon}</Text>
                                <Text variant="body-strong-m" style={{ fontSize: '1.125rem', color: 'gray-400' }}>{service.title}</Text>
                              </Flex>
                              <Text variant="body-default-m" paddingLeft="24" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'gray-400' }}>
                                {service.description}
                              </Text>
                            </Column>
                          ))}
                          {section.cta && (
                            <Flex marginTop="16">
                              <Button
                                href={section.cta.link}
                                variant="primary"
                                style={{ fontSize: '1.25rem', padding: '0.75rem 1.5rem' }}
                              >
                                {section.cta.text}
                              </Button>
                            </Flex>
                          )}
                        </Column>
                      )}
                      {section.testimonials && (
                        <Column gap="16">
                          {section.testimonials.map((testimonial, i) => (
                            <Column key={i} gap="16">
                              <Text variant="body-default-m" style={{ fontSize: '1.25rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                                "{testimonial.quote}"
                              </Text>
                              <Flex gap="16">
                                <SmartImage
                                  src={testimonial.beforeImage}
                                  alt="Before transformation"
                                  radius="s"
                                  aspectRatio="1 / 1"
                                />
                                <SmartImage
                                  src={testimonial.afterImage}
                                  alt="After transformation"
                                  radius="s"
                                  aspectRatio="1 / 1"
                                />
                              </Flex>
                            </Column>
                          ))}
                        </Column>
                      )}
                    </Column>
                  ))}
                </Column>
              </Column>
            )}
          </Column>
        </Flex>
      </main>
    </div>
  );
}
