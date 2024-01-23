import "./index.scss";
import Smalltab from "./smalltab";
import Bigtab from "./bigtabs";

function index() {
  return (
    <div className="display-tabs">
      <div className="top-tabs d-flex align-items-center justify-content-between flex-wrap">
        <Smalltab
          text1="Enjoy"
          text2="With"
          text3="Earphones"
          imgUrl="earbuds.png"
          buttonColor="red"
          styleProp="blackColor-gradient"
          textColor={{ color: "white" }}
        />
        <Smalltab
          text1="New"
          text2="Wearable"
          text3="Gadgets"
          imgUrl="gadgets.png"
          buttonColor="white"
          styleProp="yellow-gradient"
          textColor={{ color: "white" }}
        />
        <Bigtab
          text1="Trend"
          text2="Devices"
          text3="Smartphones"
          imageurl="smartphones.png"
          buttonColor="white"
          styleProp="red-gradient"
          textColor={{ color: "white" }}
        />
      </div>
      <div className="bottom-tabs d-flex align-items-center justify-content-between flex-wrap">
        <Bigtab
          text1="Best"
          text2="Gaming"
          text3="Consoles"
          imageurl="console.png"
          buttonColor="red"
          styleProp="white-gradient font-black"
          textColor={{ color: "black" }}
        />
        <Smalltab
          text1="Play"
          text2="Game"
          text3="Oculus"
          imgUrl="oculus.png"
          buttonColor="white"
          styleProp="green-gradient"
          textColor={{ color: "white" }}
        />
        <Smalltab
          text1="New"
          text2="Amazon"
          text3="Speakers"
          imgUrl="speaker.png"
          buttonColor="white"
          styleProp="blue-gradient"
          textColor={{ color: "white" }}
        />
      </div>
    </div>
  );
}

export default index;
