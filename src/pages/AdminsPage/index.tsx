import { useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.scss';
// import styles from "./body.module.scss"

import sideLogoImg from "../../assets/1.png";

interface AdminsPageProps {

}

const AdminsPage: React.FC<AdminsPageProps> = () => {

    /* useEffect(() => {
        document.body.classList.add('admins-page-body');

        return function cleanup() {
            document.body.classList.remove('admins-page-body');
        };
    }, []); */

    return (
        // <BodyClassName className="admins-page-body">
            <div className="admins-page-body">
                <main>
                    <div className="logo-and-title-container">
                        <div className="infinity">
                            <svg className="drop-left" width="30%" viewBox="0 0 20 42">
                                <path fill="#C365A5" stroke="transparent" d="M15 3
                                    Q16.5 6.8 25 18
                                    A12.8 12.8 0 1 1 5 18
                                    Q13.5 6.8 15 3z" />
                            </svg>
                            <svg className="drop-right" width="30%" viewBox="0 0 30 42">
                                <path fill="#C365A5" stroke="transparent" d="M15 3
                                    Q16.5 6.8 25 18
                                    A12.8 12.8 0 1 1 5 18
                                    Q13.5 6.8 15 3z" />
                            </svg>
                        </div>
                        <div className="title-container">
                            <h1>LILI&nbsp;<span>CHAT<span className="title-bot">BOT</span></span></h1>
                        </div>
                        <Link className="button-link" to="/register">
                            <button className="register-button" >REGISTER PROBLEMS</button>
                        </Link>
                        <Link className="button-link" to="/edit-database">
                            <button className="register-button" >EDIT DATABASE</button>
                        </Link>
                        <Link className="button-link" to="/talk">
                            <button className="talk-button">TALK</button>
                        </Link>
                    </div>
                </main>

                <aside>
                    <img src={sideLogoImg} alt="image" className="side-image" />
                </aside>
            </div>
        // </BodyClassName>
    );
}

export default AdminsPage;