function Map() {
    return (
        <>
            <div className="our_location">


                <div className="container">

                    <div className="row logo">
                        <div className="col-12 text-center display-5 mt-5 ">
                            {/* <img src={require("./image/download.png")} className='img-fluid me-5 d-none d-md-block' alt="" /> */}
                            <b><i>OUR LOCATION</i></b>
                             {/* <img src={require("./image/download.png")} alt="" className="img-fluid ms-5 " /> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={require("./image/map.jpeg")} alt="" className="img-fluid mt-5" />
                </div>
            </div>
        </>
    )
}
export default Map