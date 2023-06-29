import '../style/faq.css';

export default function Faq() {
    return (
        <section>
            <div className="faq" id="faq">
                <div className="faq-h">
                    <i className="fas fa-question" aria-hidden="true"></i>
                    <h1>Frequently Asked Questions</h1>
                </div>
                    <div className="faq-box1">
                        <div className="q1">
                            <h1><i className="fas fa-question-circle" aria-hidden="true"></i> What payment methods do you accept?</h1>
                            <p>We accept the following methods: Paypal, Picpay, Mercado Pago and PIX.</p>
                        </div>
                        <div className="q2">
                            <h1><i className="fas fa-question-circle" aria-hidden="true"></i> Why use Eye?</h1>
                            <p>We can offer you the best FiveM anti-cheat ever created, determining for sure in seconds if a player is or not cheating.</p>
                        </div>
                    </div>
                    <div className="faq-box2">
                        <div className="q3">
                            <h1><i className="fas fa-question-circle" aria-hidden="true"></i> Can i get a free license or trial?</h1>
                            <p>We don't make many exceptions about this, but if you have a youtube channel or own a big server you can open a ticket and talk with us.</p>
                        </div>
                        <div className="q4">
                            <h1><i className="fas fa-question-circle" aria-hidden="true"></i> What means a "Generic Cheat" detection?</h1>
                            <p>A Generic Cheat means that a string can be more than one cheat, so it flags like a generic cheat.</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}