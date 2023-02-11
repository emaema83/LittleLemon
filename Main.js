
import polygon1 from "./assets/polygon1.svg";
import vector2 from "./assets/vector2.svg";
import vector1 from "./assets/vector1.svg";
import vector3 from "./assets/vector3.svg";
import Form from "./components/Form";
import Component1 from "./components/Component1";
import EmailNotification from "./components/EmailNotification";
import Component11 from "./components/Component11";
import Name from "./components/Name";

const ReservationApp = () => {
    const propsData = {
      component1: {
        vector1: vector1,
        vector3: vector3,
        vector2: vector2,
        polygon1: polygon1,
        occassion: "Occassion",
      },
      form: {
        hour: "Hour",
        date: "Date",
        weAreOpenEveryDa: "We are open every day!",
        from18PmTo23Pm: "From 18pm to 23pm",
        numberOfDiners: "Number of guests",
      },
      name: {
        name: "Name",
      },
      name1: {
        name: "Phone ",
      },
      emailNotification: {
        email: "Email",
        receiveNotification: "Receive notification",
      },
      component11: {
        reserveNow: "Reserve now",
      },
    };

  return (
    <main>
      <span className="you-can-now-reserve">
        You can now reserve your table
      </span>
      <span className="we-are-happy-that-yo">
        We are happy that you want reserve a table in our local restaurant. We
        add new features for you to make your reservation process even more
        personalized.
      </span>
      <Component1
        className="component-1-instance-1"
        {...propsData.component1}
      />
      <span className="reservation-informat">Reservation information</span>
      <Form className="form-instance-1" {...propsData.form} />
      <span className="maximum-12-guests">Maximum 12 guests</span>
      <span className="your-personal-inform">Your personal information</span>
      <Name className="name-instance" {...propsData.name} />
      <Name className="name-1-instance-1" {...propsData.name1} />
      <EmailNotification
        className="email-notification-instance-1"
        {...propsData.emailNotification}
      />
      <div className="flex-container-1">
        <span>Reserve</span>
        <Component11
          className="component-11-instance-1"
          {...propsData.component11}
        />
      </div>

    </main>
  );
};