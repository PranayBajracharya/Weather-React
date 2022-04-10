import classes from "./SelectCity.module.css";

const SelectCity = (props) => {
    const changeCityHandler = (event) => {
        props.setCity(event.target.value);
    };

    return (
        <select className={classes.select} name="city" value={props.city} onChange={changeCityHandler}>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Butwal">Butwal</option>
            <option value="Biratnagar">Biratnagar</option>
            <option value="Dhangadhi">Dhangadhi</option>
            <option value="Hetauda">Hetauda</option>
        </select>
    );
};

export default SelectCity;