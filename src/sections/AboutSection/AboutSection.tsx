import staticData from '@/data/aboutSection.json';

export const AboutSection: React.FC = () => {
  const { title, text } = staticData;

  return (
    <section className="section  text-secondaryText">
      {/* <section className="section bg-darkBg text-primaryText"> */}
      <div className="container">
        <h2 className="mb-8 text-[24px] font-bold">{title}</h2>
        <p className="text-[18px] leading-[1.5]">{text}</p>
      </div>
    </section>
  );
};
