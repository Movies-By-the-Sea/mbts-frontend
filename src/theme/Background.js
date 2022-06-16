export default class Background {

    constructor(props, isMobile) {
        this.props = props;
        this.mobile = isMobile;
    }

    background() {
        if (this.mobile) {
            return `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${this.props.alt}')`;
        } else if (this.props.video === undefined) {
            return `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0)), url('${this.props.img}')`;
        }
        return 'none';
    }

    getImageStyle() {
        return {
            backgroundImage: this.background(),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: this.props.overflow === undefined ? "100vh" : "100%",
            padding: this.mobile ? "0px 20px" : "0px 70px",
        }
    }

    getVideoStyle() {
        return {
            position: 'fixed',
            objectFit: 'fill',
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            right: 0,
            bottom: 0,
        }
    }
}