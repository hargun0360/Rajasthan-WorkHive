import PropTypes from 'prop-types'
import { getValidatedData } from 'constants/constants';
import React, { useState, useEffect } from 'react'

function FilterView(props) {

    const [options, setOptions] = useState([]);
    const [filterView, setFilterView] = useState(false);

    useEffect(() => {
        if (getValidatedData(props.filterOptions, 'array', true)) {
            setOptions(props.filterOptions.map((option) => {
                option.value = getValidatedData(option.value);
                return option
            }));
        } else {
            setOptions([])
        }
    }, [])

    const onHandleChange = (index, value) => {
        let dataOptions = options.map((option) => {
            return { ...option };
        })
        dataOptions[index].value = value;
        setOptions(dataOptions)
    }

    const onFilter = () => {
        let query = "";
        for (let i = 0; i < options.length; i++) {
            if (options[i].value !== "") {
                query += ((query === "") ? "" : "&") + options[i].key + options[i].filterPostfix + "=" + options[i].value;
            }
        }
        props.doFilter(query);
    }


    const getHtmlElement = (option, i) => {

        switch (getValidatedData(option.type).toLowerCase()) {
            case 'select':
                return (<select type="text" className="form-control" onChange={(e) => { onHandleChange(i, e.target.value) }} value={getValidatedData(option.value)} >
                    <option value="" >{getValidatedData(option.placeholder) || "Please Select"}</option>
                    {
                        option.options.map((op, index) => {
                            return (<option key={"option" + i + "_" + index} value={getValidatedData(op.value)} >{getValidatedData(op.label)}</option>)
                        })
                    }
                </select>)
            default:
                return (<input type={getValidatedData(option.type).toLowerCase()} className="form-control" onChange={(e) => { onHandleChange(i, e.target.value) }} placeholder={getValidatedData(option.placeholder)} value={getValidatedData(option.value)} />)
        }
    }

    if (options.length === 0) {
        return (<></>)
    }
    return (
        <div className="row">
            <div className="col-12 text-end mb-3">
                <i className="fa fa-filter cursor-pointer" onClick={() => setFilterView(!filterView)}></i>
            </div>
            {
                (filterView) ? (<>
                    {
                        options.map((option, index) => {
                            return (<div key={"Filter_option_" + index} className="col-md-3 col-sm-6 col-12">
                                <div className="mb-3">
                                    <label>{getValidatedData(option.label)}</label>
                                    {
                                        getHtmlElement(option, index)
                                    }
                                </div>
                            </div>)
                        })
                    }
                    <div className="col text-end">
                        <button className="btn btn-success mt-4" onClick={() => { onFilter() }}>Filter Data</button>
                    </div>
                </>) : (<></>)
            }
        </div>
    )

}

FilterView.propTypes = {
    filterOptions: PropTypes.array,
    doFilter: PropTypes.func,
  }

export default FilterView;