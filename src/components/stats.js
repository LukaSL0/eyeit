import '../style/stats.css';

export default function Stats() {

    return (
        <section>
            <div className="stats">
                <div className="stats-h">
                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                    <h1>Stats</h1>
                </div>
                <div className="stats-inf">
                    <div className="users">
                        <i className="fas fa-user-alt" aria-hidden="true"></i>
                        <h1>X Users</h1>
                    </div>
                    <div className="strings">
                        <i className="fas fa-database" aria-hidden="true"></i>
                        <h1>X Detections</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}