import { useState, useEffect } from 'react';
import './App.css';
import { MainDetails } from './Component/MainDetails';
import ClinentDetails from './Component/ClinentDetails';
import { Header } from './Component/Header';
import Dates from './Component/Dates';
import Table from './Component/Tables';
import { Notes } from './Component/Notes';
import { Footer } from './Component/Footer';
import { TableForm } from './Component/TableForm';

function App() {

  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("")
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAccount, setBankAccount] = useState('')
  const [website, setWebsite] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [notes, setNotes] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(() => {
    const formData = {
      name,
      address,
      email,
      phone,
      bankName,
      bankAccount,
      website,
      clientName,
      clientAddress,
      invoiceNumber,
      invoiceDate,
      dueDate,
      notes,
      description,
      quantity,
      price,
      amount,
      list,
      total
    };
    localStorage.setItem('invoiceData', JSON.stringify(formData));
  }, [
    name,
    address,
    email,
    phone,
    bankName,
    bankAccount,
    website,
    clientName,
    clientAddress,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes,
    description,
    quantity,
    price,
    amount,
    list,
    total
  ]);


  return (
    <>
      <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:justify-center"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}>

        {
          showInvoice ?
            <div className="bg-white p-5 rounded shadow">
              <Header />

              <MainDetails name={name} address={address} />

              <ClinentDetails clientName={clientName} clientAddress={clientAddress} />

              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

              <Table
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />

              <Notes notes={notes} />

              <Footer name={name}
                email={email}
                website={website}
                bankAccount={bankAccount}
                phone={phone}
                bankName={bankName}
              />

              <button className="bg-blue-500 py-2 px-6 rounded text-base hover:bg-blue-600 text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400" onClick={() => { setShowInvoice(false) }}>Edit Invoice</button>
            </div> : (
              <>
                <section>
                  <div className="bg-white p-5 rounded shadow">
                    <div className="flex flex-col justify-center">
                      <article className="md:grid grid-cols-2 gap-10">
                        <div className="flex flex-col">
                          <label htmlFor="name">Your full name</label>
                          <input
                            type="text"
                            name="text"
                            id="name"
                            placeholder="Enter your name"
                            maxLength={56}
                            autoComplete="off"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="address">Enter your address</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Enter your address"
                            autoComplete="off"
                            maxLength={96}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </article>

                      <article className="md:grid grid-cols-3 gap-10">
                        <div className="flex flex-col">
                          <label htmlFor="email">Enter your email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            maxLength={255}
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="website">Enter your website</label>
                          <input
                            type="url"
                            name="website"
                            id="website"
                            placeholder="Enter your website"
                            maxLength={96}
                            autoComplete="off"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="phone">Enter your phone</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone"
                            maxLength={12}
                            autoComplete="off"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </article>

                      <article className="md:grid grid-cols-2 gap-10">
                        <div className="flex flex-col">
                          <label htmlFor="bankName">Enter your bank name</label>
                          <input
                            type="text"
                            name="bankName"
                            id="bankName"
                            placeholder="Enter your bank name"
                            maxLength={56}
                            autoComplete="off"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="bankAccount">
                            Enter your bank account number
                          </label>
                          <input
                            type="text"
                            name="bankAccount"
                            id="bankAccount"
                            placeholder="Enter your bank account number"
                            maxLength={20}
                            autoComplete="off"
                            value={bankAccount}
                            onChange={(e) => setBankAccount(e.target.value)}
                          />
                        </div>
                      </article>

                      <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                        <div className="flex flex-col">
                          <label htmlFor="clientName">Enter your client's name</label>
                          <input
                            type="text"
                            name="clientName"
                            id="clientName"
                            placeholder="Enter your client's name"
                            maxLength={56}
                            autoComplete="off"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="clientAddress">
                            Enter your client's address
                          </label>
                          <input
                            type="text"
                            name="clientAddress"
                            id="clientAddress"
                            placeholder="Enter your client's address"
                            maxLength={96}
                            autoComplete="off"
                            value={clientAddress}
                            onChange={(e) => setClientAddress(e.target.value)}
                          />
                        </div>
                      </article>

                      <article className="md:grid grid-cols-3 gap-10">
                        <div className="flex flex-col">
                          <label htmlFor="invoiceNumber">Invoice Number</label>
                          <input
                            type="text"
                            name="invoiceNumber"
                            id="invoiceNumber"
                            placeholder="Invoice Number"
                            autoComplete="off"
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="invoiceDate">Invoice Date</label>
                          <input
                            type="date"
                            name="invoiceDate"
                            id="invoiceDate"
                            placeholder="Invoice Date"
                            autoComplete="off"
                            value={invoiceDate}
                            onChange={(e) => setInvoiceDate(e.target.value)}
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="dueDate">Due Date</label>
                          <input
                            type="date"
                            name="dueDate"
                            id="dueDate"
                            placeholder="Invoice Date"
                            autoComplete="off"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                          />
                        </div>
                      </article>

                      {/* This is our table form */}
                      <article>
                        <TableForm
                          description={description}
                          setDescription={setDescription}
                          price={price}
                          setPrice={setPrice}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          amount={amount}
                          setAmount={setAmount}
                          list={list}
                          setList={setList}
                          total={total}
                          setTotal={setTotal}
                        />
                      </article>

                      <label htmlFor="notes">Additional Notes</label>
                      <textarea
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="10"
                        placeholder="Additional notes to the client"
                        maxLength={500}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <article className="mt-5">
                    {/* <DonateButton /> */}
                    <button className="bg-blue-500 py-2 px-6 rounded text-base hover:bg-blue-600 text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400" onClick={() => { setShowInvoice(true) }}>Preview Invoice</button>
                  </article>
                </section>
              </>
            )}

      </main>

    </>
  );
}

export default App;
