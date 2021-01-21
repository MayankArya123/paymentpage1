import  React ,{useState} from 'react'
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  const [parentName,setparentName] = useState('')
  const [parentCn,setparentCn] = useState('')
  const [parentEmail,setparentEmail] = useState('')
  const [studentName,setstudentName] = useState('')
  const [studentClass,setstudentClass] = useState('')
  const [countrycode,setcountrycode] = useState('+91')
  const [couponcode,setcouponcode] = useState('')

  const onSubmit=()=>{
    console.log('hitting')
  }

  const onChangecountryCode=()=>{
    console.log('hccc')
  }

  const onChangecouponcode=()=>{
    console.log('hccc')
  }

  const onChangeparentCn=()=>{
    console.log('hscpcn')
  }
  // const onChangestudentName=()=>{
  //   console.log('hspe')
  // }
  const onChangestudentName=()=>{
    console.log('hcsn')
  }
  const onChangeparentEmail=()=>{
    console.log('hcpe')
  }
  const onChangeparentName=()=>{
    console.log('hcpn')
  }
  const onChangestudentclass=()=>{
    console.log('hcsc')
  }

  return (
    <div className="App">
        <h2 className="middle"> Techo Kids </h2>
          <div className="content">
          <h2 className="align_center">PAYMENT REQUEST</h2>
          <div class="row main-block">
          <div class="col-md-6 col-lg-6 col-md-4  box1">
          <div class="card">
          <div class="card-body">
            <h5 class="card-title"> Advance Plan   <span className="padding_left"> ₹30000 </span> </h5> 
            <h4> Grade 1-3     <span className="line_through"> ₹45000 </span>  </h4>
            <label className="margin_top"> Do you have a coupon code </label>
            
<div class="input-group mb-3 coupon_container">
<input type="text" class="form-control" placeholder="Enter coupon code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
<span class="input-group-text green_button" id="basic-addon2">APPLY</span>
</div>

       <h6>  Total Amount Payable                                                   ₹30000 </h6>
         <p> Total Savings ₹15000 </p>
     
        
          </div>
          </div>
        </div>
          <div class="col-md-6 col-lg-6 col-md-12 form" >
          <form className="form" onSubmit={(e)=>onSubmit(e) }>
          <div className="form-group"> 
            <label >Parent’s Name* </label>
            <input 

            placeholder="Enter Parent’s Name"
            type="text" 
            className="form-control"
            value={parentName}
            onChange={(e)=>onChangeparentName(e)}
            />
          </div>
          <div className="form-group"> 
            <label> Parent’s Email Id* </label>
            <input  type="text"
            placeholder="Enter Parent’s Email Id"
                required
                className="form-control"
                value={parentEmail}
                onChange={(e)=>onChangeparentEmail(e)}
                />
          </div>
          <div className="form-group">
            <label> Parent’s Contact* </label>

            <div class="row">
                  <div class="col-md-2 col-lg-2">
                  <select useref="userInput"
                  required
                  className="form-control"
                  value={countrycode}
                  onChange={(e)=>onChangecountryCode(e)}>
                    <option 
                        key={1}
                        value={'+91'}> logo India +91
                   </option>
                    <option 
                        key={2}
                        value={'+1'}> <span>logo</span> Unites States Of America +1
                   </option>
                    <option 
                        key={3}
                        value={'+44'}> <span>logo</span> United Kingdom of Great Britain +44
                   </option>
              </select>
                  </div>
                  <div class="col-md-10 col-lg-10">
                  <input 
                  placeholder="Enter Parent’s contact number"
                  type="text" 
                  className="form-control"
                  value={parentCn}
                  onChange={(e)=>onChangeparentCn(e)}
                  />
                  </div>
            </div>
            
          </div>
          <div className="form-group"> 
          <label >Student Name* </label>
          <input 
          type="text" 
          placeholder="Enter student's name"
          className="form-control"
          value={studentName}
          onChange={(e)=>onChangestudentName(e)}
          />
        </div>
        <div className="form-group buttons"> 
        <label > Select grade/class* </label>
          <br/>
        <button type="button" class="btn btn-outline-info button1" value="+1th"  onClick={(e)=>onChangestudentclass(e)}  > 1th </button>
        <button type="button" class="btn btn-outline-info button2"  onClick={(e)=>onChangestudentclass(e)}   >2th</button>
        <button type="button" class="btn btn-outline-info button3"   onClick={(e)=>onChangestudentclass(e)}  >3th</button>
        <button type="button" class="btn btn-outline-info button4"    onClick={(e)=>onChangestudentclass(e)}   >4th</button>
        <button type="button" class="btn btn-outline-info button5"  onClick={(e)=>onChangestudentclass(e)} >5th</button>
        <button type="button" class="btn btn-outline-info button6"  onClick={(e)=>onChangestudentclass(e)} >6th</button>
          <br/>
          <div className="gap">
          </div>
        <button type="button" class="btn btn-outline-info button7"  onClick={(e)=>onChangestudentclass(e)}  >7th</button>
        <button type="button" class="btn btn-outline-info button8"  onClick={(e)=>onChangestudentclass(e)} >8th</button>
        <button type="button" class="btn btn-outline-info button9"  onClick={(e)=>onChangestudentclass(e)} >9th</button>
        <button type="button" class="btn btn-outline-info button10"  onClick={(e)=>onChangestudentclass(e)} >10th</button>
        <button type="button" class="btn btn-outline-info button11"  onClick={(e)=>onChangestudentclass(e)} >11th</button>
        <button type="button" class="btn btn-outline-info button12"  onClick={(e)=>onChangestudentclass(e)} >12th</button>
      </div>
  
          <div className="form-group">
          <button type="button" class="btn btn-info expand">PROCEED TO PAY</button>
          </div>
        </form>
          </div>
      </div>
          </div>
          </div>

  );
}

export default App;
