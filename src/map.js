function Map() {
    return (
        <>
            <div className="our_location">


                <div className="container ">

                    <div className="row logo">
                        <div className="col-12  text-center display-5 mt-5 ">
                            <b><i>OUR LOCATION</i></b>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    {/* <img src={require("./image/map.jpeg")} alt="" className="img-fluid mt-5" /> */}

                    <div style={{width: '100%'}} ><iframe width="100%" height={500}  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%20Shivdhara%20Society%20Mansarovar%20Part-4,%20Yogi%20Chowk,%20Varachha,%20Surat,%20Gujarat%20395006+(RoyalRich%20Hotel)&t=k&z=14&ie=UTF8&iwloc=B&output=embed">&lt;<a href="https://www.maps.ie/distance-area-calculator.html"/>&gt;measure acres/hectares on map&lt;&gt;</iframe></div>
                </div>
            </div>
        </>
    )
}
export default Map