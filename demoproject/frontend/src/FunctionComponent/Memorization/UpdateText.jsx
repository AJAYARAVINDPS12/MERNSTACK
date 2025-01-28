import { memo } from "react";
const UpdateText = ({ value }) => {
    console.log("number 2");
    return (
        <div>
            <h2>This is number {value}</h2>
        </div>
    );
};
export default memo(UpdateText);