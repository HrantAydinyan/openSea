import React, { useState } from 'react'
import { useFormik } from 'formik'
import { startPayment } from '../../services/sendPaymant';
import { sendSchema } from '../../validations/sendPayment';

const SendTransactions = () => {
    const [error, setError] = useState(null);
    const [txs, setTxs] = useState([]);

    const formik = useFormik({
        initialValues: {
            address: '',
            ether: ''
        },
        validationSchema: sendSchema,
        onSubmit: (values) => {
            setError();
            setTxs([]);
            startPayment({
                setError, 
                setTxs,
                ether: values.ether,
                addr: values.address
            })
        }
    })

    const isErrorAddress = formik.errors.address && formik.touched.address
    const isErrorEther = formik.errors.ether && formik.touched.ether

    return(
        <div style={{textAlign: 'center'}}>
            <h2>Send Eth payment</h2>
            <form onSubmit={formik.handleSubmit} style={{margin: '20px 0'}}>
                <div >
                    <input 
                        type='text' 
                        name='address' 
                        placeholder='Account Address' 
                        style={isErrorAddress ? {borderColor: 'red'}: {}}
                        {...formik.getFieldProps('address')} 
                    />
                    {isErrorAddress
                        && <p 
                                style={{
                                    fontSize: '12px',    
                                    color: 'red'
                                }}>
                                    {formik.errors.address}
                            </p>
                    }
                </div>
                <div style={{margin: '15px 0'}}>
                    <input 
                        type='text' 
                        name='ether' 
                        placeholder='ether'  
                        style={isErrorEther ? {borderColor: 'red'}: {}}
                        {...formik.getFieldProps('ether')}
                    />
                    {isErrorEther
                        && <p 
                                style={{
                                    fontSize: '12px',    
                                    color: 'red'
                                }}>
                                    {formik.errors.ether}
                            </p>
                    }
                </div>
                <button type="submit">Send</button>
            </form>
            {error && <div style={{color: 'red'}}>{error}</div>}
            {txs.length !== 0 && 
                <div> 
                    Transacrion address: 
                        <a 
                            href={`https://ropsten.etherscan.io/tx/${txs[0].hash}`} 
                            style={{color: '#3d3db1'}} 
                            target="_blank" 
                            rel="noreferrer">{txs[0]?.hash}
                        </a>
                </div>
            }
        </div>
    )
}

export default SendTransactions;