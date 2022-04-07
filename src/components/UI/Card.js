import classes from "./Card.module.css";

const Card = (props) => {
    const styles = props.className ? props.className : '';

    return <div className={`${classes.card} ${styles}`}>{props.children}</div>;
};

export default Card;
