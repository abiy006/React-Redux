//import the custom Section value first, if you want to use it 
// export default function Tabs({ children, buttons, ButtonsContainer = Section }) {

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
} 