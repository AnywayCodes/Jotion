import { Footer } from "./_components/footer";
import { Heading } from "./_components/header";
import { Content } from "./_components/content";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
