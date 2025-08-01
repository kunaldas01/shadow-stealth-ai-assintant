import { useCallback, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import Versions from "./components/Versions";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { QueryProvider } from "./providers/query.provider";

function App(): React.JSX.Element {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const onOpenSettings = useCallback(() => {}, []);
    return (
        <QueryProvider>
            <Toaster closeButton richColors />
            <div className="relative">
                <WelcomeScreen onOpenSettings={onOpenSettings} />
            </div>
        </QueryProvider>
    );
}

export default App;
