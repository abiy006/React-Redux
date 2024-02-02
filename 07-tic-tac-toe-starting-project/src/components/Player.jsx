import { useState } from "react";

export default function Player({ initialName, symbol }) {
const [palyerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(isEditing ? false : true); //not recommended
        // setIsEditing(!isEditing);// not recommended
        setIsEditing((editing) => !editing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    // let buttonCaption = 'Edit';
    let editablePlayerName = <span className="player-name">{palyerName}</span>;

    if (isEditing) {
        // buttonCaption = "Save";
        editablePlayerName = <input type="text" required value={palyerName} onChange={handleChange} />;
     }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>

    );
}