import { Toaster } from "./components/ui/sonner";
import Versions from "./components/Versions";
import { QueryProvider } from "./providers/query.provider";

function App(): React.JSX.Element {
    return (
        <QueryProvider>
            <Toaster closeButton richColors />
            <Versions />
        </QueryProvider>
    );
}

export default App;
