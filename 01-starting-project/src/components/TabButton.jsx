// export default function TabButtton({ label }) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     );

// }

export default function TabButtton({ children }) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );

}
