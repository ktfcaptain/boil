import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          subscribe to my <GradientText>incoherent tangents</GradientText>
        </>
      }
      description="I don't officially have one yet, but I'm sure I'll wanna 
      rant to a faceless crowd at some point..."
    />
  </Section>
);

export { CTA };
