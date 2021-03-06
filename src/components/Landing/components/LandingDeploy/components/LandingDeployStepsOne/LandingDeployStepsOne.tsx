import React from "react";
import "./LandingDeployStepsOne.scss";

const LandingDeployStepsOne = () => {
  return (
    <div className="deploy-steps-one">
      <div className="deploy-steps-image-container">
        <span className="path-line"></span>
        <img
          src={require("../../../../../../assets/svg/num_1.svg")}
          alt="num_1"
          className="numbers"
        />
      </div>
      <div className="deploy-steps-title">DEVELOP</div>
      <div className="deploy-steps-description">
        ArGo is the best place to deploy any frontend app to permaweb. Permaweb give
        you power to deploy full web app permanently, retrieved quickly, and
        decentralized – forever. <br /> No more 404s. No more stealth edits. No more
        web apps that decline in quality.
      </div>
      <div className="jamstack-support-container">
        <div className="jamstack-support-title">WORKS WITH JAMSTACK FRAMEWORKS</div>
        <div className="jamstack-support-icons-container">
          <div className="jamstack-support-icon">
            <img
              src={require("../../../../../../assets/svg/React.svg")}
              alt="React"
            />
          </div>
          <div className="jamstack-support-icon icon-disabled">
            <img
              src={require("../../../../../../assets/svg/Next.svg")}
              alt="React"
            />
            <div>Coming soon</div>
          </div>
          <div className="jamstack-support-icon icon-disabled">
            <img src={require("../../../../../../assets/svg/Vue.svg")} alt="React" />
            <div>Coming soon</div>
          </div>
          <div className="jamstack-support-icon icon-disabled">
            <img
              src={require("../../../../../../assets/svg/Angular.svg")}
              alt="React"
            />
            <div>Coming soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDeployStepsOne;
