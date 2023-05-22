import { tabEdit } from "../store/slices/main";
import { useDispatch } from "react-redux";
//Import images
import logo from "@images/logo.svg";
//Import styles
import "@styles/components/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const dispatch = useDispatch();
  return (
    <footer id="footer">
      <section className="content-footer">
        <img
          onClick={() => {
            dispatch(
              tabEdit({
                tab: null,
                step: 0,
              })
            );
            window.scrollTo(0, 0);
          }}
          src={logo}
          alt="texas-cement-logo"
        />

        <div className="social-footer">
          <div>
            <h3>Contacts:</h3>
            <p>+1(516) 218-0060</p>
            <p>contact@cementtruckacademy.com</p>
          </div>
        </div>
      </section>
      <section className="year">
        <p>© {year} Texas Cement. All rights reserved.</p>
      </section>
    </footer>
  );
}
