
import React ,{Component} from "react";
import Swiper from "./swiper-3.3.1.min.js";

export default class ReactSwipe extends Component{

    static defaultProps = {
        swipe:null
    }

    render(){
        
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.children.map((child,idx)=>{
                            return (
                              <div className="swiper-slide" key={idx}>{child}</div>
                            )
                        })
                    }
                </div>
                <div class="swiper-pagination"></div>
            </div>
        )
    }

    componentDidUpdate(){
        const {swipeOptions} = this.props;
        const swipe = new Swiper(".swiper-container",swipeOptions)
    }
}