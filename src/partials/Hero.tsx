import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          hey there, welcome to <GradientText>rormor</GradientText> 🤪
        </>
      }
      description={
        <>
          I have fun times and have always loved{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            technology
          </a>{' '}
          but rarely have been in positions to purchase anything I want, much
          less,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            new tech.
          </a>{' '}
          Not that I went without, I just had to get creative 😏
        </>
      }
      avatar={
        <img
          className="h-90 w-90"
          src="/assets/images/1.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://youtube.com/@modafaku/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
