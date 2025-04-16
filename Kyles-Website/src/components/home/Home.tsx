import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";
import kdavatar from '../../assets/kdavatar.jpg'

export default function Home () {
    return (
        <div>
            <div className="container" style={{ marginTop: '10%'}} >
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center">
                                <div>
                                    <h1>Hello World! I'm Kyle.</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit explicabo ad odio ratione omnis repellendus voluptas voluptatibus voluptatum illum corporis.</p>
                                    <hr/>
                                    <p>Lorem repellendus voluptas voluptatibus voluptatum illum corporis.</p>
                                </div>
                                <div style={{marginLeft: '5%'}}>
                                    <Image src={kdavatar} roundedCircle fluid style={{ maxWidth: '200px', height: 'auto' }}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // style="border: 2px solid orange;"
}