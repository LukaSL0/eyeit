import FaqLayout from './modules/faq-layout.js';

export default function Faq() {
    return (
        <section className='faq' id='faq'>
            <div className="faq__header">
                <i className="fas fa-question" aria-hidden="true"></i>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq__box">
                <FaqLayout
                    question="What payment methods do you accept?"
                    answer="We accept the following methods: Paypal, Picpay, Mercado Pago and PIX."
                />
                <FaqLayout
                    question="Why use Eye?"
                    answer="We can offer you the best FiveM anti-cheat ever created, determining for sure in seconds if a player is or not cheating."
                />
            </div>
            <div className="faq__box">
                <FaqLayout
                    question="Can i get a free license or trial?"
                    answer="We don't make many exceptions about this, but if you have a youtube channel or own a big server you can open a ticket and talk with us."
                />
                <FaqLayout
                    question="What means a 'Generic Cheat' detection?"
                    answer="A Generic Cheat means that a string can be more than one cheat, so it flags like a generic cheat."
                />
            </div>
        </section>
    )
}