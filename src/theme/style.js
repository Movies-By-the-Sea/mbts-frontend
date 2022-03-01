export default function bg_img(bg_url, bg_alt) {


    var isMobile = window.innerWidth < 600;

    return {
        backgroundImage: isMobile ? `linear-gradient(rgba(0, 0, 0, 0.70),
        rgba(0, 0, 0, 0.70)), url(${bg_alt})` : `url(${bg_url})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: isMobile ? "0px 20px" : "0px 70px",
    }
}