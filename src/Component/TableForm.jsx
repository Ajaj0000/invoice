import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function TableForm({ description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal
}) {

    // calculate amount
    useEffect(() => {
        const calculateAmount = () => {
            setAmount(quantity * price)
        }
        calculateAmount(amount);

    }, [price, quantity, amount, setAmount])
   
    let sum = 0;
    for(let i = 0 ; i < list.length ; i++){
        sum += parseInt(list[i].amount)
        setTotal(sum)
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const addItem = {
            id: uuidv4(),
            description,
            quantity,
            amount,
            price
        }
        setPrice('')
        setAmount("")
        setQuantity('')
        setDescription('')
        setIsEditing(false)
        setList([...list, addItem])
        console.log(list);
    };

    const [isEditing, setIsEditing] = useState(false)
    // delete function
    const deleteItem = (id) => {
        setList(list.filter((itm) => itm.id !== id))
    };
    // edit funtion
    const editItem = (id) => {
        const editingItem = list.find((itm) => itm.id === id)
        setIsEditing(true)
        setList(list.filter((itm) => itm.id !== id))
        setDescription(editingItem.description)
        setPrice(editingItem.price)
        setQuantity(editingItem.quantity)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>{/**onSubmit={handleSubmit} */}
                <div className="flex flex-col md:mt-2">
                    <label htmlFor="description">Item description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Item description"
                        maxLength={96}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            placeholder="Quantity"
                            maxLength={33}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            placeholder="Price"
                            maxLength={33}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="amount">Amount</label>
                        <p className="mt-2">{amount}</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
                >
                    {isEditing ? "Finish Editing" : "Add Table Item"}
                </button>
            </form>


            <table width="100%" className="mb-10">
                <thead>
                    <tr className="bg-gray-100 p-1">
                        <td className="font-bold">Description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr className="h-10">
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                                <td >
                                    <button onClick={() => { deleteItem(id) }}><MdDeleteOutline className="text-red-500 font-bold text-xl" /></button>
                                </td>
                                <td >
                                    <button onClick={() => { editItem(id) }}><FiEdit className="text-green-500 font-bold text-xl" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>

            <div>
                <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
                    Total. {total.toLocaleString()}
                </h2>
            </div>
        </>
    )
}
export { TableForm }