import Link from "next/link";

const NavBar = () => {
    
    const styles = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100vw',
        height: '5vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '.9rem',
        fontWeight: 'bold',
        padding: '0 10px',
    } 

    const stylesLink = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '.9rem',
        fontWeight: 'bold',
    }

   return( 
        <div style={styles}>
            <Link href='/' style={stylesLink} >Index</Link>&nbsp;&nbsp;
            <Link href='/about' style={stylesLink} >About</Link>&nbsp;&nbsp;
            <Link href='/contact' style={stylesLink} >Contact</Link>
        </div>
   ); 
}

export default NavBar;