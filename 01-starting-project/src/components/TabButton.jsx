// export default function TabButtton({ label }) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     );

// }

export default function TabButtton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );

}
