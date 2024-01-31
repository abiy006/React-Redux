// export default function TabButtton({ label }) {
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     );

// }

export default function TabButtton({ children }) {

    function handleClick() {
        console.log('Helo world!!')
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );

}
