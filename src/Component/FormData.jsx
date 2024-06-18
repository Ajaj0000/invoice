import React, { useEffect, useState } from "react";

function FormDate() {

    const [formData, setFormData] = useState([])

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('invoiceData'))

        if (saveData) {
            setFormData(saveData)
        }
    },[]);

    return (
        <>
            <div>
                {
                    formData.map((itm) => {
                        return (
                            <>
                                <h2>Invoice Summary</h2>
                                <p><strong>Your Name:</strong> {itm.name}</p>
                                <p><strong>Your Address:</strong> {itm.address}</p>
                                <p><strong>Your Email:</strong> {itm.email}</p>
                                <p><strong>Client Name:</strong> {itm.clientName}</p>
                                <p><strong>Client Address:</strong> {itm.clientAddress}</p>
                                <p><strong>Total Amount:</strong> {itm.total}</p>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { FormDate }