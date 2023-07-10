export default function Home() {

    return (
        <section>
            <div className="home" id="home">
                <div className="home__box1">
                    <h1>Eye</h1>
                    <p>The first and the best FiveM Screenshare tool. Detecting cheats in the most efficient way that you ever seen.</p>
                    <a href="#example-link">See Scan Template</a>
                    <a href="#purchase-link" className="eye-btn">Eye It <i className="fas fa-eye" aria-hidden="true"></i></a>
                </div>
                <div className="home__box2">
                    <img src="assets/scanner.webp" alt="" />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#191919" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,149.3C384,160,480,128,576,138.7C672,149,768,203,864,213.3C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </section>
    )
}