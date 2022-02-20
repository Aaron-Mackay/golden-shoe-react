import './Filters.css';
import { useState, useEffect } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const Filters = ({ possibleSizes, onSaveFilters }) => {
    const [enteredMax, setEnteredMax] = useState('')
    const [enteredMin, setEnteredMin] = useState('')
    const [enteredSizes, setEnteredSizes] = useState(possibleSizes)

    const submitHandler = () => {
        const filtersDataObject = {
            max: enteredMax,
            min: enteredMin,
            sizes: enteredSizes
        }
        console.log(filtersDataObject)
        onSaveFilters(filtersDataObject);
    }

    useEffect(() => {
        submitHandler()
    }, [enteredSizes, enteredMax, enteredMin])

    const maxChangeHandler = (event) => {
        setEnteredMax(event.target.value)
    }
    const minChangeHandler = (event) => {
        setEnteredMin(event.target.value)
    }



    const sizesChangeHandler = async (val) => {
        setEnteredSizes(val)
    };

    return ( // todo validate input is non-negative, max higher than min
        <div className='filters__controls'>
            <div className='filters__control'>
                <label>Max Price</label>
                <input type='number' value={enteredMax} onChange={maxChangeHandler} />
            </div>
            <div className='filters__control'>
                <label>Min Price</label>
                <input type='number' value={enteredMin} onChange={minChangeHandler} />
            </div>
            <ToggleButtonGroup type="checkbox" value={enteredSizes} onChange={sizesChangeHandler}>
                {possibleSizes.map((size, i) => {
                    return <ToggleButton key={i} id={`tbg-btn-${i}`} value={size}>
                        {size}
                    </ToggleButton>
                })}
            </ToggleButtonGroup>
        </div>

    );
}

export default Filters;
