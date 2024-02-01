// export default function TabButtton({ label }) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     );

// }

export default function TabButtton({ children, onSelect, isSelected }) {
    return (
        <li>
            {/* <button className="active" onClick={onSelect}>{children}</button> */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );

}
