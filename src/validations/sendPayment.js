import * as Yup from 'yup';

export const sendSchema = Yup.object().shape({
    address: Yup.string().required('Address is reuired'),
    ether: Yup.string().required('Ether is reuired'),
})