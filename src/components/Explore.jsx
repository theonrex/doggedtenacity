import React from "react";
import FaithImg from "../static/images/Faith-Website.jpg";
import FinanceImg from "../static/images/money-2724241_640.jpg";
import Familyimg from "../static/images/family.jpg";
import FitnessImg from "../static/images/fitness.jpg";
import Future from "../static/images/future.jpg";

function Explore() {
  return (
    <div className="explore_bg">
      <div className="rowx ">
        <div className="col50 bible">
          <img src={FaithImg} alt="Faith" />
        </div>
        <div className="col50 explore-mg">
          <h1 className="Treading Insightful">Faith</h1>
          <p className="philosophy">
            Faith and fear are introduced by communication, primarily
            communication is conveyed through words. Men of Faith are men that
            the world is not worthy of, they have had intercourse with the right
            words which has produced the right results for them.
          </p>
          <p>
            <i class="bi bi-diamond-fill"></i> A man beliefs will always
            determine the course of his life.
          </p>{" "}
          <p>
            {" "}
            <i class="bi bi-diamond-fill"></i> "As a man thinks in his heart, so
            he is"- King Solomon
          </p>{" "}
          <p className="help_you">
            Let's help you navigate your way to a place where your heart is
            devoid of crippling fear and Faith take preeminence.
          </p>
        </div>
      </div>
      <div className="rowx Finance">
        <div className="col50 explore-mg Finance_text">
          <h1 className="Treading Insightful">Finance</h1>
          <p className="philosophy">
            Too often financial mistakes and ignorance leave many confused,
            incapacitated, helpless and frustrated. Financial stability is very
            achievable for everyone; when the right principles and attitude are
            engaged. Getting your finances right is a great step is setting up a
            life of fulfilment. We will provide you We'll curated contents and
            articles to point you in the right direction. Let's Get the Finances
            thing right!
          </p>
        </div>
        <div className="col50 bible Finance_img">
          <img src={FinanceImg} alt="Finance" />
        </div>
      </div>
      <div className="rowx">
        <div className="col50 bible">
          <img src={Familyimg} alt="Family" />
        </div>
        <div className="col50 explore-mg">
          <h1 className="Treading Insightful">Family</h1>
          <p className="philosophy">
            Family has been defined as the basic unit of society, yet its
            shocking to see how neglected it is. It is important to note that
            addressing the Family as a unit is as important as the attention we
            give to the individuals that make up that unit. Relationships in our
            families both vertically and horizontally require the utmost sense
            of responsibility to nurturing them. Its been discovered that most
            successful people have been greatly influenced by their families. A
            great family is good inheritance!
          </p>
        </div>
      </div>
      <div className="rowx Fittness">
        <div className="col50 explore-mg Fittness_text">
          <h1 className="Treading Insightful">Fitness</h1>
          <p className="philosophy">
            Health and well-being is a great part of our conversations today.
            From physically health to mental and emotional health, studies are
            being made daily on how man can live in a better shape. Our
            discussions will revolve around this as well and seek to give you
            the necessary boost you need to thrive in this aspect.
          </p>
        </div>
        <div className="col50 bible Fittness_img">
          <img src={FitnessImg} alt="Fittness" />
        </div>
      </div>
      <div className="rowx">
        <div className="col50 bible">
          <img src={Future} alt="un" />
        </div>
        <div className="col50 explore-mg">
          <h1 className="Treading Insightful">Future</h1>
          <p className="philosophy">
            Afraid about the future? Anxious? Doubtful? Skeptical? I have been
            there, I know what it's like to wake up each morning and wish you
            could peek into the future, see if it was any better or just simply
            resign to fate. I know how it feels to see your vision board become
            a mess, to see time become a speedster, running like its main goal
            is to make sure you never catch up. It's time to have that dauntless
            ambition with your spirit on fire to see the future of your dreams a
            reality, because it was made to be.
          </p>
          <p>
            You have a Bright Future, I've got my shades on, have you?
            <i class="bi bi-emoji-wink-fill"></i>
          </p>
          <p>Life will be better and we will live comfortably well- Adeprinz</p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
