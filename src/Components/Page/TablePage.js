import React from "react";
import GetDate from "./../Date/Date";
import "./tablepage.css";
import Table from './../Table/Table';

const TablePage = () => {
  return (
    <div className="container">
      <h1>تحديد العضو الميداني</h1>
      <div className="BG-container">
        <GetDate />
        <div className="BG-table-container">
          <Table/>
        </div>
        <div>
          <div className="mb-3 row  select-cont">
            <div className="col-sm-4 col-lg-7 col-md-7 ">
              <select
                className="form-select form-select-lg mb-3 select-label"
                name="selc1"
                id="inputselc1"
                aria-label=".form-select-lg example"
              >
                <option value="1">الحامول</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label htmlFor="inputsec1" className="col-sm-3 col-select-label">
              تحديد عضو ميداني
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn submit btn-primary">تحــــــــديد</button>
    </div>
  );
};

export default TablePage;
