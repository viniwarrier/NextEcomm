import React from "react";
import styles from "../components/styles/ContactForm.module.css";
const Contactus = () => {
  return (
    <div className={styles.contact_container}>
    <div className={styles.contact_form}>
      <h2 className={styles.h2}>Contact Us</h2>
      <h6>ShopMe Help Center | 24x7 Customer Care Support</h6>
      <h6>
        The support executive will ensure speedy assistance so that your
        shopping experience is positive and enjoyable. You can even inform your
        loved ones of the support page so that they can properly get their
        grievances addressed as well.
      </h6>
      <form>
        <div>
          <label className={styles.label}>
            Name:
            <input
              type="text"
              className={styles.input}             
              placeholder="ABC"             
              required
            />
          </label>

          <label className={styles.label}>
            Email:
            <input
              type="email"
              className={styles.input}             
              placeholder="abc@email.com"              
              required
            />
          </label>

          <div>
            <label className={styles.label1}>Message: </label>
            <textarea aria-label="message"            
              className={styles.textarea}             
              required
            />
          </div>

          <div>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </div>
       
         <div className="accordion accordion-flush mt-2 pt-2" id="accordionFlushContact">
          <div className="accordion-item">
            <h2 className="accordion_header">
              <button
                className="accordion-button collapsed" 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne" 
              >
               <strong>How to track your order ?</strong> 
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushContact"
            >
              <div className="accordion-body">
                Click the drop-down arrow beside your name and select Orders.
                Click SEE DETAILS in front of the order you want to track. Click
                TRACK MY ITEM button in front of the order you wish to track.
                Delivery history is displayed.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
              <strong>  How to cancel your order ?</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushContact"
            >
              <div className="accordion-body">
                From the list of Orders in your Jumia Account, Click SEE DETAILS
                in front of the order you wish to cancel. Click the Cancel Item
                button. Select the right quantity and cancellation reason from
                the drop-down list and submit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
              <strong>  How to return your order ?</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushContact"
            >
              <div className="accordion-body">
                Login and go to ORDERS Then click on the order of the item(s)
                you wish to return. Select the number of items you wish to
                return, the reason for the return, and give us more details to
                help us identify the issue with the product. Select your
                preferred refund method Click here to know more about the refund
                possibilities. Check your information and submit your return
                request.
              </div>
            </div>
          </div> 
         </div>
      </form>
    </div> 
    </div>
  );
};

export default Contactus;
  
