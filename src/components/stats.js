export default function Stats() {

    return (
        <section className="stats">
            <div className="stats__header">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                <h1>Stats</h1>
            </div>
            <div className="stats__info">
                <div className="stats__info__users">
                    <i className="fas fa-user-alt" aria-hidden="true"></i>
                    <h1>X Users</h1>
                </div>
                <div className="stats__info__strings">
                    <i className="fas fa-database" aria-hidden="true"></i>
                    <h1>X Detections</h1>
                </div>
            </div>
        </section>
    )
}