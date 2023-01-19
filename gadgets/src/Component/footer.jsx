import styles from '../css/footer.module.css'
import img from '../images/GadgetTree.png'
export function Footer() {

    return <>

        <div className={styles.Footer}>
            <div className={styles.footer_80}>
                <div className={styles.flexone}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src='https://cdn.gadgets360.com/gadgets360_logo.png' alt="Gadget Tree" />
                    </div>
                    <div>
                        <a href="">About Us</a>
                        <a href="">SiteMaps</a>
                        <a href="">Feedback</a>
                        <a href="">Archives</a>
                        <a href="">Contact Us</a>
                        <a href="">RSS</a>
                    </div>
                    <div>
                        <a href="">Adverties</a>
                        <a href="">Career</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Ethics</a>
                        <a href="">Terms & Condition</a>
                        <a href="">Complaint Redressal</a>
                    </div>
                    <div>

                        <div>
                            Gadgets 360 is available in :
                        </div>
                        <div className={styles.lastcont}>

                            <a href="">English</a>
                            <a href="">Hindi</a>


                        </div>
                        <div className={styles.semiend}>

                            <div>Follow Us :</div>
                            <div className={styles.imgs}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGY4uDDAveV7t22ohDqi084tYWG5LrnvooA&usqp=CAU" alt="" />
                                {/* <img src="https://cdn-icons-png.flaticon.com/512/8409/8409152.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                                <img src="https://cdn-icons-png.flaticon.com/512/4494/4494485.png" alt="" /> */}
                            </div>

                        </div>

                    </div>

                    <div><div><div>Download Our Apps</div></div>
                        
                        <div className={styles.lastcont1}>
                            <div><img  src="https://www.gadgets360.com/static/mobile/images/playstore_badge.png" alt="" /></div>
                            <div><img width='90%' src="https://www.gadgets360.com/static/mobile/images/appstore_badge.png" alt="" /></div>
                        </div>
                        <div>Avalaible in Hindi</div>
                        <div style={{ margin: "5% 3%", textAlign: "right" }}><img src="https://www.gadgets360.com/static/mobile/images/playstore_badge.png" alt="" /></div>
                    </div>

                </div>
            </div>
            <div className={styles.endfooter}>
                © Copyright Red Pixels Ventures Limited 2023. All rights reserved.
            </div>

        </div>

    </>

}