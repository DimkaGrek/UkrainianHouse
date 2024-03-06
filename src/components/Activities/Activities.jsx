import { Link } from "react-router-dom";

import friendsImg1 from "../../assets/images/Friends@1x.png";
import friendsImg2 from "../../assets/images/Friends@2x.png";

const Activities = () => {
  return (
    <section>
      <div>
        <h2>Get Involved!</h2>
        <p>
          Come join our vibrant activities and explore new horizons. Whether
          you&#39;re into learning, having fun, or finding inner peace,
          there&#39;s
          <span>something for everyone</span> here.
          <br />
          Step into our center and dive into the rich world of{" "}
          <span>Ukrainian culture!</span>
        </p>
      </div>
      <ul>
        <li>Learn Dutch</li>
        <li>Fun Cultural Events</li>
        <li>Inspiring Lectures</li>
        <li>Creative Workshops</li>
        <li>Yoga Sessions</li>
        <li>
          Explore our <Link>Ukrainian Library</Link>
        </li>
      </ul>
      <picture>
        <source
          srcSet={`${friendsImg1} 1x, ${friendsImg2} 2x`}
          type="image/png"
        />
        <img
          className="w-[384px] h-[384px]"
          src={friendsImg1}
          alt="Photo of friends"
        />
      </picture>
    </section>
  );
};

export default Activities;
