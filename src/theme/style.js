export default function bg_img(bg_url, bg_alt, overflow) {


    var isMobile = window.innerWidth < 600;

    return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70),
        rgba(0, 0, 0, ${isMobile ? '0.7' : '0'})), url(${isMobile ? bg_alt : bg_url})`,
        // backgroundImage: isMobile ? `linear-gradient(rgba(0, 0, 0, 0.70),
        // rgba(0, 0, 0, 0.70)), url(${bg_alt})` : `url(${bg_url})`,
        height: overflow === undefined ? "100vh" : "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: isMobile ? "0px 20px" : "0px 70px",
    }
}