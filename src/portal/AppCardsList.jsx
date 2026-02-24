import AppCard from "./AppCard";
import { Sun, Moon } from "lucide-react";

export default function AppCardsList() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AppCard
                to="/apps/basic/basicThememode"
                icon={<Sun size={32} />}
                iconBg="bg-amber-50"
                iconColor="text-amber-500"
                title="Basic Theme Mode"
                descp="Simple implementation using a single file and basic UseContext hook without extra components."
            />
            
            <AppCard
                to="/apps/logic/logicThememode"
                icon={<Moon size={32} />}
                iconBg="bg-indigo-50"
                iconColor="text-indigo-500"
                title="Logic Theme Mode"
                descp="Advanced implementation with separated components, custom hooks, and persistent state logic."
            />
        </div>
    );
}