export default function FeaturesLayout(props) {

    return (
        <div>
            <i className={props.icon}></i>
            <h1>{props.feature}</h1>
            <p>{props.desc}</p>
        </div>
    )
}