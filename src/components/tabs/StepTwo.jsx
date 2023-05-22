//Import components
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { tabEdit } from "../../store/slices/main";

//Import styles
import "@styles/components/stepTwo.scss";

export default function StepTwo() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.mainReducer.currentTab);

  //Initialization form manager
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      modal: {},
    },
    reValidateMode: "onChange",
  });

  //Request for send email
  const onSubmit = (data) => {
    const obj = data.modal;
    obj.type = currentTab.tab.name;
    axios.post("https://send.cementtruckacademy.com/sendmail", data.modal, {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    });
    dispatch(
      tabEdit({
        tab: null,
        step: 3,
      })
    );
  };

  return (
    <div className="step-two">
      <div className="steps-line">
        <div className="steps-manager">
          <div className="circles">
            <div className="circle">
              <p>Step 1</p>
            </div>
            <div className="circle">
              <p>Step 2</p>
            </div>
            <div className="circle">
              <p>Finish</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-step-two">
        <div>
          <h2>Fill out an application</h2>
          <p className="description">
            As a graduate of our program, you will receive employment
            assistance, competitive wages, flexible hours and career
            opportunities. Our instructors are experienced professionals who are
            committed to your success.
          </p>
          <h4>You have chosen this package</h4>
          <div className="card">
            {currentTab?.tab?.img && (
              <>
                <img
                  className="img-static"
                  src={currentTab.tab.img}
                  alt="img-truck"
                />
              </>
            )}
            <h4>{currentTab?.tab?.name}</h4>
            <div className={currentTab?.tab?.className}></div>
            <div className="description">
              <p>{currentTab?.tab?.paragraphOne}</p>
              <p>{currentTab?.tab?.paragraphTwo}</p>
              <p>{currentTab?.tab?.paragraphThree}</p>
              <button>
                BUY
                <b className={currentTab?.tab?.buttonStandard}>
                  {currentTab?.tab?.price}
                </b>
              </button>
              <div className="description-background"></div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>First name*</p>
            <input
              type="text"
              {...register("modal.firstName", {
                required: "This field is required",
                maxLength: {
                  value: 50,
                  message: "*Maximum length 50 characters",
                },
              })}
            />
          </label>
          <label>
            <p>Last name*</p>
            <input
              type="text"
              {...register("modal.lastName", {
                required: "This field is required",
                maxLength: {
                  value: 50,
                  message: "*Maximum length 50 characters",
                },
              })}
            />
          </label>
          <label>
            <p>Email address *</p>
            <input
              type="text"
              {...register("modal.email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*Invalid email format",
                },
                maxLength: {
                  value: 50,
                  message: "*Maximum length 50 characters",
                },
              })}
            />
          </label>
          <label>
            <p>Telephone *</p>
            <input
              type="number"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              {...register("modal.phone", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "*Minimum length 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "*Maximum length 12 characters",
                },
              })}
            />
          </label>
          <label>
            <p>Message</p>
            <input
              type="text"
              {...register("modal.message", {
                maxLength: {
                  value: 250,
                  message: "*Maximum length 250 characters",
                },
              })}
            />
          </label>
          <input
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            type="submit"
            value={"Send request"}
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
}
