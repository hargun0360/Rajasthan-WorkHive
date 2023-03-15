import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { resetAlertAction, setAlertAction } from 'store/actions';
import { Alert } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

const GlobalAlert = props => {
    const dispatch = useDispatch();

    const {alert} = useSelector((state) => ({
        alert : state.alert
    }))

    return (
      <SweetAlert type = {alert.color} onConfirm={() => {
        dispatch(resetAlertAction());
      }} title={alert.text}>
        {alert.text}
      </SweetAlert>

    )
}

export default GlobalAlert;