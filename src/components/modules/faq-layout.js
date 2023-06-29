export default function FaqLayout(props) {
    return (
        <div>
            <h1><i className="fas fa-question-circle" aria-hidden="true"></i> {props.question}</h1>
            <p>{props.answer}</p>
        </div>
    )
}