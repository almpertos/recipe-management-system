import React from "react";

interface CardProps {
  className?: string;
  title: string;
  content: string;
  urls?: {
    [key: string]: string;
  };
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className = "",
  content,
  title,
  urls,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 rounded-2xl bg-white shadow-lg py-5 px-4 ${className}`}
    >
      <h5 className="text-lg sm:text-xl font-semibold text-[#2d3748]">
        {title}
      </h5>
      <span className="text-sm sm:text-md font-normal text-[#4a5568]">
        {content}
      </span>
      {urls && (
        <div className="flex justify-start items-center gap-4">
          {Object.entries(urls).map(([key, value]) => (
            <a
              key={key}
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-blue-600 hover:underline"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
