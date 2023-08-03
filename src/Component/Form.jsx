import { useState } from "react";
import "./Form.css"

const Form = () => {

  const [allData, setallData] = useState(
    {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "male",
      address: "",
      Checked: false,
    }
  )

  const [TdData, setTdData] = useState([]);


  const Change = (event) => {

    console.log("allData.name>>>>>>>>>>>", allData);
    const { name, value, type, checked } = event.target;

    const Valuech = type === "checkbox" ? checked : value;

    setallData({ ...allData, [name]: Valuech, })

    console.log("event.name>>>>>>>>>>>>", event.name);

  }
  
  const submit = (event) => {
    event.preventDefault();
    console.log("clilckd submit");
    console.log(allData);

    setTdData([...TdData, allData]);


    setallData({
      name: "",
      email: "",
      password: "",
      age: "",
      address: "",
      gender: "male",
      isChecked: false,
    })



  }

  console.log("TdData>>>",TdData)

  return (
    <>
      <div className="main-form-div" >
        <form className="form" onSubmit={submit} >
          <h2>Order your product</h2>


          <div className="from-m">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={allData.name}
              onChange={Change}

              required
            />

          </div>

          <div className="from-m">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={allData.email}
              onChange={Change}
              required
            />
          </div>


          <div className="from-m">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={allData.password}
              onChange={Change}

              minLength={8}
              required
            />
          </div>


          <div className="from-m">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={allData.age}
              onChange={Change}

              required
            />
          </div>
          <div className="from-m">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={allData.gender}
              onChange={Change}

            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="from-m">
            <label htmlFor="address">Address</label>
            <textarea rows="4" cols="45" name="address" form="usrform" value={allData.address}
              onChange={Change}>
              Enter address here...</textarea>

          </div>


          <div className="from-m">
            <label htmlFor="isChecked">Are you sure order</label>  <input
              type="checkbox"
              name="isChecked"
              id="isChecked"
              value={allData.Checked}
              onChange={Change}

            />
          </div>
          <button   type="submit" >Submit</button>
        </form>




      </div>
      <table>

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Delivery Address </th>
          <th>Home Delivery</th>
        </tr>



        {TdData?.map((d, index) => {
          return <>
          <tr key={index}>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.age}</td>
            <td>{d.gender}</td>
            <td>{d.address}</td>
            <td>{d.isChecked ? "Yes" : "No"}</td>

          </tr>
          </>
        })}


      </table>
    </>
  )
}

export default Form