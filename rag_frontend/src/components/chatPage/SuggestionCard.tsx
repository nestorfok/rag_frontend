interface SuggestionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackgroundColor: string;
  onClick: () => void;
}


export const SuggestionCard = ({ title, description, icon, iconBackgroundColor, onClick }: SuggestionCardProps) => {

  return (
    <div 
      className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-4 hover:border-primary-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-8 h-8 ${iconBackgroundColor} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};