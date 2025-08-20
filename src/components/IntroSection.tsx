import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button';
import Link from 'next/link';
import VisualIdentitySection from './VisualIdentitySection';

interface IData {
  introText: string;
  introButtonText: string;
  introButtonLink: string;
}

const IntroSection: React.FC<IData> = ({
    introText,
    introButtonText,
    introButtonLink ,
}) => {
  return (
    <>
      <MaxWidthWrapper className="py-16">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl  text-center mb-6">
            {introText || "Ready to take your business to the next level?"}
          </h2>
          <Button className="bg-blue-500 hover:bg-blue-600 dark:text-white">
            <Link href={introButtonLink}>{introButtonText}</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default IntroSection