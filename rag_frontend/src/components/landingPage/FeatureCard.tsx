import React from 'react';
import { Typography } from 'antd';
import { Avatar } from 'antd';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  maxWidth?: string;
  animate?: string;
  animateDelay?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}
//  animate-initial-hidden animate-fade-in-up animate-delay-400

const { Title, Paragraph } = Typography;

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, maxWidth, animate, animateDelay, backgroundColor, borderColor, titleColor, descriptionColor } : FeatureCardProps) => {

  const maxWidthClass = maxWidth ? `max-w-[${maxWidth}]` : 'max-w-[500px]';
  const animateClass = animate ? `animate-initial-hidden animate-${animate}` : '';
  const animateDelayClass = animateDelay ? `animate-delay-${animateDelay}` : '';
  const backgroundColorClass = backgroundColor ? `bg-${backgroundColor}` : 'bg-white/10';
  const borderColorClass = borderColor ? `border-${borderColor}` : 'border-white/20';
  const titleColorClass = titleColor ? `!text-${titleColor}` : '!text-white';
  const descriptionColorClass = descriptionColor ? `!text-${descriptionColor}` : '!text-primary-100';

  // const featureCardClass = `${maxWidthClass} ${animateClass} ${animateDelayClass} ${backgroundColorClass} ${borderColorClass} ${titleColorClass} ${descriptionColorClass}`;
  return (
    // <div className="max-w-[500px] bg-white/10 rounded-2xl p-6 border border-white/20">
    <div className={`${maxWidthClass} ${backgroundColorClass} rounded-2xl p-6 border ${borderColorClass} ${animateClass} ${animateDelayClass}`}>
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className={`w-12 h-12 ${backgroundColorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          {/* Title */}
          <Title level={5} className={`${titleColorClass} font-semibold`}>{title}</Title>
          {/* Description */}
          <Paragraph className={`${descriptionColorClass} !mb-0`}>
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};