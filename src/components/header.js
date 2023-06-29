import '../style/header.css';

export default function Header() {

    return (
        <header>
            <section className="header">
                <a href="#home" data-c="Logo do projeto" aria-label="Logo do projeto"><img src="https://media.discordapp.net/attachments/890745869832454145/1123835088317186081/eye.png" alt="" /></a>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#purchase-link">Pricing</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#login-link" className="dash-btn">Dashboard</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}