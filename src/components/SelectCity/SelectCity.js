import { Select } from "@chakra-ui/react";

const primaryColor = "#282c34";

const SelectCity = (props) => {
    const changeCityHandler = (event) => {
        props.setCity(event.target.value);
    };

    return (
        <Select
            h="auto"
            border="none"
            focusBorderColor="inherit"
            fontSize="xl"
            value={props.city}
            onChange={changeCityHandler}
        >
            <option style={{ backgroundColor: primaryColor }} value="Kathmandu">Kathmandu</option>
            <option style={{ backgroundColor: primaryColor }} value="Pokhara">Pokhara</option>
            <option style={{ backgroundColor: primaryColor }} value="Butwal">Butwal</option>
            <option style={{ backgroundColor: primaryColor }} value="Biratnagar">Biratnagar</option>
            <option style={{ backgroundColor: primaryColor }} value="Dhangadhi">Dhangadhi</option>
            <option style={{ backgroundColor: primaryColor }} value="Hetauda">Hetauda</option>
        </Select>
    );
};

export default SelectCity;
