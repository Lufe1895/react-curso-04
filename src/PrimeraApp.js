const PrimeraApp = ({ saludo = 'Hola, mundo.'}) => {

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación.</p>
        </>
    );
    
}

export default PrimeraApp;