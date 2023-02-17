import React from 'react';
import Tab from './Tab';

function StepFour() {
    return (
        <Tab id="step4" heading="Step 4">
            <>
                <div className="all-info-container">
                    <div className="list-content">
                        <a href="#listone" data-toggle="collapse" aria-expanded="false" aria-controls="listone">Collapse 1 <i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listone">
                            <div className="list-box">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First and Last Name *</label>
                                            {/* <input className="form-control" type="text"  name="name" placeholder="" disabled="disabled">  */}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number *</label>
                                            {/* <input className="form-control" type="text" name="name" placeholder="" disabled="disabled">  */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-content">
                        <a href="#listtwo" data-toggle="collapse" aria-expanded="false" aria-controls="listtwo">Collapse 2 <i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listtwo">
                            <div className="list-box">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Address 1 *</label>
                                            {/* <input className="form-control" type="text" name="name" placeholder="" disabled="disabled">  */}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City / Town *</label>
                                            {/* <input className="form-control" type="text" name="name" placeholder="" disabled="disabled">  */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Country *</label>
                                            {/* <select name="country2" className="form-control" id="country2" disabled="disabled">
                                                                    <option value="NG" selected="selected">Nigeria</option>
                                                                    <option value="NU">Niue</option>
                                                                    <option value="NF">Norfolk Island</option>
                                                                    <option value="KP">North Korea</option>
                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                    <option value="NO">Norway</option>
                                                                </select> */}
                                        </div>
                                    </div>



                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Legal Form</label>
                                            {/* <select name="legalform2" className="form-control" id="legalform2" disabled="disabled">
                                                                    <option value="" selected="selected">-Select an Answer-</option>
                                                                    <option value="AG">Limited liability company</option>
                                                                    <option value="GmbH">Public Company</option>
                                                                    <option value="GbR">No minimum capital, unlimited liability of partners, non-busines</option>
                                                                </select>  */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Business Registration No.</label>
                                            {/* <input className="form-control" type="text" name="name" placeholder="" disabled="disabled">  */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Registered</label>
                                            {/* <select name="vat2" className="form-control" id="vat2" disabled="disabled">
                                                                    <option value="" selected="selected">-Select an Answer-</option>
                                                                    <option value="yes">Yes</option>
                                                                    <option value="no">No</option>
                                                                </select>  */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Seller</label>
                                            {/* <input className="form-control" type="text" name="name" placeholder="" disabled="disabled"/>  */}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Company Name *</label>
                                            {/* <input className="form-control" type="password" name="name" placeholder="" disabled="disabled"/>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-content">
                        <a href="#listthree" data-toggle="collapse" aria-expanded="false" aria-controls="listthree">Collapse 3 <i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listthree">
                            <div className="list-box">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name *</label>
                                            <input className="form-control" type="text" name="name" placeholder="" />
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Number *</label>
                                            <input className="form-control" type="text" name="name" placeholder="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </Tab>
    );
}

export default StepFour;
