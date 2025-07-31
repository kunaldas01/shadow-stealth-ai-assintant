import { useEffect, useState } from "react";
import { toast } from "sonner";

function Versions(): React.JSX.Element {
    useEffect(() => {
        toast.success("Great success");
        setTimeout(() => {
            toast.error("Very bad error");
        }, 3000);
        setTimeout(() => {
            toast.message("No worries");
        }, 3000);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-emerald-600">Hello</h1>
        </div>
    );
}

export default Versions;
