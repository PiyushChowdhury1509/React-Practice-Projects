import { useState } from "react";

const BgChanger = () => {
    const [bgColor, setBgColor] = useState("#ffffff");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <div
                    className="h-32 w-32 rounded-lg border-2 border-gray-300"
                    style={{ backgroundColor: bgColor }}
                ></div>
                <input
                    type="color"
                    onChange={(e) => setBgColor(e.target.value)}
                    className="mt-4 p-2 border border-gray-300 rounded-lg"
                />
            </div>
        </div>
    );
}

export default BgChanger;
