import logo from './logo.svg';
import './App.css';
import IconBox from './components/IconBox';
import { BiLockAlt } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { BsCurrencyDollar } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"
import BillFOrm from './components/BillFOrm';

function App() {
  return (
    <div className="App">

      <div className="container position_center">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="logo text-center mb-4">
              <img className='text-center' src="logo.png" alt="" />
            </div>
            <div className="border rounded-4 px-5 py-4">
              <div className="onboard-form-container  mb-4 fw-bold d-flex justify-content-between">
                <IconBox title="Account" icon={<BiLockAlt></BiLockAlt>}></IconBox>
                <IconBox title="Personal" icon={<BiUser></BiUser>}></IconBox>
                <IconBox title="Billing" icon={<BsCurrencyDollar></BsCurrencyDollar>}></IconBox>
                <IconBox title="Done" icon={<AiOutlineLike></AiOutlineLike>}></IconBox>
              </div>
              <div className="billing_form">
                <BillFOrm></BillFOrm>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
