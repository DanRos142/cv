import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function InfoItem({ value, name, icon, children }: { value: string, name: string, icon: IconName, children?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3">
                <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-night-700 dark:text-night-300">
                    <FontAwesomeIcon icon={icon} className="h-5 w-5 stroke-1" />
                </div>
                <div className="font-medium">
                    <div className="text-sm text-gray-900 dark:text-night-100">{value}</div>
                    <div className="text-xs text-gray-400 dark:text-night-400">{name}</div>
                </div>
            </div>
            {children}
        </div>
    );
}