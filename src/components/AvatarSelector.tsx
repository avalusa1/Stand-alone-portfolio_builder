import { portfolioConfig } from "../data/portfolioData";

interface AvatarSelectorProps {
  size?: "sm" | "md" | "lg";
  showBorder?: boolean;
}

const AvatarSelector = ({ size = "md", showBorder = true }: AvatarSelectorProps) => {
  const avatarPath = portfolioConfig.personal.avatar;
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const borderClass = showBorder ? "border-4 border-indigo-500 shadow-lg" : "";

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} rounded-full overflow-hidden ${borderClass} bg-gradient-to-br from-indigo-100 to-purple-100`}>
      {avatarPath.endsWith('.svg') ? (
        <object
          data={avatarPath}
          type="image/svg+xml"
          className="w-full h-full"
          aria-label="User Avatar"
        />
      ) : (
        <img
          src={avatarPath}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default AvatarSelector;
