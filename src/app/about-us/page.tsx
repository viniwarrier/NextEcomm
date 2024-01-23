
import styles from "../components/styles/Aboutus.module.css";

const AboutUs = () => {
  return (
    <div className={styles.about_container}>
      <h2 className={styles.h2}>About Us</h2>
      <p className={styles.p}>Welcome to ShopMe, your one-stop online shopping destination! We are committed to providing you with a wide range of quality products at affordable prices.</p>
      <p className={styles.p}>Our mission is to make your online shopping experience enjoyable and convenient. With a user-friendly interface and secure payment options, you can shop with confidence.</p>
      <p className={styles.p}>At ShopMe customer satisfaction is our top priority. If you have any questions or need assistance, feel free to <a href="/">contact us</a>. We're here to help!</p>
      <div className="container text-center mt-5 pt-5">
        <div className={'row col-12'}><h3 className={styles.h3}>Our Services</h3></div>
        <div className={'row'}>
                <div className={'col-md-6 mt-3 pt-3'}>
                    <h4 className={styles.h4}>Last Mile Express Delivery</h4>
                    <h6>Deliver your shipments right to the door of your clients, in addition to cash collection.</h6>
                    
                <div><img src="/images/express.png" height={200} alt="express"/></div></div>              
                <div className={"col-md-6"}><img src="/images/warehouse1.png" height={200} alt="warehouse"/>
                <div><h4 className={styles.h4}>Fulfilment And Distributed Storage Services</h4><h6>We have a network of small/medium sized storage and fulfilment facilities for providing storage, pick, pack and shipping services.</h6></div>
        </div></div>
            <div className="row col-12"><h3 className={styles.h3}>Our Capabilities</h3></div>
            <div className="row col-12">
                <div className="col-lg-4 col-md-4 mb-2 pb-2">
                <div className={styles.cardsize}>    
                    <div className="h-100">
                        <img src="/images/network.png" height={150} width={130} className="card-img-top mt-3 ps-5 pe-5" alt="cap1"/>
                        <h5 className="card-title mt-3">Network</h5>
                        <div className="card-body">
                            <p className="card-text mt-3 pt-3">ShopMe services provides nationwide coverage to ensure delivering your products to your customers no matter where they are.</p>
                        </div>
                    </div>
                </div>
                </div>

            <div className="col-lg-4 col-md-4 mb-2 pb-2">
            <div className={styles.cardsize}>    
                <div className="h-100">
                    <img src="/images/tech.png" height={150} width={130} className="card-img-top mt-3 ps-5 pe-5" alt="cap1"/>
                    <h5 className="card-title mt-3">Technology</h5>
                    <div className="card-body">
                        <p className="card-text mt-3 pt-3">ShopMe Services is relaying on technology to ensure a smooth flow of operations across different stages of the shipping process through different systems and applications.</p>
                    </div>
                </div>
            </div>
            </div> 

            <div className="col-lg-4 col-md-4 mb-2 pb-2">
            <div className={styles.cardsize}>    
                <div className="h-100">
                    <img src="/images/quality.jpg" height={150} width={130} className="card-img-top mt-3 ps-5 pe-5" alt="cap1"/>
                    <h5 className="card-title mt-3">Quality</h5>
                    <div className="card-body">
                        <p className="card-text mt-3 pt-3">Highly trained and presentable delivery agents, to ensure customer satisfaction. Come and explore our wide range of products.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  
  );
};

export default AboutUs;
