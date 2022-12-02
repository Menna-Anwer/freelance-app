import React, { useState } from 'react'
import "./register.css"
const Register = () => {
    const [userData, setData] = useState({
        date: '',
        name: "",
        id: "",
        RefNum: "",
        selc1: "",
        Addr: "",
        txtare: "",
        radio: "radio2",
        selc2: "1",
        selc3: "1",
        selc4: "1",
      })
    
      const [error, setError] = useState({
        nameError: null,
        dateError: null,
        idError: null,
        RefNumError: null,
        selc1Error: null,
        AddrError: null,
        txtareError: null,
        radioError: null,
        selc2Error: null,
        selc3Error: null,
        selc4Error: null,
      })

    const changeData = (event) => {
        if (event.target.name === "date") {
          setData({
            ...userData,
            date: event.target.value,
          })
          setError({
            ...error,
            dateError: event.target.value.length === 0 ?
              "This Field is Required" : (event.target.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) ? null : ' Not valid Date'
          })
        }
        /////////////////////////////////////
        else if (event.target.name === "name") {
          setData({
            ...userData,
            name: event.target.value,
          })
          setError({
            ...error,
            nameError: event.target.value.length === 0 ?
              "This Field is Required" : null
          })
        }
        ////////////////////////////////////
        else if (event.target.name === "id") {
          setData({
            ...userData,
            id: event.target.value,
          })
          setError({
            ...error,
            idError: event.target.value.length === 0 ?
              "This Field is Required" : null
          })
        }
        ////////////////////////////////////
        else if (event.target.name === "RefNum") {
        setData({
            ...userData,
            RefNum: event.target.value,
        })
        setError({
            ...error,
            RefNumError: event.target.value.length === 0 ?
            "This Field is Required" : null
        })
        }
        ////////////////////////////////////
        else if (event.target.name === "selc1") {
            setData({
                ...userData,
                selc1: event.target.value,
            })
            setError({
                ...error,
                selc1Error: event.target.value.length === 0 ?
                "This Field is Required" : null
            })
            console.log(event.target.value);
        }
         ////////////////////////////////////
         else if (event.target.name === "selc2") {
            setData({
                ...userData,
                selc2: event.target.value,
            })
            setError({
                ...error,
                selc2Error: event.target.value.length === 0 ?
                "This Field is Required" : null
            })
            console.log(event.target.value);
        }
         ////////////////////////////////////
         else if (event.target.name === "selc3") {
            setData({
                ...userData,
                selc3: event.target.value,
            })
            setError({
                ...error,
                selc3Error: event.target.value.length === 0 ?
                "This Field is Required" : null
            })
            console.log(event.target.value);
        }
         ////////////////////////////////////
         else if (event.target.name === "selc4") {
            setData({
                ...userData,
                selc4: event.target.value,
            })
            setError({
                ...error,
                selc4Error: event.target.value.length === 0 ?
                "This Field is Required" : null
            })
            console.log(event.target.value);
        }
         ////////////////////////////////////
         else if (event.target.name === "Addr") {
            setData({
                ...userData,
                Addr: event.target.value,
            })
            setError({
                ...error,
                AddrError: event.target.value.length === 0 ?
                "This Field is Required" : null
            })
        }
         ////////////////////////////////////
         else if (event.target.name === "flexRadioDefault") {
            setData({
                ...userData,
                radio: event.target.value,
            })
            setError({
                ...error,
                radioError: event.target.value.length === 0?
                "This Field is Required" : null
            })
            console.log(event.target.value);
            
        }
    }
    const handleSubmit =  (event) => {
        event.preventDefault();
    } 
  return (
    <div className='container'>
      <h1 className='heading'>تسجيل طلب جديد</h1>
      <div className='form-cont'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row  tex-cont">
                    <div className="col-sm-9 input-cont">
                        <input type="text" className="form-control " id="inputDate" name='date'
                        onChange={(event) => changeData(event)} value={userData.date} placeholder='التاريخ'/>
                    </div>
                    <label htmlFor="inputDate" className="col-sm-3 col-form-label">التاريخ</label>
                    {error && <p style={{ color: 'red' }}>{error.dateError}</p>}
                </div>

                <div className="mb-3 row ">
                    <div className="col-sm-9 input-cont">
                        <input type="text" className="form-control" id="inputName" name='name'
                        onChange={(event) => changeData(event)} value={userData.name} placeholder='الاسم'/>
                    </div>
                    <label htmlFor="inputName" className="col-sm-3 col-form-label">الاسم</label>
                    {error && <p style={{ color: 'red' }}>{error.nameError}</p>}
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-9 input-cont">
                        <input type="text" className="form-control" id="inputId" name='id'
                        onChange={(event) => changeData(event)}  value={userData.id} placeholder='الرقم القومى'/>
                    </div>
                    <label htmlFor="inputId" className="col-sm-3 col-form-label">الرقم القومى</label>
                    {error && <p style={{ color: 'red' }}>{error.idError}</p>}
                </div>

                <div className="mb-3 row ">
                    <div className="col-sm-9 input-cont">
                        <input type="text" className="form-control" id="inputRefNum" name='RefNum'
                        onChange={(event) => changeData(event)} value={userData.RefNum} placeholder='الرقم المرجعي'/>
                    </div>
                    <label htmlFor="inputRefNum" className="col-sm-3 col-form-label">الرقم المرجعي</label>
                    {error && <p style={{ color: 'red' }}>{error.RefNumError}</p>}
                </div>

                <div className="mb-3 row ">
                    <div className="col-sm-9  input-cont">
                        <select className="form-select form-select-lg mb-3" onChange={(event) => changeData(event)} 
                        value={userData.selc1} name="selc1" id="inputselc1" aria-label=".form-select-lg example">
                            <option value={"1"}>الحامول</option>
                            <option value={"2"}>Two</option>
                            <option value={"3"}>Three</option>
                        </select>
                    </div>
                    <label htmlFor="inputsec1" className="col-sm-3 col-form-label">الشياخة</label>
                    {error && <p style={{ color: 'red' }}>{error.selc1Error}</p>}
                </div>

                <div className="mb-3 row ">
                    <div className="col-sm-9 input-cont">
                        <input type="text" className="form-control" id="inputAddr" name='Addr'
                        onChange={(event) => changeData(event)} value={userData.Addr} placeholder='العزبة'/>
                    </div>
                    <label htmlFor="inputAddr" className="col-sm-3 col-form-label">العزبة</label>
                    {error && <p style={{ color: 'red' }}>{error.AddrError}</p>}
                </div>

                <div className="mb-3 row ">
                    <div className="col-sm-9 input-cont">
                    <textarea class="form-control" id="textarea" aria-label="With textarea"name='txtare'
                    onChange={(event) => changeData(event)} value={userData.txtare} placeholder='ملاحظــــــات'></textarea>
                    </div>
                    <label htmlFor="textarea" className="col-sm-3 col-form-label">ملاحظــــــات</label>
                    {error && <p style={{ color: 'red' }}>{error.txtareError}</p>}
                </div>
                
                <div className="mb-3 ms-5 row radio-container">
                    <div className="form-check col-8 radio-button"value={userData.radio} onChange={(event) => changeData(event)}>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          تم السداد   
                        </label>
                       <input className="form-check-input check-input" name="flexRadioDefault" value={"radio1"}  type="radio"  id="flexRadioDefault1" />
                
                       <label className="form-check-label" htmlFor="flexRadioDefault2">
                           لم يتم السداد 
                        </label>
                       <input className="form-check-input check-input" name="flexRadioDefault" value={"radio2"}  type="radio"  id="flexRadioDefault2" />
                        
                    </div>
                <label  className="col-sm-3 label-radio col-form-label">الموقف من السداد</label>
                {error && <p style={{ color: 'red' }}>{error.radioError}</p>}
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-9 input-cont">
                        <select className="form-select form-select-lg mb-3" selected={userData.selc2} name="selc2"
                         onChange={(event) => changeData(event)} id="inputselc2" aria-label=".form-select-lg example">
                            <option value={"1"}>رخصــــــــة بنـــــــاء</option>
                            <option value={"2"}>Two</option>
                            <option value={"3"}>Three</option>
                        </select>
                    </div>
                    <label htmlFor="inputselc2" className="col-sm-3 col-form-label">نــوع الخدمـــــــة</label>
                    {error && <p style={{ color: 'red' }}>{error.selc2Error}</p>}
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-9 input-cont">
                        <select className="form-select form-select-lg mb-3" selected={userData.selc3} name="selc3"
                         onChange={(event) => changeData(event)} id="inputselc3" aria-label=".form-select-lg example">
                            <option value={"1"}>كفر الشيخ</option>
                            <option value={"2"}>Two</option>
                            <option value={"3"}>Three</option>
                        </select>
                    </div>
                    <label htmlFor="inputselc3" className="col-sm-3 col-form-label">المستند</label>
                    {error && <p style={{ color: 'red' }}>{error.selc3Error}</p>}
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-9 input-cont">
                        <select className="form-select form-select-lg mb-3" selected={userData.selc4} name="selc4"
                        onChange={(event) => changeData(event)} id="inputselc4" aria-label=".form-select-lg example">
                            <option value="1">كفر الشيخ</option>
                            <option value={"2"}>Two</option>
                            <option value={"3"}>Three</option>
                        </select>
                    </div>
                    <label htmlFor="inputselc4" className="col-sm-3 col-form-label">رقم الاجراء</label>
                    {error && <p style={{ color: 'red' }}>{error.selc4Error}</p>}
                </div>
            </form>
      </div>
      <button type="submit" class="btn submit btn-primary">تسجيــــــــــل</button>
    </div>
  )
}

export default Register
